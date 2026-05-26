const SERVICES = [
  {
    num: "01",
    title: "KI-Potenzialanalyse",
    desc: "Wir identifizieren, wo KI in Ihren Prozessen echten Mehrwert bringt — und wo Sie sich den Aufwand sparen können.",
    tags: ["Workshop", "Roadmap"],
  },
  {
    num: "02",
    title: "Maßgeschneiderte Lösungen",
    desc: "Vom Chatbot über Dokumenten-Automatisierung bis zur Datenanalyse — wir bauen, was zu Ihrem Problem passt.",
    tags: ["LLM", "Automation"],
  },
  {
    num: "03",
    title: "Tool-Auswahl & Integration",
    desc: "Welches Modell, welche Plattform, welcher Stack? Wir helfen Ihnen, im Wildwuchs der KI-Tools die richtige Wahl zu treffen.",
    tags: ["Architektur"],
  },
  {
    num: "04",
    title: "Daten & Compliance",
    desc: "DSGVO, On-Premise, EU-Modelle: Ihre Lösung bleibt rechtlich und technisch sauber — von Anfang an.",
    tags: ["DSGVO", "EU AI Act"],
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="services">
      <div className="wrap">
        <div className="eyebrow">Leistungen</div>
        <h2 className="section-title">
          Wir lösen konkrete Probleme,<br />
          nicht abstrakte Strategien.
        </h2>
        <p className="section-lede">
          Vier Schwerpunkte, in denen wir Unternehmen typischerweise unterstützen.
        </p>

        <div className="service-grid">
          {SERVICES.map((s) => (
            <div key={s.num} className="service-card">
              <div className="service-num">{s.num}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((t) => (
                  <span key={t} className="service-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
