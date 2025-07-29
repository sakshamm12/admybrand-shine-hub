import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div 
      className={cn(
        "backdrop-blur-glass bg-white/10 border border-white/20 rounded-xl shadow-glass",
        "dark:bg-black/20 dark:border-white/10",
        className
      )}
    >
      {children}
    </div>
  );
}