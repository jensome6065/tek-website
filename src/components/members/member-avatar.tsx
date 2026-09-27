import Image from "next/image";
import { cn } from "@/lib/utils";

interface MemberAvatarProps {
  name: string;
  photo?: string;
  initials: string;
  accent: string;
  className?: string;
  initialsClassName?: string;
  imageClassName?: string;
  muted?: boolean;
  /** cover = fixed frame crop; natural = full photo at its own aspect ratio */
  fit?: "cover" | "natural";
}

export function MemberAvatar({
  name,
  photo,
  initials,
  accent,
  className,
  initialsClassName,
  imageClassName,
  muted = false,
  fit = "cover",
}: MemberAvatarProps) {
  const isNatural = fit === "natural" && Boolean(photo);

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        !isNatural && "bg-gradient-to-br",
        !isNatural && accent,
        muted && "saturate-50",
        !photo && fit === "natural" && "aspect-[4/5]",
        className
      )}
    >
      {photo ? (
        isNatural ? (
          <Image
            src={photo}
            alt={name}
            width={640}
            height={800}
            className={cn("h-auto w-full", imageClassName)}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
          />
        ) : (
          <Image
            src={photo}
            alt={name}
            fill
            className={cn("object-cover", imageClassName)}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        )
      ) : (
        <span
          className={cn(
            "font-semibold tracking-tight text-white/90",
            initialsClassName
          )}
        >
          {initials}
        </span>
      )}
    </div>
  );
}
