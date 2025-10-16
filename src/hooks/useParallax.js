import { useEffect } from "react";

export function useParallax(elementSelector, factor = 1) {
  useEffect(() => {
    const elements = document.querySelectorAll(elementSelector);
    if (!elements.length) return;

    const onScroll = () => {
      const y = window.scrollY;
      elements.forEach(el => {
        el.style.transform = `translateY(${y * factor}px) translateX(-50%)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [elementSelector, factor]);
}