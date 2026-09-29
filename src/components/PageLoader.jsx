
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import rentalLogo from "../assets/rental-logo.png";

const particles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  top: `${(i * 53) % 100}%`,
  size: 2 + (i % 4),
  duration: 3 + (i % 5),
  delay: (i % 7) * 0.25,
}));

const roadLines = Array.from({ length: 18 }, (_, i) => i);

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const duration = 2600;
    const intervalTime = 25;
    const increment = (intervalTime / duration) * 100;

    const interval = setInterval(() => {
      setProgress((previous) =>
        Math.min(previous + increment, 100)
      );
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  const motionTransition = (duration, delay = 0) => ({
    duration: reduceMotion ? 0 : duration,
    delay: reduceMotion ? 0 : delay,
  });

  return (
    <div className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-hidden bg-[#050914] text-white">

      {/* =====================================================
          CINEMATIC BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#17243c_0%,#080d1b_45%,#03050b_100%)]" />

      {/* Orange ambient glow */}

      <motion.div
        className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[120px]"
        animate={
          reduceMotion
            ? {}
            : {
              scale: [1, 1.25, 1],
              opacity: [0.3, 0.7, 0.3],
            }
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blue ambient glow */}

      <motion.div
        className="absolute -bottom-48 -left-40 h-[550px] w-[550px] rounded-full bg-blue-500/10 blur-[130px]"
        animate={
          reduceMotion
            ? {}
            : {
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.65, 0.3],
            }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          ANIMATED PARTICLES
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full bg-orange-300"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              boxShadow: "0 0 12px rgba(249,115,22,0.7)",
            }}
            animate={
              reduceMotion
                ? {}
                : {
                  y: [-25, 25, -25],
                  x: [-8, 8, -8],
                  opacity: [0.1, 0.8, 0.1],
                  scale: [0.7, 1.4, 0.7],
                }
            }
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* =====================================================
          BACKGROUND LIGHT RAYS
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[0, 1, 2].map((item) => (
          <motion.div
            key={item}
            className="absolute left-1/2 top-0 h-full w-[2px] origin-top bg-gradient-to-b from-orange-400/20 via-orange-400/5 to-transparent"
            style={{
              rotate: `${-25 + item * 25}deg`,
            }}
            animate={
              reduceMotion
                ? {}
                : {
                  opacity: [0.1, 0.6, 0.1],
                  scaleY: [0.85, 1.1, 0.85],
                }
            }
            transition={{
              duration: 3 + item,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item * 0.4,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 w-full max-w-2xl px-5 py-10 sm:px-8">

        {/* =====================================================
            BRAND LOGO
        ===================================================== */}

        <div className="text-center">

          <motion.div
            className="relative mx-auto mb-7 flex h-36 w-36 items-center justify-center sm:h-44 sm:w-44"
            initial={
              reduceMotion
                ? false
                : {
                  opacity: 0,
                  scale: 0.6,
                  rotate: -15,
                }
            }
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={motionTransition(0.9)}
          >

            {/* Outer rotating ring */}

            <motion.div
              className="absolute inset-0 rounded-full border border-orange-400/20"
              animate={
                reduceMotion
                  ? {}
                  : {
                    rotate: 360,
                  }
              }
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
            >

              <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-orange-400 shadow-[0_0_20px_5px_rgba(249,115,22,0.6)]" />

              <span className="absolute bottom-5 left-3 h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_3px_rgba(96,165,250,0.5)]" />
            </motion.div>

            {/* Second rotating ring */}

            <motion.div
              className="absolute inset-3 rounded-full border border-dashed border-orange-300/20"
              animate={
                reduceMotion
                  ? {}
                  : {
                    rotate: -360,
                  }
              }
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Pulsing glow */}

            <motion.div
              className="absolute inset-7 rounded-full bg-orange-500/10 blur-2xl"
              animate={
                reduceMotion
                  ? {}
                  : {
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.3, 0.8, 0.3],
                  }
              }
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Logo container */}

            <motion.div
              className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] shadow-[0_0_60px_rgba(249,115,22,0.12)] backdrop-blur-xl sm:h-36 sm:w-36"
              animate={
                reduceMotion
                  ? {}
                  : {
                    y: [0, -6, 0],
                  }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <motion.img
                src={rentalLogo}
                alt="Car and Bike Rentals"
                className="h-20 w-24 object-contain sm:h-28 sm:w-32"
                animate={
                  reduceMotion
                    ? {}
                    : {
                      scale: [1, 1.04, 1],
                    }
                }
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

            </motion.div>

          </motion.div>

          {/* Brand title */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                  opacity: 0,
                  y: 25,
                }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={motionTransition(0.8, 0.2)}
          >

            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.45em] text-orange-400 sm:text-xs">
              Your Journey Starts Here
            </p>

            <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              Car & Bike
              <span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                Rentals
              </span>
            </h1>

            {/* Animated underline */}

            <motion.div
              className="mx-auto mt-4 h-1 rounded-full bg-gradient-to-r from-orange-500 via-amber-300 to-orange-500"
              initial={{
                width: 0,
              }}
              animate={{
                width: 90,
              }}
              transition={motionTransition(0.8, 0.4)}
            />

            <motion.p
              className="mt-4 text-sm font-medium tracking-wide text-slate-400 sm:text-base"
              animate={
                reduceMotion
                  ? {}
                  : {
                    opacity: [0.5, 1, 0.5],
                  }
              }
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Preparing your next adventure...
            </motion.p>

          </motion.div>
        </div>

        {/* =====================================================
            PROGRESS SECTION
        ===================================================== */}

        <motion.div
          className="mx-auto mt-10 max-w-md"
          initial={
            reduceMotion
              ? false
              : {
                opacity: 0,
                y: 20,
              }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={motionTransition(0.7, 0.4)}
        >

          <div className="mb-3 flex items-center justify-between">

            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 sm:text-xs">
              Experience Loading
            </span>

            <motion.span
              className="text-lg font-black tabular-nums text-orange-400 sm:text-xl"
              key={Math.floor(progress)}
              initial={
                reduceMotion
                  ? false
                  : {
                    opacity: 0.5,
                    y: 5,
                  }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
            >
              {Math.floor(progress)}%
            </motion.span>

          </div>

          {/* Progress track */}

          <div className="relative h-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.06]">

            {/* Progress fill */}

            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-orange-600 via-orange-400 to-amber-300 shadow-[0_0_20px_rgba(249,115,22,0.45)]"
              style={{
                width: `${progress}%`,
              }}
            />

            {/* Shine */}

            {!reduceMotion && (
              <motion.div
                className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                animate={{
                  x: ["-100px", "450px"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            )}

          </div>

          {/* Loading stages */}

          <div className="mt-3 flex justify-between text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-500 sm:text-[10px]">
            <span>Initializing</span>
            <span>Preparing</span>
            <span>Almost Ready</span>
          </div>

        </motion.div>

        {/* =====================================================
            CINEMATIC ROAD
        ===================================================== */}

        <motion.div
          className="relative mt-10 h-24 overflow-hidden rounded-2xl border border-white/10 bg-[#080c15] shadow-[0_20px_60px_rgba(0,0,0,0.4)] sm:h-28"
          initial={
            reduceMotion
              ? false
              : {
                opacity: 0,
                y: 25,
                scale: 0.95,
              }
          }
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={motionTransition(0.8, 0.5)}
        >

          {/* Road atmosphere */}

          <div className="absolute inset-0 bg-gradient-to-b from-slate-800/40 via-[#101725] to-[#05070d]" />

          {/* Road perspective glow */}

          <motion.div
            className="absolute bottom-0 left-1/2 h-16 w-[120%] -translate-x-1/2 rounded-full bg-orange-500/10 blur-2xl"
            animate={
              reduceMotion
                ? {}
                : {
                  opacity: [0.3, 0.8, 0.3],
                  scaleX: [0.8, 1.1, 0.8],
                }
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Road lane markings */}

          <motion.div
            className="absolute inset-0 flex items-center gap-8"
            animate={
              reduceMotion
                ? {}
                : {
                  x: ["0%", "-50%"],
                }
            }
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...roadLines, ...roadLines].map((line, i) => (
              <span
                key={i}
                className="h-[3px] w-10 shrink-0 rounded-full bg-slate-400/50 sm:w-14"
              />
            ))}
          </motion.div>

          {/* Orange road edges */}

          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent"
            animate={
              reduceMotion
                ? {}
                : {
                  opacity: [0.4, 1, 0.4],
                }
            }
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Moving vehicle */}

          <motion.div
            className="absolute bottom-3 left-0 z-10"
            animate={
              reduceMotion
                ? {
                  x: "50%",
                }
                : {
                  x: ["-100px", "calc(100vw + 100px)"],
                }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          >

            {/* Headlight beam */}

            <motion.div
              className="absolute right-7 top-1/2 h-10 w-36 -translate-y-1/2 bg-gradient-to-r from-transparent via-orange-300/10 to-orange-200/30 blur-lg"
              animate={
                reduceMotion
                  ? {}
                  : {
                    opacity: [0.3, 0.9, 0.3],
                  }
              }
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Speed trails */}

            {!reduceMotion && (
              <motion.div
                className="absolute right-full top-1/2 mr-2 flex -translate-y-1/2 flex-col gap-1"
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scaleX: [0.7, 1.2, 0.7],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="h-px w-12 bg-orange-400/60" />
                <span className="h-px w-8 bg-amber-200/40" />
                <span className="h-px w-5 bg-orange-400/50" />
              </motion.div>
            )}

            <motion.img
              src={rentalLogo}
              alt=""
              aria-hidden="true"
              className="relative h-12 w-20 object-contain drop-shadow-[0_0_12px_rgba(249,115,22,0.35)] sm:h-14 sm:w-24"
              animate={
                reduceMotion
                  ? {}
                  : {
                    y: [0, -2, 0],
                  }
              }
              transition={{
                duration: 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

          </motion.div>

          {/* Road reflection */}

          <motion.div
            className="absolute bottom-1 h-px w-24 bg-orange-300/60 blur-sm"
            animate={
              reduceMotion
                ? {}
                : {
                  x: ["-100px", "100vw"],
                  opacity: [0, 1, 0],
                }
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />

        </motion.div>

        {/* =====================================================
            FOOTER STATUS
        ===================================================== */}

        <motion.div
          className="mt-6 flex items-center justify-center gap-3"
          initial={
            reduceMotion
              ? false
              : {
                opacity: 0,
                y: 10,
              }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={motionTransition(0.7, 0.7)}
        >

          {/* Animated status indicator */}

          <motion.span
            className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
            animate={
              reduceMotion
                ? {}
                : {
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5],
                }
            }
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.p
            className="text-center text-[10px] font-semibold tracking-[0.12em] text-slate-400 sm:text-xs"
            key={Math.floor(progress / 25)}
            initial={
              reduceMotion
                ? false
                : {
                  opacity: 0,
                  y: 5,
                }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            {progress < 25
              ? "Starting your engine..."
              : progress < 50
                ? "Getting your ride ready..."
                : progress < 75
                  ? "Preparing your destination..."
                  : progress < 100
                    ? "Almost ready for takeoff..."
                    : "Your journey is ready!"}
          </motion.p>

        </motion.div>

        {/* Bottom branding */}

        <motion.p
          className="mt-5 text-center text-[9px] font-medium uppercase tracking-[0.35em] text-slate-600"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={motionTransition(0.8, 0.8)}
        >
          Drive Your Way
        </motion.p>

      </div>
    </div>
  );
}