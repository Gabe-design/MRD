"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_SRC = "/moss-ross-intro.mp4";
const POSTER_SRC = "/moss-ross-intro-poster.webp";

// "pending" renders reserved space only. The animation opens on black, so showing
// the finished-logo poster first would flash the end state before it replays.
// The poster is therefore only used when we are not going to play.
type Mode = "pending" | "motion" | "static";

export default function BrandIntro({ className = "" }: { className?: string }) {
  const [mode, setMode] = useState<Mode>("pending");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setMode(reduced ? "static" : "motion");
  }, []);

  useEffect(() => {
    if (mode !== "motion") return;
    const video = videoRef.current;
    if (!video) return;

    // Some browsers only honour muted as a property, and autoplay needs it set
    // before play() is called.
    video.muted = true;
    // Autoplay can still be refused (iOS Low Power Mode, strict settings).
    video.play().catch(() => setMode("static"));
  }, [mode]);

  return (
    <div
      className={`w-full aspect-video mask-feather-y ${className}`}
      aria-hidden="true"
    >
      <div className="h-full w-full mask-feather-x">
        {mode === "motion" && (
          <video
            ref={videoRef}
            className="pointer-events-none h-full w-full object-cover"
            width={1280}
            height={720}
            muted
            autoPlay
            playsInline
            // "none" keeps the file off the wire where autoplay is refused; the
            // explicit play() below starts the fetch when it is allowed.
            preload="none"
            disablePictureInPicture
            onError={() => setMode("static")}
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
        )}

        {mode === "static" && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={POSTER_SRC}
            alt=""
            width={1280}
            height={720}
            className="h-full w-full object-cover"
          />
        )}

        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img src="${POSTER_SRC}" alt="" width="1280" height="720" style="width:100%;height:100%;object-fit:cover" />`,
          }}
        />
      </div>
    </div>
  );
}
