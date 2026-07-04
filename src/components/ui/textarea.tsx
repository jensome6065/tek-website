import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-32 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-dark-neutral shadow-soft transition-colors placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medium-blue focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 resize-y",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
