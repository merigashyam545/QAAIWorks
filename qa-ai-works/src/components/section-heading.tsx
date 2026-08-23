type Props = { eyebrow: string; title: string; body?: string; light?: boolean };
export function SectionHeading({ eyebrow, title, body, light }: Props) { return <div className={`section-heading ${light ? "section-heading-light" : ""}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{body && <p>{body}</p>}</div>; }
