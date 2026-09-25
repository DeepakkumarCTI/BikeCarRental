import { motion } from "framer-motion";
import rentalLogo from "../assets/rental-logo.png";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#fafafa]">

      {/* =====================================================
          MILD BACKGROUND
      ===================================================== */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/60 via-white to-slate-50" />

      {/* Soft top-right glow */}
      <motion.div
        className="absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-orange-400/5 blur-3xl"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.4, 0.65, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Soft bottom-left glow */}
      <motion.div
        className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-amber-300/5 blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          SUBTLE FLOATING LIGHT PARTICLES
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-orange-400/20"
            style={{
              left: `${10 + i * 11}%`,
              top: `${18 + (i % 4) * 18}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* =====================================================
          MAIN LOADER
      ===================================================== */}
      <div className="relative z-10 w-full max-w-md px-5 sm:px-6">

        {/* =================================================
            BRAND SECTION
        ================================================= */}
        <div className="text-center">

          {/* Logo */}
          <motion.div
            className="relative mx-auto mb-5 flex h-24 w-28 items-center justify-center sm:h-28 sm:w-36"
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 10,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >

            {/* Outer subtle rotating ring */}
            <motion.div
              className="absolute inset-0 rounded-full border border-orange-200/50"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Second ring */}
            <motion.div
              className="absolute inset-2 rounded-full border border-dashed border-orange-300/30"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Soft logo glow */}
            <motion.div
              className="absolute h-16 w-20 rounded-full bg-orange-500/10 blur-2xl sm:h-20 sm:w-24"
              animate={{
                scale: [0.9, 1.15, 0.9],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Actual PNG Logo */}
            <motion.img
              src={rentalLogo}
              alt="Car & Bike Rentals"
              className="relative z-10 h-20 w-24 object-contain sm:h-24 sm:w-32"
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Brand Name */}
          <motion.h1
            className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl"
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
          >
            Car & Bike Rentals
          </motion.h1>

          {/* Orange underline */}
          <motion.div
            className="mx-auto mt-2 h-0.5 rounded-full bg-orange-500"
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: 55,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.35,
            }}
          />

          {/* Loading message */}
          <motion.p
            className="mt-3 text-sm font-medium text-slate-500"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.25,
            }}
          >
            Preparing your journey
          </motion.p>
        </div>

        {/* =================================================
            PROGRESS SECTION
        ================================================= */}
        <motion.div
          className="mt-8"
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.35,
          }}
        >

          {/* Progress bar */}
          <div className="relative h-1.5 overflow-hidden rounded-full bg-slate-200/80">

            {/* Progress */}
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400"
              initial={{
                width: "0%",
              }}
              animate={{
                width: "100%",
              }}
              transition={{
                duration: 2.2,
                ease: "easeInOut",
              }}
            />

            {/* Moving shine */}
            <motion.div
              className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/70 to-transparent"
              animate={{
                x: ["-100px", "500px"],
              }}
              transition={{
                duration: 1.3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {/* Progress labels */}
          <div className="mt-3 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400 sm:text-[10px]">
            <span>Loading</span>

            <motion.span
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Getting ready
            </motion.span>
          </div>
        </motion.div>

        {/* =================================================
            PREMIUM ROAD ANIMATION
        ================================================= */}
        <motion.div
          className="relative mt-8 h-16 overflow-hidden rounded-xl border border-slate-200/80 bg-slate-900 shadow-[0_10px_35px_rgba(15,23,42,0.10)]"
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.5,
          }}
        >

          {/* Subtle road gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950" />

          {/* Road glow */}
          <div className="absolute bottom-0 left-0 right-0 h-5 bg-orange-500/5 blur-xl" />

          {/* =================================================
              MOVING ROAD LINES
          ================================================= */}
          <motion.div
            className="absolute inset-y-0 left-0 flex w-[220%] items-center gap-12"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 1.1,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(24)].map((_, i) => (
              <span
                key={i}
                className="h-[2px] w-12 shrink-0 rounded-full bg-slate-500/70"
              />
            ))}
          </motion.div>

          {/* =================================================
              SPEED LINES
          ================================================= */}
          <motion.div
            className="absolute right-0 top-5 flex items-center gap-2"
            animate={{
              x: [80, -40],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span className="h-px w-8 bg-orange-300/40" />
            <span className="h-px w-5 bg-orange-300/30" />
          </motion.div>

          <motion.div
            className="absolute right-0 top-9 flex items-center gap-2"
            animate={{
              x: [100, -30],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: 0.2,
              ease: "linear",
            }}
          >
            <span className="h-px w-10 bg-slate-400/30" />
            <span className="h-px w-6 bg-slate-400/20" />
          </motion.div>

          {/* =================================================
              ORANGE ROAD EDGE
          ================================================= */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500/80"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* =================================================
              MOVING REAL LOGO
          ================================================= */}
          <motion.div
            className="absolute bottom-1.5 left-2"
            initial={{
              x: "-120px",
              opacity: 0,
            }}
            animate={{
              x: ["-120px", "430px"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Motion blur behind vehicle */}
            <motion.div
              className="absolute left-0 top-1/2 h-2 w-16 -translate-y-1/2 rounded-full bg-orange-500/20 blur-md"
              animate={{
                scaleX: [0.7, 1.2, 0.7],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <img
              src={rentalLogo}
              alt=""
              aria-hidden="true"
              className="relative h-9 w-14 object-contain object-center brightness-110 drop-shadow-[0_4px_6px_rgba(0,0,0,0.35)] sm:h-10 sm:w-16"
            />
          </motion.div>

          {/* =================================================
              ROAD REFLECTION
          ================================================= */}
          <motion.div
            className="absolute bottom-0 h-px w-28 bg-orange-400/30 blur-sm"
            animate={{
              x: ["-120px", "500px"],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* =================================================
            LOADING STATUS
        ================================================= */}
        <motion.div
          className="mt-5 text-center"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.7,
          }}
        >
          <motion.p
            className="text-[11px] font-semibold text-slate-400"
            animate={{
              opacity: [0.45, 1, 0.45],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Finding the best route for you...
          </motion.p>
        </motion.div>

        {/* =================================================
            LOADING DOTS
        ================================================= */}
        <div className="mt-4 flex justify-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-orange-500"
              animate={{
                y: [0, -4, 0],
                opacity: [0.25, 1, 0.25],
                scale: [0.8, 1.15, 0.8],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.16,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

      </div>
    </div>
  );
}