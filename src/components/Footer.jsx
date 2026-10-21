import { PROFILE } from "../data";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <p>© 2026 Edward. Cut with care, delivered on time.</p>
        <a className="btn ghost" href={PROFILE.resumeUrl} download>
          Resume
        </a>
      </div>
    </footer>
  );
}
