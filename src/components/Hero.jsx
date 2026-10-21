import { useState } from "react";
import { PROFILE, STATS } from "../data";

export default function Hero() {
  const [photoOk, setPhotoOk] = useState(true);

  return (
    <div className="wrap" id="top">
      <div className="hero">
        <div>
          <span className="status">
            <span className="rec" aria-hidden="true"></span>
            Available for remote work
          </span>
          <h1 className="hero-text">
            I turn raw footage into <em>stories worth watching.</em>
          </h1>
          <p className="sub">
            Video editor &amp; content creator. Engaging edits,
            scroll-stopping social content, and polished digital media,
            delivered on time and on brief.
          </p>
          <div className="cta-row">
            <a className="btn" href="#work">
              View My Work
            </a>
            <a className="btn ghost" href={PROFILE.resumeUrl} download>
              Download Resume
            </a>
          </div>
          <div className="stats">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <div className="n">
                  {s.value}
                  <span>{s.suffix}</span>
                </div>
                <div className="l">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-photo">
          <div className="frame">
            {photoOk ? (
              <img
                src={PROFILE.photoUrl}
                alt="Portrait of Edward"
                onError={() => setPhotoOk(false)}
              />
            ) : (
              <span>E</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
