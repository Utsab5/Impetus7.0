import React from "react";
import Particles from "react-particles";

import { loadFirePreset } from "tsparticles-preset-fire";

export default function BackgroundParticles() {
  const customInit = async (engine) => {
    await loadFirePreset(engine);
  };

  const options = {
    preset: "fire",
  };

  return <Particles options={options} init={customInit} />;
}
