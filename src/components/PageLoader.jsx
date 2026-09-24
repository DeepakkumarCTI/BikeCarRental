import { motion } from "framer-motion";

/* Professional automotive logo */
function VehicleLogo() {
  return (
    <svg
      viewBox="0 0 120 70"
      className="h-10 w-14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Main vehicle body */}
      <path
        d="
          M15 45
          L20 30
          C21 27 24 25 28 25
          H42
          L50 14
          C52 11 55 10 59 10
          H76
          C80 10 83 12 85 15
          L92 25
          H98
          C103 25 107 29 108 34
          L110 45
          V51
          H102
          C101 58 96 62 90 62
          C84 62 79 58 78 51
          H42
          C41 58 36 62 30 62
          C24 62 19 58 18 51
          H10
          V45
          H15Z
        "
        fill="currentColor"
      />

      {/* Front and rear windows */}
      <path
        d="
          M46 25
          L53 15
          C54 14 56 13 59 13
          H75
          C78 13 80 14 82 17
          L87 25
          H46Z
        "
        fill="white"
        opacity="0.92"
      />

      {/* Window divider */}
      <path
        d="M67 14V25"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Headlight */}
      <path
        d="M98 29C101 29 104 31 105 34H98V29Z"
        fill="white"
        opacity="0.95"
      />

      {/* Front grille */}
      <path
        d="M99 36H107L108 42H99V36Z"
        fill="white"
        opacity="0.75"
      />

      {/* Wheels */}
      <circle cx="30" cy="49" r="10" fill="#0f172a" />
      <circle cx="30" cy="49" r="5" fill="#94a3b8" />
      <circle cx="30" cy="49" r="2" fill="#e2e8f0" />

      <circle cx="90" cy="49" r="10" fill="#0f172a" />
      <circle cx="90" cy="49" r="5" fill="#94a3b8" />
      <circle cx="90" cy="49" r="2" fill="#e2e8f0" />

      {/* Body highlight */}
      <path
        d="M16 43H98"
        stroke="white"
        strokeWidth="2"
        opacity="0.3"
      />
    </svg>
  );
}

/* Small moving vehicle used on the road */
function MovingVehicle() {
  return (
    <svg
      viewBox="0 0 120 70"
      className="h-9 w-14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="
          M15 45
          L20 30
          C21 27 24 25 28 25
          H42
          L50 14
          C52 11 55 10 59 10
          H76
          C80 10 83 12 85 15
          L92 25
          H98
          C103 25 107 29 108 34
          L110 45
          V51
          H102
          C101 58 96 62 90 62
          C84 62 79 58 78 51
          H42
          C41 58 36 62 30 62
          C24 62 19 58 18 51
          H10
          V45
          H15Z
        "
        fill="currentColor"
      />

      <path
        d="
          M46 25
          L53 15
          C54 14 56 13 59 13
          H75
          C78 13 80 14 82 17
          L87 25
          H46Z
        "
        fill="white"
        opacity="0.9"
      />

      <path
        d="M67 14V25"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M98 29C101 29 104 31 105 34H98V29Z"
        fill="#fef3c7"
      />

      <circle cx="30" cy="49" r="10" fill="#020617" />
      <circle cx="30" cy="49" r="5" fill="#64748b" />

      <circle cx="90" cy="49" r="10" fill="#020617" />
      <circle cx="90" cy="49" r="5" fill="#64748b" />
    </svg>
  );
}

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#fafafa]">

      {/* Clean light background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/70 via-white to-white" />

      {/* Very subtle brand glow */}
      <motion.div
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-amber-400/5 blur-3xl"
        animate={{
          scale: [1.08, 1, 1.08],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main loader */}
      <div className="relative z-10 w-full max-w-md px-6">

        {/* Brand section */}
        <div className="text-center">

          {/* Professional vehicle logo */}
          <motion.div
            className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/20"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <VehicleLogo />
          </motion.div>

          {/* Brand name */}
          <motion.h1
            className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl"
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >
            Car & Bike Rentals
          </motion.h1>

          {/* Loading message */}
          <motion.p
            className="mt-2 text-sm font-medium text-slate-500"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >
            Preparing your journey
          </motion.p>
        </div>

        {/* Progress section */}
        <div className="mt-8">

          {/* Progress bar */}
          <div className="relative h-1.5 overflow-hidden rounded-full bg-slate-200">

            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-orange-500"
              initial={{
                width: "0%",
              }}
              animate={{
                width: "100%",
              }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
            />

            {/* Moving highlight */}
            <motion.div
              className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              animate={{
                x: ["-80px", "430px"],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {/* Progress labels */}
          <div className="mt-3 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
            <span>Loading</span>
            <span>Getting ready</span>
          </div>
        </div>

        {/* Road / vehicle animation */}
        <div className="relative mt-8 h-14 overflow-hidden rounded-xl border border-slate-200 bg-slate-900 shadow-sm">

          {/* Road lane markings */}
          <motion.div
            className="absolute inset-y-0 left-0 flex w-[200%] items-center gap-10"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <span
                key={i}
                className="h-[2px] w-12 shrink-0 rounded-full bg-slate-500"
              />
            ))}
          </motion.div>

          {/* Orange road edge */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500/80" />

          {/* Moving realistic vehicle */}
          <motion.div
            className="absolute bottom-1.5 left-3 text-orange-500"
            initial={{
              x: "-10%",
            }}
            animate={{
              x: ["-10%", "430%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <MovingVehicle />
          </motion.div>

          {/* Subtle road reflection */}
          <motion.div
            className="absolute bottom-0 h-px w-24 bg-orange-400/20 blur-sm"
            animate={{
              x: ["-100px", "500px"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Minimal loading dots */}
        <div className="mt-6 flex justify-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-orange-500"
              animate={{
                opacity: [0.25, 1, 0.25],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.18,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

      </div>
    </div>
  );
}