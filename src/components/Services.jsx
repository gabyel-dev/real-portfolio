import { SERVICES } from "../data";

export default function Services() {
  return (
    <section id="services" className="reveal">
      <div className="sec-label">02 — Services</div>
      <div className="sec-head">
        <h2>What I can do for you</h2>

      </div>
      <div className="cards">
        {SERVICES.map((s, i) => (
          <div className="card" key={s.title}>
            <div className="num">/ {String(i + 1).padStart(2, "0")}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
