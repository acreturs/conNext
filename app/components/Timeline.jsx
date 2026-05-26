"use client";

import { useEffect, useRef, useState } from "react";

const TIMELINE_ITEMS = [
  {
    phase: "WOCHE 0",
    title: "Kennenlernen",
    desc: "30 Minuten Gespräch. Sie schildern Ihre Situation, wir hören zu — und sind ehrlich, ob wir wirklich helfen können.",
  },
  {
    phase: "WOCHE 1–2",
    title: "Standort verstehen",
    desc: "Wir schauen uns Prozesse, Daten und Ziele genauer an. Am Ende steht eine klare Einschätzung, wo Digitalisierung und KI Sinn ergeben.",
  },
  {
    phase: "WOCHE 3–6",
    title: "Pilot bauen",
    desc: "Wir entwickeln einen schlanken Prototyp an einem realen Anwendungsfall. Schnell, fokussiert, messbar.",
  },
  {
    phase: "MONAT 2–3",
    title: "Produktiv schalten",
    desc: "Funktioniert der Pilot, bringen wir die Lösung in den produktiven Einsatz — inklusive Schulung Ihres Teams.",
  },
  {
    phase: "DANACH",
    title: "Eigenständig",
    desc: "Sie sind nicht von uns abhängig, sondern handlungsfähig. Wir bleiben als Sparringspartner verfügbar — wenn Sie wollen.",
  },
];

export default function Timeline() {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeIdx, setActiveIdx] = useState(-1);

  useEffect(() => {
    const onScroll = () => {
      const el = trackRef.current;
      if (!el) return;
      const vh = window.innerHeight;
      const triggerLine = vh * 0.55;

      const items = Array.from(el.querySelectorAll(".tl-item"));
      if (!items.length) return;

      const firstTop = items[0].getBoundingClientRect().top;
      const lastTop = items[items.length - 1].getBoundingClientRect().top;
      const range = lastTop - firstTop;
      const passed = triggerLine - firstTop;
      const p = range > 0 ? Math.max(0, Math.min(1, passed / range)) : 0;
      setProgress(p);

      let active = -1;
      items.forEach((item, i) => {
        if (item.getBoundingClientRect().top < triggerLine) active = i;
      });
      setActiveIdx(active);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="vorgehen" className="timeline-section">
      <div className="wrap">
        <div className="eyebrow">Ihr Weg</div>
        <h2 className="section-title">
          Vom ersten Gespräch<br />
          bis zur eigenständigen Nutzung.
        </h2>
        <p className="section-lede">
          Ein realistischer Zeitstrahl — kleine, schnelle Schritte mit klaren Entscheidungen,
          statt monatelanger Konzeptphasen ohne Ergebnis.
        </p>

        <div className="timeline-track" ref={trackRef}>
          <div className="timeline-line" aria-hidden="true">
            <div className="timeline-progress" style={{ height: `${progress * 100}%` }} />
          </div>
          {TIMELINE_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`tl-item ${i <= activeIdx ? "is-active" : ""}`}
            >
              <div className="tl-marker" aria-hidden="true">
                <span className="tl-dot" />
              </div>
              <div className="tl-content">
                <span className="tl-phase">{item.phase}</span>
                <h3 className="tl-title">{item.title}</h3>
                <p className="tl-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
