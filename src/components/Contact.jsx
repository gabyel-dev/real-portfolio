import { PROFILE } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="reveal">
      <div className="sec-label">06 — Contact</div>
      <h2>
        Let&apos;s create something <em>worth watching.</em>
      </h2>
      <p className="lede">
        Have footage that needs a story, or a feed that needs life? My inbox is
        open — I reply fast and edit faster.
      </p>
      <div className="contact-cards">
        <a className="c-card" href={`mailto:${PROFILE.email}`}>
          <div className="k">Email</div>
          <div className="v">{PROFILE.email}</div>
        </a>
        <a className="c-card" href={PROFILE.phoneHref}>
          <div className="k">Phone</div>
          <div className="v">{PROFILE.phoneDisplay}</div>
        </a>
      </div>
      <div className="cta-row">
        <a
          className="btn"
          href={`mailto:${PROFILE.email}?subject=Project%20inquiry`}
        >
          Start a Project
        </a>
        <a className="btn ghost" href={PROFILE.resumeUrl} download>
          Download Resume
        </a>
      </div>
    </section>
  );
}
