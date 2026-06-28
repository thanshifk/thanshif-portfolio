import Particles from "@tsparticles/react";

export default function ParticlesBackground() {
  return (
    <Particles
      id="particles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: -20,
        },

        background: {
          color: {
            value: "transparent",
          },
        },

        detectRetina: true,

        fpsLimit: 60,

        particles: {
          number: {
            value: 35,
            density: {
              enable: true,
              width: 1920,
              height: 1080,
            },
          },

          color: {
            value: [
              "#3b82f6",
              "#22d3ee",
              "#8b5cf6",
            ],
          },

          shape: {
            type: "circle",
          },

          opacity: {
            value: {
              min: 0.15,
              max: 0.55,
            },
          },

          size: {
            value: {
              min: 1,
              max: 4,
            },
          },

          move: {
            enable: true,
            speed: 0.45,
            random: false,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },

          links: {
            enable: true,
            distance: 170,
            opacity: 0.12,
            width: 1,
            color: "#38bdf8",
          },
        },

        interactivity: {
          detectsOn: "window",

          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },

            onClick: {
              enable: false,
            },

            resize: {
              enable: true,
            },
          },

          modes: {
            grab: {
              distance: 180,

              links: {
                opacity: 0.4,
              },
            },
          },
        },
      }}
    />
  );
}