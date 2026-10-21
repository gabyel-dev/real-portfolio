import { useMemo, useState } from "react";
import { WORKS } from "../data";
import VideoModal from "./VideoModal";

const INITIAL_COUNT = 4;

function WorkTile({ work, onOpen }) {
  // Auto-thumbnail: the "#t=2" fragment makes the browser paint the frame
  // at 2 seconds natively — no JS seeking, so nothing fights React when
  // the grid re-renders on category changes.
  return (
    <button type="button" className="tile" onClick={() => onOpen(work)}>
      <video
        className="thumb"
        src={`${work.src}#t=2`}
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <span className="cat">{work.category}</span>
      <span className="play" aria-hidden="true"></span>
      <span className="meta">
        <span className="t">{work.title}</span>
        <span className="d">{work.duration}</span>
      </span>
    </button>
  );
}

export default function Work() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(WORKS.map((w) => w.category)))],
    []
  );
  const [category, setCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState(null);

  const inCategory =
    category === "All" ? WORKS : WORKS.filter((w) => w.category === category);
  // Dedupe by file: the same video never renders twice, even if it's
  // listed more than once in data.js.
  const filtered = inCategory.filter(
    (w, i, arr) => arr.findIndex((x) => x.src === w.src) === i
  );
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > visible.length;

  const pickCategory = (c) => {
    setCategory(c);
    setShowAll(false);
  };

  return (
    <section id="work" className="reveal">
      <div className="wrap">
        <div className="sec-label">03 — Projects</div>
        <div className="sec-head">
          <h2>Works</h2>

        </div>

        <div className="filters" role="tablist" aria-label="Filter videos by category">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={category === c}
              className={`filter-btn${category === c ? " active" : ""}`}
              onClick={() => pickCategory(c)}
            >
              {c === "All" ? "View All" : c}
            </button>
          ))}
        </div>

        <div className="work-grid">
          {visible.map((w) => (
            <WorkTile key={`${w.src}-${w.title}`} work={w} onOpen={setActive} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="work-note">No videos in this category yet.</p>
        )}

        {hasMore && (
          <div className="view-all-row">
            <button
              type="button"
              className="btn ghost"
              onClick={() => setShowAll(true)}
            >
              View All Videos ({filtered.length})
            </button>
          </div>
        )}
        {showAll && filtered.length > INITIAL_COUNT && (
          <div className="view-all-row">
            <button
              type="button"
              className="btn ghost"
              onClick={() => setShowAll(false)}
            >
              Show Less
            </button>
          </div>
        )}


      </div>

      {active && <VideoModal work={active} onClose={() => setActive(null)} />}
    </section>
  );
}
