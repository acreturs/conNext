"use client";

import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Page() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll("section").forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="bg-grid" />
      <Nav />
      <main>
        <Hero />
        <Timeline />
        <Services />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
