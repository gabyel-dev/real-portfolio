import { STEPS } from "../data";

export default function Process() {
  return (
    <section id="process" className="reveal">
      <div className="sec-label">04 — Process</div>
      <div className="sec-head">
        <h2>How we&apos;ll work together</h2>
        <p className="sec-note">
          A simple, transparent workflow — no surprises, no missed deadlines.
        </p>
      </div>
      <div className="steps">
        {STEPS.map((s, i) => (
          <div className="step" key={s.title}>
            <div className="n">{String(i + 1).padStart(2, "0")}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
