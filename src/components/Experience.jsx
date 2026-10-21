import { EXPERIENCE } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="reveal">
      <div className="sec-label">05 — Experience</div>
      <div className="sec-head">
        <h2>Where I&apos;ve been</h2>
      </div>
      <div className="exp">
        <div className="period">{EXPERIENCE.period}</div>
        <div>
          <h3>{EXPERIENCE.title}</h3>
          <div className="co">{EXPERIENCE.company}</div>
          <ul>
            {EXPERIENCE.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
