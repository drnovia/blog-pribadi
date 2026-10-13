"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function AboutMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Cards have a Tailwind transform transition that would fight the tween.
        gsap.set("[data-anim='card']", { transition: "none" });

        gsap
          .timeline({ defaults: { duration: 0.7, ease: "power3.out" } })
          .fromTo(
            "[data-anim='hero']",
            { autoAlpha: 0, y: 24 },
            { autoAlpha: 1, y: 0, stagger: 0.08, clearProps: "transform" }
          )
          .fromTo(
            "[data-anim='panel']",
            { autoAlpha: 0, x: 32 },
            { autoAlpha: 1, x: 0, clearProps: "transform" },
            "<0.2"
          )
          .fromTo(
            "[data-anim='log']",
            { autoAlpha: 0, x: -8 },
            { autoAlpha: 1, x: 0, duration: 0.4, stagger: 0.25, clearProps: "transform" },
            "-=0.3"
          )
          .fromTo(
            "[data-anim='card']",
            { autoAlpha: 0, y: 24 },
            { autoAlpha: 1, y: 0, stagger: 0.1, clearProps: "transform,transition" },
            "<"
          );
      });

      return () => mm.revert();
    },
    { scope }
  );

  return <div ref={scope}>{children}</div>;
}
