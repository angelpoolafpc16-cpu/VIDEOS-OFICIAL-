import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { colors } from "../theme";
import { BigStatement } from "../components/BigStatement";

export const Scene07_Split: React.FC = () => {
  const frame = useCurrentFrame();
  const wipe = interpolate(frame, [0, 20], [0, 50], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ flexDirection: "row" }}>
      <AbsoluteFill
        style={{
          background: colors.black,
          width: `${wipe}%`,
          alignItems: "center",
          justifyContent: "center",
          padding: 60,
        }}
      >
        <BigStatement
          lines={["Si buscas destacar,", "estás en el lugar correcto."]}
          color={colors.white}
          fontSize={46}
          align="center"
          delayPerLine={6}
        />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          background: colors.yellow,
          left: `${wipe}%`,
          width: `${100 - wipe}%`,
          alignItems: "center",
          justifyContent: "center",
          padding: 60,
        }}
      >
        <BigStatement
          lines={["Si buscas lo de siempre,", "sigue haciendo scroll."]}
          color={colors.blue}
          fontSize={46}
          align="center"
          delayPerLine={6}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
