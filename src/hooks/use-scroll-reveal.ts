import { useEffect } from "react";

/**
 * Global scroll-reveal observer.
 *
 * - Finds every `.animate-fade-up` element, pauses its CSS animation, and
 *   resumes it when it scrolls into view (IntersectionObserver).
 * - Watches the DOM for *added* nodes (route changes, modals, sliders,
 *   lazy-loaded cards) via MutationObserver and registers them too.
 * - Debounces work and only inspects added subtrees (not the whole document)
 *   to stay cheap on large pages.
 * - Respects `prefers-reduced-motion`.
 *
 * Mount once at the App root.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const SELECTOR = ".animate-fade-up";
    const PREP = "reveal-pending";
    const SHOW = "reveal-in";

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.remove(PREP);
          el.classList.add(SHOW);
          io.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    const register = (el: Element) => {
      if (el.classList.contains(SHOW) || el.classList.contains(PREP)) return;
      el.classList.add(PREP);
      io.observe(el);
    };

    // Initial sweep
    document.querySelectorAll(SELECTOR).forEach(register);

    // Track only newly added nodes — cheap, scoped to subtrees that actually changed.
    let pending: Element[] = [];
    let raf = 0;
    const flush = () => {
      raf = 0;
      const batch = pending;
      pending = [];
      for (const root of batch) {
        if (!root.isConnected) continue;
        if (root.matches?.(SELECTOR)) register(root);
        root.querySelectorAll?.(SELECTOR).forEach(register);
      }
    };

    const schedule = (node: Element) => {
      pending.push(node);
      if (!raf) raf = window.requestAnimationFrame(flush);
    };

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((n) => {
          if (n.nodeType === 1) schedule(n as Element);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
};
