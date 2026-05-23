import { useEffect, useState, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { imageFallback } from "@/lib/media";

type RemoteImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string;
};

export function RemoteImage({
  src,
  fallbackSrc = imageFallback,
  className,
  alt = "",
  onError,
  ...props
}: RemoteImageProps) {
  const [resolvedSrc, setResolvedSrc] = useState(src ?? fallbackSrc);

  useEffect(() => {
    setResolvedSrc(src ?? fallbackSrc);
  }, [src, fallbackSrc]);

  return (
    <img
      {...props}
      src={resolvedSrc}
      alt={alt}
      referrerPolicy="no-referrer"
      className={cn(className)}
      onError={(event) => {
        onError?.(event);
        if (resolvedSrc !== fallbackSrc) {
          setResolvedSrc(fallbackSrc);
        }
      }}
    />
  );
}
