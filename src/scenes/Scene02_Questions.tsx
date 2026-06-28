import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { colors } from "../theme";
import { BigStatement } from "../components/BigStatement";

const QUESTION_DUR = 36;

const QuestionSlide: React.FC<{ text: string; bg: string; fg: string }> = ({ text, bg, fg }) => (
  <AbsoluteFill style={{ background: bg, alignItems: "center", justifyContent: "center" }}>
    <BigStatement lines={[text]} color={fg} fontSize={72} delayPerLine={0} />
  </AbsoluteFill>
);

export const Scene02_Questions: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={QUESTION_DUR}>
        <QuestionSlide text="¿Tu marca es invisible?" bg={colors.black} fg={colors.white} />
      </Sequence>
      <Sequence from={QUESTION_DUR} durationInFrames={QUESTION_DUR}>
        <QuestionSlide text="¿Tus diseños parecen de otra década?" bg={colors.blue} fg={colors.yellow} />
      </Sequence>
      <Sequence from={QUESTION_DUR * 2} durationInFrames={QUESTION_DUR}>
        <QuestionSlide text="¿Tus redes sociales no conectan?" bg={colors.yellow} fg={colors.blue} />
      </Sequence>
    </AbsoluteFill>
  );
};
