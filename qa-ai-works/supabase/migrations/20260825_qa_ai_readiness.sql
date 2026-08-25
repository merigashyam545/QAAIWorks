create extension if not exists pgcrypto;

create table if not exists public.assessment_leads (
  lead_id uuid primary key default gen_random_uuid(),
  result_token uuid not null unique,
  first_name text not null check (char_length(first_name) between 1 and 100),
  email text not null check (char_length(email) <= 250),
  whatsapp text not null check (char_length(whatsapp) <= 30),
  linkedin_url text check (char_length(linkedin_url) <= 500),
  role text, experience text, goal text,
  source text not null default 'direct',
  utm_source text, utm_medium text, utm_campaign text, utm_content text, utm_term text,
  referrer text, landing_path text,
  lead_temperature text not null check (lead_temperature in ('HOT', 'WARM', 'NURTURE')),
  answers jsonb not null,
  scores jsonb not null,
  total_score integer not null check (total_score between 0 and 100),
  readiness_band text not null,
  consent_at timestamptz not null default now(),
  consent_version text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.cohort_applications (
  application_id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.assessment_leads(lead_id) on delete cascade,
  cohort_slug text not null check (char_length(cohort_slug) between 1 and 120),
  status text not null default 'INTERESTED',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (lead_id, cohort_slug)
);

create table if not exists public.lab_registrations (
  registration_id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.assessment_leads(lead_id) on delete cascade,
  event_slug text not null check (char_length(event_slug) between 1 and 120),
  status text not null default 'REGISTERED',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (lead_id, event_slug)
);

create index if not exists assessment_leads_email_idx on public.assessment_leads (lower(email));
create index if not exists assessment_leads_created_at_idx on public.assessment_leads (created_at desc);
create index if not exists assessment_leads_temperature_idx on public.assessment_leads (lead_temperature, created_at desc);

alter table public.assessment_leads enable row level security;
alter table public.cohort_applications enable row level security;
alter table public.lab_registrations enable row level security;

revoke all on public.assessment_leads from anon, authenticated;
revoke all on public.cohort_applications from anon, authenticated;
revoke all on public.lab_registrations from anon, authenticated;

create or replace function public.submit_assessment(
  p_result_token uuid, p_first_name text, p_email text, p_whatsapp text, p_linkedin_url text,
  p_role text, p_experience text, p_goal text, p_source text,
  p_utm_source text, p_utm_medium text, p_utm_campaign text, p_utm_content text, p_utm_term text,
  p_referrer text, p_landing_path text, p_lead_temperature text,
  p_answers jsonb, p_scores jsonb, p_total_score integer, p_readiness_band text, p_consent_version text
) returns uuid language plpgsql security definer set search_path = public as $$
declare v_lead_id uuid;
begin
  if p_result_token is null or p_first_name is null or p_email is null or p_whatsapp is null or p_consent_version is null then raise exception 'invalid_submission'; end if;
  if p_total_score < 0 or p_total_score > 100 or p_lead_temperature not in ('HOT','WARM','NURTURE') then raise exception 'invalid_score'; end if;
  insert into public.assessment_leads (result_token, first_name, email, whatsapp, linkedin_url, role, experience, goal, source, utm_source, utm_medium, utm_campaign, utm_content, utm_term, referrer, landing_path, lead_temperature, answers, scores, total_score, readiness_band, consent_version)
  values (p_result_token, left(trim(p_first_name),100), lower(left(trim(p_email),250)), left(trim(p_whatsapp),30), left(p_linkedin_url,500), left(p_role,100), left(p_experience,100), left(p_goal,100), coalesce(left(p_source,120),'direct'), left(p_utm_source,120), left(p_utm_medium,120), left(p_utm_campaign,180), left(p_utm_content,180), left(p_utm_term,180), left(p_referrer,500), left(p_landing_path,500), p_lead_temperature, p_answers, p_scores, p_total_score, left(p_readiness_band,120), left(p_consent_version,40))
  returning lead_id into v_lead_id;
  return v_lead_id;
end $$;

create or replace function public.apply_to_cohort(p_result_token uuid, p_cohort_slug text)
returns boolean language plpgsql security definer set search_path = public as $$
declare v_lead_id uuid;
begin
  select lead_id into v_lead_id from public.assessment_leads where result_token = p_result_token;
  if v_lead_id is null then raise exception 'assessment_not_found'; end if;
  insert into public.cohort_applications (lead_id, cohort_slug) values (v_lead_id, left(trim(p_cohort_slug),120))
  on conflict (lead_id, cohort_slug) do update set updated_at = now();
  return true;
end $$;

create or replace function public.register_ai_qa_lab(p_result_token uuid, p_event_slug text)
returns boolean language plpgsql security definer set search_path = public as $$
declare v_lead_id uuid;
begin
  select lead_id into v_lead_id from public.assessment_leads where result_token = p_result_token;
  if v_lead_id is null then raise exception 'assessment_not_found'; end if;
  insert into public.lab_registrations (lead_id, event_slug) values (v_lead_id, left(trim(p_event_slug),120))
  on conflict (lead_id, event_slug) do update set updated_at = now();
  return true;
end $$;

revoke all on function public.submit_assessment(uuid,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,jsonb,jsonb,integer,text,text) from public;
revoke all on function public.apply_to_cohort(uuid,text) from public;
revoke all on function public.register_ai_qa_lab(uuid,text) from public;
grant execute on function public.submit_assessment(uuid,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,jsonb,jsonb,integer,text,text) to anon;
grant execute on function public.apply_to_cohort(uuid,text) to anon;
grant execute on function public.register_ai_qa_lab(uuid,text) to anon;

create or replace view public.assessment_enquiry_overview
with (security_invoker = true) as
select
  l.created_at,
  l.first_name,
  l.email,
  l.whatsapp,
  l.linkedin_url,
  l.role,
  l.experience,
  l.goal,
  l.total_score,
  l.readiness_band,
  l.lead_temperature,
  l.scores,
  l.answers,
  l.source,
  l.utm_source,
  l.utm_campaign,
  exists (select 1 from public.cohort_applications c where c.lead_id = l.lead_id) as applied_to_accelerator,
  exists (select 1 from public.lab_registrations r where r.lead_id = l.lead_id) as registered_for_lab
from public.assessment_leads l
order by l.created_at desc;

revoke all on public.assessment_enquiry_overview from anon, authenticated;
