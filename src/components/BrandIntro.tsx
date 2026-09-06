"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";

const VIDEO_SRC = "/moss-ross-intro.mp4";
const POSTER_SRC = "/moss-ross-intro-poster.webp";

// "pending" renders reserved space only. The animation opens on black, so showing
// the finished-logo poster first would flash the end state before it plays.
// The poster is therefore only used when we are not going to autoplay.
type Mode = "pending" | "motion" | "static";

export default function BrandIntro({ className = "" }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mode, setMode] = useState<Mode>("pending");
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setMode(reduced ? "static" : "motion");
  }, []);

  // Starts the clip whenever the mode becomes "motion": on load, and again if a
  // viewer opts in from the static poster. Autoplay can still be refused (iOS
  // Low Power Mode, strict settings), which falls back to that poster.
  useEffect(() => {
    if (mode !== "motion") return;
    const video = videoRef.current;
    if (!video) return;
    // Some browsers only honour muted as a property, and it has to be set
    // before play() for autoplay to be allowed at all.
    video.muted = true;
    video.play().catch(() => setMode("static"));
  }, [mode]);

  const play = () => {
    if (mode !== "motion") {
      // Remounts the video; the effect above starts it.
      setMode("motion");
      return;
    }
    const video = videoRef.current;
    if (!video) return;
    if (video.ended) video.currentTime = 0;
    video.muted = true;
    void video.play().catch(() => {});
  };

  const toggle = () => {
    const video = videoRef.current;
    if (mode === "motion" && video && playing) {
      video.pause();
      return;
    }
    play();
  };

  const label = playing
    ? "Pause the brand animation"
    : ended
      ? "Replay the brand animation"
      : "Play the brand animation";
  const Icon = playing ? Pause : ended ? RotateCcw : Play;

  return (
    // The control sits outside the masked subtree so the feather does not fade it.
    <div className={`relative w-full ${className}`}>
      <div className="w-full aspect-video mask-feather-y">
        <div className="h-full w-full mask-feather-x">
          {mode === "motion" ? (
            <video
              ref={videoRef}
              aria-hidden="true"
              className={`pointer-events-none h-full w-full object-cover transition-opacity duration-700 ${
                started ? "opacity-100" : "opacity-0"
              }`}
              width={1280}
              height={720}
              muted
              playsInline
              // "none" keeps the file off the wire where autoplay is refused; the
              // explicit play() above starts the fetch when it is allowed.
              preload="none"
              disablePictureInPicture
              onPlaying={() => {
                setStarted(true);
                setPlaying(true);
                setEnded(false);
              }}
              onPause={() => setPlaying(false)}
              onEnded={() => {
                // No loop and no rewind: the last frame is the finished
                // wordmark, and it stays on screen.
                setPlaying(false);
                setEnded(true);
              }}
              onError={() => setMode("static")}
            >
              <source src={VIDEO_SRC} type="video/mp4" />
            </video>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={POSTER_SRC}
              alt=""
              aria-hidden="true"
              width={1280}
              height={720}
              className={`h-full w-full object-cover transition-opacity duration-700 ${
                mode === "static" ? "opacity-100" : "opacity-0"
              }`}
            />
          )}

          <noscript
            dangerouslySetInnerHTML={{
              __html: `<img src="${POSTER_SRC}" alt="" width="1280" height="720" style="width:100%;height:100%;object-fit:cover" />`,
            }}
          />
        </div>
      </div>

      {mode !== "pending" && (
        <button
          type="button"
          onClick={toggle}
          aria-label={label}
          title={label}
          className="absolute bottom-1 right-1 inline-flex h-9 w-9 items-center justify-center border border-ivory/20 bg-charcoal/70 text-sand opacity-60 backdrop-blur-sm transition hover:border-ivory/40 hover:text-ivory hover:opacity-100 focus-visible:opacity-100"
        >
          <Icon size={15} />
        </button>
      )}
    </div>
  );
}
