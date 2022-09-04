import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const Molecules = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      className="absolute z-0"
      init={particlesInit}
      options={{
        fpsLimit: 120,
        fullScreen: { enable: true },
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            resize: false,
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "top",
            enable: true,
            outModes: {
              default: "destroy",
            },
            random: false,
            speed: 0.1,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 900,
            },
            value: 100,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "star",
          },
          size: {
            value: { min: 0.5, max: 2 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
