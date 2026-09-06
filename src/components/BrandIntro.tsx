"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_SRC = "/moss-ross-intro.mp4";
const POSTER_SRC = "/moss-ross-intro-poster.webp";

// The clip runs 8s and settles on the wordmark. Rest there long enough that it
// reads as a resting state rather than a loop seam, then fade out before
// replaying: the clip ends bright and starts black, so cutting straight back
// would flash.
const REST_MS = 7000;
const FADE_MS = 700; // keep in step with the duration-700 class below

// "pending" renders reserved space only. The animation opens on black, so showing
// the finished-logo poster first would flash the end state before it replays.
// The poster is therefore only used when we are not going to play.
type Mode = "pending" | "motion" | "static";

export default function BrandIntro({ className = "" }: { className?: string }) {
  const [mode, setMode] = useState<Mode>("pending");
  const [dimmed, setDimmed] = useState(false);
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

  // Replay loop. Idle whenever the hero is off screen or the tab is hidden, so
  // nothing animates for a viewer who cannot see it.
  useEffect(() => {
    if (mode !== "motion") return;
    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;
    let timer: number | undefined;
    let onScreen = true;

    const stop = () => {
      window.clearTimeout(timer);
      timer = undefined;
    };

    const restart = () => {
      if (cancelled || !onScreen || document.hidden) return;
      setDimmed(true);
      timer = window.setTimeout(() => {
        if (cancelled || !onScreen || document.hidden) {
          setDimmed(false);
          return;
        }
        video.currentTime = 0;
        video.play().catch(() => {});
        setDimmed(false);
      }, FADE_MS);
    };

    const queueRestart = () => {
      stop();
      timer = window.setTimeout(restart, REST_MS);
    };

    const idle = () => {
      stop();
      setDimmed(false);
    };

    video.addEventListener("ended", queueRestart);

    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        // Pick the cycle back up if it finished while scrolled away.
        if (onScreen) {
          if (video.ended) queueRestart();
        } else {
          idle();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(video);

    const onVisibilityChange = () => {
      if (document.hidden) idle();
      else if (onScreen && video.ended) queueRestart();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      cancelled = true;
      stop();
      video.removeEventListener("ended", queueRestart);
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
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
            className={`pointer-events-none h-full w-full object-cover transition-opacity duration-700 ${
              dimmed ? "opacity-0" : "opacity-100"
            }`}
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
