export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap">
        <div className="eyebrow">
          <span>nextria · IT-Beratung aus München</span>
        </div>
        <h1 className="hero-headline">
          Ihr Weg in die<br />
          <em>Digitalisierung.</em>
        </h1>
        <p className="hero-sub">
          Wir sind eine kleine, unabhängige IT-Beratung aus München.
          Wir helfen Ihrem Unternehmen, KI und Digitalisierung pragmatisch
          und mit messbarer Wirkung umzusetzen.
        </p>
        <div className="hero-actions">
          <a href="#termin" className="btn btn-primary">
            30 Min Erstgespräch
            <svg className="btn-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#vorgehen" className="btn btn-secondary">
            Unser Weg
          </a>
        </div>

        <div className="scroll-hint" aria-hidden="true">
          <span className="mono">scroll</span>
          <span className="scroll-line"><span className="scroll-line-fill" /></span>
        </div>
      </div>
    </section>
  );
}
