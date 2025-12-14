import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface CardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

const Card = ({ icon: Icon, title, description, className, children }: CardProps) => {
  return (
    <div
      className={cn(
        "group bg-card rounded-lg p-5 border border-border hover:neon-border transition-all duration-300",
        className
      )}
    >
      {Icon && (
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors duration-200">
          <Icon className="w-4 h-4 text-primary" />
        </div>
      )}
      <h3 className="text-sm font-semibold text-foreground mb-1.5">{title}</h3>
      <p className="text-muted-foreground text-xs leading-relaxed">{description}</p>
      {children}
    </div>
  );
};

export default Card;