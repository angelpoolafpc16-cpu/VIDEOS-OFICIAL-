import React from "react";
import { Composition } from "remotion";
import { MainVideo, TOTAL_DURATION } from "./MainVideo";
import { FPS, W, H } from "./theme";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="MainVideo"
        component={MainVideo}
        durationInFrames={TOTAL_DURATION}
        fps={FPS}
        width={W}
        height={H}
      />
    </>
  );
};
