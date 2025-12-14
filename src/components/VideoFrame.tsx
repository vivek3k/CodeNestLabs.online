import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

interface VideoFrameProps {
  videoId: string;
  title: string;
  className?: string;
}

const VideoFrame = ({ videoId, title, className }: VideoFrameProps) => {
  const isPlaceholder = videoId.startsWith("PLACEHOLDER");

  if (isPlaceholder) {
    return (
      <div
        className={cn(
          "relative w-full aspect-video rounded-2xl overflow-hidden bg-muted/50 border border-border/60 flex items-center justify-center group cursor-pointer hover:border-primary/30 transition-all duration-300 shadow-card",
          className
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-primary/[0.08]" />
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="relative z-10 text-center">
          <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/15 group-hover:scale-105 transition-all duration-300">
            <Play className="w-6 h-6 text-primary ml-0.5" />
          </div>
          <p className="text-sm font-medium text-foreground tracking-tight">{title}</p>
          <p className="text-xs text-muted-foreground mt-1.5">Video coming soon</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative w-full aspect-video rounded-2xl overflow-hidden shadow-card border border-border/40",
        className
      )}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default VideoFrame;
