"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_SRC = "/mrd-circuit-bg.mp4";
const POSTER_SRC = "/mrd-circuit-bg-poster.webp";

/**
 * Where the pattern's convergence point should land.
 *  - "centre": middle of the section.
 *  - "animation": behind the brand animation in the hero's right column, so the
 *    circuit lines read as running into it. Once the content container caps at
 *    1152px that centre sits at half the section plus 318px.
 */
type Align = "centre" | "animation";

type Mode = "pending" | "motion" | "static";

// Sized in px rather than `cover` so the pattern keeps a constant scale across
// viewports and there is room to slide it sideways.
const LAYER = "absolute top-1/2 w-[1920px] max-w-none -translate-x-1/2 -translate-y-1/2";

const ALIGNMENT: Record<Align, string> = {
  centre: "left-1/2",
  animation: "left-1/2 lg:left-[calc(50%+318px)]",
};

export default function PatternBackdrop({
  align = "centre",
  className = "",
}: {
  align?: Align;
  className?: string;
}) {
  const [mode, setMode] = useState<Mode>("pending");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Phones get the animation too. It is only fetched once its section is
    // scrolled to, and pauses again when that section leaves, so the cost is
    // one download and only for someone who reaches it.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setMode(reduced ? "static" : "motion");
  }, []);

  useEffect(() => {
    if (mode !== "motion") return;
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    let onScreen = false;
    let hasPlayed = false;
    const markPlayed = () => {
      hasPlayed = true;
    };
    video.addEventListener("playing", markPlayed);

    // Playback follows both conditions the browser cares about. Chrome refuses
    // to autoplay a video outside the viewport, so calling play() on mount
    // would fail for any backdrop below the fold and wrongly downgrade it to
    // the still. Chrome also pauses media when the tab is backgrounded, and
    // nothing resumes it on return unless we ask.
    const sync = () => {
      if (!onScreen || document.hidden) {
        video.pause();
        return;
      }
      video.play().catch(() => {
        // A refusal only means this device won't play it if it never started.
        if (!hasPlayed) setMode("static");
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        sync();
      },
      { threshold: 0 },
    );
    observer.observe(video);
    document.addEventListener("visibilitychange", sync);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      video.removeEventListener("playing", markPlayed);
    };
  }, [mode]);

  const placement = `${LAYER} ${ALIGNMENT[align]}`;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {mode === "motion" ? (
        <video
          ref={videoRef}
          className={placement}
          width={1920}
          height={1080}
          muted
          loop
          autoPlay
          playsInline
          preload="none"
          poster={POSTER_SRC}
          disablePictureInPicture
          onError={() => setMode("static")}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={POSTER_SRC}
          alt=""
          width={1920}
          height={1080}
          className={placement}
        />
      )}
    </div>
  );
}
