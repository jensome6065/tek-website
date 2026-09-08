import { DinoLoader } from "@/components/shared/dino-loader";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center pt-24">
      <DinoLoader label="Finding the herd…" />
    </div>
  );
}
