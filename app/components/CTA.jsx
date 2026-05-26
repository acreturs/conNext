"use client";

import { useEffect, useState } from "react";
import { track } from "@vercel/analytics";

export default function CTA() {
  const [embedFailed, setEmbedFailed] = useState(false);

  // Calendly meldet Funnel-Schritte per postMessage an das Parent-Fenster.
  // Damit tracken wir, wer den Kalender wirklich nutzt — bis zur Buchung.
  useEffect(() => {
    const onMessage = (e) => {
      if (
        e.origin !== "https://calendly.com" ||
        typeof e.data?.event !== "string" ||
        !e.data.event.startsWith("calendly.")
      ) {
        return;
      }
      switch (e.data.event) {
        case "calendly.event_type_viewed":
          track("calendly_geoeffnet");
          break;
        case "calendly.date_and_time_selected":
          track("calendly_termin_gewaehlt");
          break;
        case "calendly.event_scheduled":
          // Die eigentliche Conversion: Termin verbindlich gebucht.
          track("termin_gebucht");
          break;
        default:
          break;
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <section id="termin" className="cta">
      <div className="wrap">
        <div className="cta-card">
          <div className="cta-header">
            <div className="eyebrow">Termin · 30 Minuten · kostenlos</div>
            <h2 className="cta-title">
              Lassen Sie uns kurz reden — und sehen, ob wir helfen können.
            </h2>
            <p className="cta-sub">
              Buchen Sie direkt unten einen Slot. Bringen Sie Ihre Fragestellung mit,
              wir antworten ehrlich — auch wenn die Antwort manchmal &quot;noch nicht&quot; lautet.
            </p>
            <div className="cta-meta">
              <span className="cta-meta-item">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="2" y="3" width="10" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M2 5.5H12" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M5 2V4M9 2V4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                30 MIN
              </span>
              <span className="cta-meta-item">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M7 4V7L9 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                ONLINE
              </span>
              <span className="cta-meta-item">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 5L7 8L12 5V11C12 11.5 11.5 12 11 12H3C2.5 12 2 11.5 2 11V5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                  <path d="M2 5L7 2L12 5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
                BESTÄTIGUNG PER MAIL
              </span>
            </div>
          </div>

          {!embedFailed ? (
            <div className="calendly-wrap">
              <iframe
                src="https://calendly.com/account-nextria/30min?embed_domain=nextria.de&embed_type=Inline&background_color=0d1a2e&text_color=e8eef7&primary_color=e63946&hide_event_type_details=1&hide_gdpr_banner=1"
                className="calendly-frame"
                title="Termin buchen bei nextria"
                loading="lazy"
                onError={() => setEmbedFailed(true)}
              />
            </div>
          ) : (
            <div className="calendly-fallback">
              <p style={{ color: "var(--text-dim)" }}>
                Falls der Kalender nicht lädt:
              </p>
              <a
                href="https://calendly.com/account-nextria/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                onClick={() => track("calendly_fallback_klick")}
              >
                Termin auf Calendly buchen
                <svg className="btn-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
