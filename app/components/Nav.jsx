"use client";

import { useEffect, useState } from "react";
import { track } from "@vercel/analytics";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a href="#top" className="brand" aria-label="nextria Startseite">
          <span className="brand-dot" />
          <span>nextria</span>
        </a>
        <div className="nav-links">
          <a href="#vorgehen">Ihr Weg</a>
          <a href="#leistungen">Leistungen</a>
          <a href="#ueber">Über uns</a>
          <a href="#termin">Kontakt</a>
        </div>
        <a
          href="#termin"
          className="nav-cta"
          onClick={() => track("cta_click", { ort: "nav" })}
        >
          Termin buchen
          <svg className="nav-cta-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
