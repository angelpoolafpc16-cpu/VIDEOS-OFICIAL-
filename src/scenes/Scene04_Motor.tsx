import React from "react";
import { AbsoluteFill, Sequence, interpolate, useCurrentFrame } from "remotion";
import { colors } from "../theme";
import { BigStatement } from "../components/BigStatement";

export const Scene04_Motor: React.FC = () => {
  const frame = useCurrentFrame();
  const strike = interpolate(frame, [6, 26], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: colors.black, alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 36 }}>
        <div style={{ position: "relative" }}>
          <BigStatement lines={['No somos solo "agencia".']} color={colors.white} fontSize={60} delayPerLine={0} />
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              height: 5,
              background: colors.pink,
              width: `${strike * 100}%`,
              transform: "translate(-50%, -50%)",
              borderRadius: 3,
            }}
          />
        </div>
        <Sequence from={30} layout="none">
          <BigStatement lines={["Somos el motor de tu marca."]} color={colors.yellow} fontSize={68} delayPerLine={0} />
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};
