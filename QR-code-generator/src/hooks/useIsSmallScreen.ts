import { useState, useEffect } from "react";

export default function useIsSmallScreen(screenSize: string): boolean {
  const [isSmall, setIsSmall] = useState<boolean>(
    () => window.matchMedia(screenSize).matches
  );

  useEffect(() => {
    const mediaQueryMatcher = window.matchMedia(screenSize);

    const handleMediaQueryChange = () => setIsSmall(mediaQueryMatcher.matches);

    mediaQueryMatcher.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQueryMatcher.removeEventListener("change", handleMediaQueryChange);
    };
  }, [screenSize]);

  return isSmall;
}
