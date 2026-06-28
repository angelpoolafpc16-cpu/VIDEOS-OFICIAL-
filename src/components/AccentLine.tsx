import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

export const AccentLine: React.FC<{
  color: string;
  width?: number;
  delay?: number;
  align?: "center" | "left";
}> = ({ color, width = 120, delay = 0, align = "center" }) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame - delay, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        height: 4,
        width: width * progress,
        background: color,
        borderRadius: 2,
        alignSelf: align === "center" ? "center" : "flex-start",
      }}
    />
  );
};
