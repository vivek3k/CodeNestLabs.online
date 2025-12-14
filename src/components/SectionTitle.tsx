import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
  badge?: string;
}

const SectionTitle = ({ title, subtitle, className, centered = true, badge }: SectionTitleProps) => {
  return (
    <div className={cn("mb-8", centered ? "text-center" : "text-left", className)}>
      {badge && <span className="badge-primary mb-3 inline-flex">{badge}</span>}
      <h2 className="section-title text-foreground mb-2">{title}</h2>
      {subtitle && <p className={cn("section-subtitle", centered && "mx-auto")}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;