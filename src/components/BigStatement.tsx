import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { fontStack } from "../theme";

export const BigStatement: React.FC<{
  lines: string[];
  color: string;
  fontSize?: number;
  align?: "center" | "left";
  weight?: number;
  letterSpacing?: number;
  delayPerLine?: number;
}> = ({ lines, color, fontSize = 96, align = "center", weight = 800, letterSpacing = -2, delayPerLine = 6 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: align === "center" ? "center" : "flex-start",
        textAlign: align,
        gap: fontSize * 0.12,
      }}
    >
      {lines.map((line, i) => {
        const start = i * delayPerLine;
        const p = spring({
          frame: frame - start,
          fps,
          config: { damping: 200, mass: 0.5, stiffness: 120 },
        });
        const translateY = interpolate(p, [0, 1], [28, 0]);
        const opacity = interpolate(p, [0, 1], [0, 1]);
        return (
          <div
            key={i}
            style={{
              fontFamily: fontStack,
              fontWeight: weight,
              fontSize,
              color,
              letterSpacing,
              lineHeight: 1.08,
              opacity,
              transform: `translateY(${translateY}px)`,
            }}
          >
            {line}
          </div>
        );
      })}
    </div>
  );
};
