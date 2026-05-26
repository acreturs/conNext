export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="brand">
              <span className="brand-dot" />
              <span>nextria</span>
            </div>
            <p className="footer-tag">
              KI-Beratung aus München. Pragmatisch, unabhängig, auf den Punkt.
            </p>
          </div>
          <div className="footer-meta">
            <span>München, Deutschland</span>
            <a href="mailto:beratung@nextria.de">beratung@nextria.de</a>
            <a href="https://calendly.com/account-nextria/30min" target="_blank" rel="noopener noreferrer">
              calendly.com/account-nextria
            </a>
          </div>
        </div>
        <div className="footer-credit">
          <span>© {new Date().getFullYear()} nextria</span>
          <span>Impressum · Datenschutz</span>
        </div>
      </div>
    </footer>
  );
}
