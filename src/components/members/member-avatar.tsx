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
}: MemberAvatarProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br",
        accent,
        muted && "saturate-50",
        className
      )}
    >
      {photo ? (
        <Image
          src={photo}
          alt={name}
          fill
          className={cn("object-cover", imageClassName)}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
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
