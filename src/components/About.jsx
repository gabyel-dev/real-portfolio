import { FACTS } from "../data";

export default function About() {
  return (
    <section id="about" className="reveal">
      <div className="sec-label">01 — About</div>
      <div className="sec-head">
        <h2>
          Editor first.
          <br />
          Storyteller always.
        </h2>
        <p className="sec-note">
          Detail-obsessed, deadline-driven, and fluent in the language of the
          timeline.
        </p>
      </div>
      <div className="about-grid">
        <div>
          <p>
            I&apos;m <strong>Edward John Real</strong>, a creative and detail-oriented{" "}
            <strong>video editor &amp; content creator</strong> working
            remotely. I specialize in editing videos, creating engaging social
            media content, organizing digital files, and following project
            guidelines to the letter.
          </p>
          <p>
            I&apos;m fluent in <strong>video editing software</strong>,{" "}
            <strong>visual storytelling</strong>, and{" "}
            <strong>content optimization</strong> for online platforms — and as
            a fast learner, I adapt quickly to new tools, styles, and workflows
            while keeping quality high and deadlines met.
          </p>
        </div>
        <div className="facts">
          {FACTS.map((f) => (
            <div className="fact" key={f.k}>
              <span className="k">{f.k}</span>
              <span className="v">{f.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
