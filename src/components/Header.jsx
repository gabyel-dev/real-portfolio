import { PROFILE } from "../data";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header>
      <div className="wrap">
        <a className="logo" href="#top">
          EDWARD REAL<span>.</span>
        </a>
        <nav>
          {LINKS.map((l) => (
            <a key={l.href} className="link" href={l.href}>
              {l.label}
            </a>
          ))}
          <a className="btn" href={PROFILE.resumeUrl} download>
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
