import { useEffect, useState } from "react";

// Full-screen video player overlay. Closes on backdrop click, the Close
// button, or the Escape key. If the file isn't in /public yet, it shows a
// friendly "add the file here" message instead of a broken player.
export default function VideoModal({ work, onClose }) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="video-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={work.title}
    >
      <div className="video-box" onClick={(e) => e.stopPropagation()}>
        {failed ? (
          <div className="video-error">
            <p>This video file isn&apos;t in the project yet.</p>
            <p>
              Add it at <code>public{work.src}</code> and it will play here.
            </p>
          </div>
        ) : (
          <video
            src={work.src}
            poster={work.poster}
            controls
            autoPlay
            playsInline
            onError={() => setFailed(true)}
          />
        )}
        <div className="video-bar">
          <div>
            <div className="t">{work.title}</div>
            <div className="c">
              {work.category} · {work.duration}
            </div>
          </div>
          <button type="button" className="video-close" onClick={onClose}>
            Close ✕
          </button>
        </div>
      </div>
    </div>
  );
}
