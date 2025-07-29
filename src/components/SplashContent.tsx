"use client";
import SplashCursor from "./SplashCursor";
import { useSplash } from "@/providers/splash-provider";

export default function SplashContent() {
  const { isSplashEnabled } = useSplash();

  return isSplashEnabled ? (
    <SplashCursor
      SPLAT_FORCE={7000}
      SPLAT_RADIUS={0.3}
      COLOR_UPDATE_SPEED={7}
      BACK_COLOR={{ r: 0, g: 0, b: 0 }}
      TRANSPARENT={true}
    />
  ) : null;
}
