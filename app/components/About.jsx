export default function About() {
  return (
    <section id="ueber" className="about">
      <div className="wrap">
        <div className="about-grid">
          <div>
            <div className="eyebrow">Über nextria</div>
            <h2 className="section-title">
              Frische Köpfe.<br />
              Echte Erfahrung.
            </h2>
            <p className="section-lede">
              nextria wurde von frischen Master-Absolventen einer der weltweit
              führenden Universitäten gegründet. Wir bringen aktuelles Wissen
              aus Forschung und Praxis zusammen — und Erfahrung aus verschiedenen
              Industrien. Wir sind klein, neugierig und immer offen für neue Fragen.
            </p>
          </div>

          <div className="about-points">
            <div className="about-point">
              <div className="about-point-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1.5L8.5 5L12 5.5L9.5 8L10 11.5L7 9.75L4 11.5L4.5 8L2 5.5L5.5 5L7 1.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h4 className="about-point-title">Top-Universität</h4>
                <p className="about-point-desc">
                  Master-Ausbildung an einer der weltweit führenden Hochschulen.
                  Aktuellster Stand der Forschung.
                </p>
              </div>
            </div>
            <div className="about-point">
              <div className="about-point-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="7" cy="7" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <div>
                <h4 className="about-point-title">Industrieübergreifend</h4>
                <p className="about-point-desc">
                  Praxis-Erfahrung aus verschiedenen Branchen —
                  wir denken über den Tellerrand hinaus.
                </p>
              </div>
            </div>
            <div className="about-point">
              <div className="about-point-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7C2.5 4.5 4.5 2.5 7 2.5C9.5 2.5 11.5 4.5 11.5 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M9.5 5L11.5 7L9.5 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11.5 11.5L7 11.5C4.5 11.5 2.5 9.5 2.5 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h4 className="about-point-title">Immer offen</h4>
                <p className="about-point-desc">
                  Wir hören zu, bevor wir Lösungen vorschlagen —
                  und sagen ehrlich, wann KI <em>nicht</em> die Antwort ist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
