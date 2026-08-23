import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
export function SiteShell({ children }: { children: React.ReactNode }) { return <><Header /><main>{children}</main><Footer /></>; }
