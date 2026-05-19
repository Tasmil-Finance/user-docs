import { ImageZoom } from "fumadocs-ui/components/image-zoom";

export function StepScreenshot({
  src,
  alt,
  caption,
  step,
}: {
  src: string;
  alt: string;
  caption?: string;
  step?: number;
}) {
  return (
    <figure className="my-4">
      <ImageZoom src={src} alt={alt} width={1200} height={700} />
      {(caption || step) && (
        <figcaption className="mt-2 text-center text-sm text-neutral-500">
          {step && <span className="font-semibold">Step {step}: </span>}
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
