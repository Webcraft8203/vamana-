import { useEffect } from "react";

/**
 * Global scroll-reveal observer.
 * Finds every element with `.animate-fade-up`, defers its animation until it
 * enters the viewport, then plays it once. Respects prefers-reduced-motion.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const SELECTOR = ".animate-fade-up";
    const PREP_CLASS = "reveal-pending";
    const SHOW_CLASS = "reveal-in";

    const prep = (el: Element) => {
      if (el.classList.contains(PREP_CLASS) || el.classList.contains(SHOW_CLASS)) return;
      el.classList.add(PREP_CLASS);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.remove(PREP_CLASS);
            entry.target.classList.add(SHOW_CLASS);
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    const scan = () => {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        prep(el);
        observer.observe(el);
      });
    };

    scan();

    // Re-scan as React mounts/unmounts new sections (route changes, modals, sliders).
    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);
};
