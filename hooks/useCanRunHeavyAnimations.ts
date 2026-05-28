"use client";

import { useEffect, useState } from "react";

export function useCanRunHeavyAnimations() {
  const [canRun, setCanRun] = useState(false);

  useEffect(() => {
    const mediaQueries = [
      window.matchMedia("(prefers-reduced-motion: reduce)"),
      window.matchMedia("(pointer: fine)"),
      window.matchMedia("(hover: hover)"),
      window.matchMedia("(min-width: 768px)"),
    ];

    const evaluate = () => {
      const [prefersReducedMotion, hasFinePointer, hasHover, isTabletOrLarger] =
        mediaQueries.map((query) => query.matches);

      const hardwareConcurrency = navigator.hardwareConcurrency ?? 8;
      const maybeNavigatorWithMemory = navigator as Navigator & {
        deviceMemory?: number;
      };
      const deviceMemory = maybeNavigatorWithMemory.deviceMemory ?? 8;

      const likelyUnderpoweredDevice =
        isTabletOrLarger &&
        (hardwareConcurrency <= 4 || deviceMemory <= 4) &&
        !hasFinePointer;

      setCanRun(
        !prefersReducedMotion &&
          hasFinePointer &&
          hasHover &&
          !likelyUnderpoweredDevice,
      );
    };

    evaluate();

    mediaQueries.forEach((query) => query.addEventListener("change", evaluate));

    return () => {
      mediaQueries.forEach((query) =>
        query.removeEventListener("change", evaluate),
      );
    };
  }, []);

  return canRun;
}
