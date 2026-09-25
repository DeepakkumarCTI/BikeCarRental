import { Link } from "react-router-dom";
import {
  ArrowRight,
  Fuel,
  Gauge,
  MapPin,
  Users,
  CheckCircle2,
  Car,
  Bike,
  CircleCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { money } from "../utils";

export default function VehicleCard({ v }) {
  const isBike = v.type?.toLowerCase() === "bike";

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -7,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      className="group relative min-w-0 w-full rounded-2xl sm:rounded-3xl"
    >
      {/* =====================================================
          FULL 4-SIDE ANIMATED BORDER
      ====================================================== */}
      <div className="pointer-events-none absolute -inset-[2px] overflow-hidden rounded-[18px] sm:rounded-[26px]">
        {/* Rotating border */}
        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-[220%]
            w-[220%]
            -translate-x-1/2
            -translate-y-1/2
            bg-[conic-gradient(from_0deg,rgba(249,115,22,0.15)_0deg,rgba(249,115,22,0.95)_45deg,rgba(251,191,36,0.7)_90deg,rgba(249,115,22,0.2)_135deg,rgba(249,115,22,0.9)_180deg,rgba(251,146,60,0.65)_225deg,rgba(249,115,22,0.2)_270deg,rgba(249,115,22,0.95)_315deg,rgba(249,115,22,0.15)_360deg)]
          "
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* =====================================================
          ANIMATED BORDER GLOW
      ====================================================== */}
      <motion.div
        className="
          pointer-events-none
          absolute
          -inset-[2px]
          rounded-2xl
          bg-orange-400/20
          blur-md
          sm:rounded-3xl
        "
        animate={{
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          CARD BODY
      ====================================================== */}
      <div
        className="
          relative
          z-10
          min-w-0
          w-full
          overflow-hidden
          rounded-2xl
          bg-white
          shadow-soft
          transition-all
          duration-300
          group-hover:shadow-[0_18px_45px_rgba(249,115,22,0.18)]
          sm:rounded-3xl
        "
      >
        {/* =================================================
            VEHICLE IMAGE
        ================================================== */}
        <Link
          to={`/vehicles/${v.id}`}
          className="
            relative
            block
            aspect-[16/10]
            min-w-0
            overflow-hidden
            bg-orange-50
          "
        >
          <img
            src={v.imageUrl}
            alt={v.name}
            className="
              h-full
              w-full
              object-cover
              transition
              duration-700
              group-hover:scale-105
            "
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/900x560/f97316/ffffff?text=Vehicle";
            }}
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />

          {/* Image light sweep */}
          <motion.div
            className="
              pointer-events-none
              absolute
              inset-y-0
              -left-[120%]
              w-[70%]
              skew-x-[-20deg]
              bg-gradient-to-r
              from-transparent
              via-white/30
              to-transparent
            "
            animate={{
              left: ["-120%", "160%"],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          />

          {/* Image bottom glow */}
          <motion.div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-20
              bg-gradient-to-t
              from-orange-500/25
              to-transparent
            "
            animate={{
              opacity: [0.35, 0.7, 0.35],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Vehicle type icon */}
          <motion.div
            className="
              absolute
              bottom-3
              left-3
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              border
              border-white/40
              bg-slate-950/65
              text-white
              backdrop-blur-md
              sm:bottom-4
              sm:left-4
              sm:h-11
              sm:w-11
            "
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {isBike ? (
              <Bike
                size={18}
                strokeWidth={2}
                className="sm:h-5 sm:w-5"
              />
            ) : (
              <Car
                size={19}
                strokeWidth={2}
                className="sm:h-[21px] sm:w-[21px]"
              />
            )}
          </motion.div>

          {/* Availability */}
          <motion.span
            className={`absolute left-2 top-2 rounded-full px-2 py-1 text-[9px] font-black shadow-sm backdrop-blur-sm sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-xs ${
              v.available
                ? "bg-emerald-100/95 text-emerald-700"
                : "bg-rose-100/95 text-rose-700"
            }`}
            animate={
              v.available
                ? {
                    boxShadow: [
                      "0 0 0 rgba(16,185,129,0)",
                      "0 0 14px rgba(16,185,129,0.35)",
                      "0 0 0 rgba(16,185,129,0)",
                    ],
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            {v.available ? "Available" : "Booked / Unavailable"}
          </motion.span>

          {/* Type badge */}
          <span
            className="
              absolute
              right-2
              top-2
              rounded-full
              bg-white/90
              px-2
              py-1
              text-[9px]
              font-black
              capitalize
              text-slate-700
              shadow-sm
              backdrop-blur-sm
              sm:right-4
              sm:top-4
              sm:px-3
              sm:py-1.5
              sm:text-xs
            "
          >
            {v.type}
          </span>
        </Link>

        {/* =================================================
            CONTENT
        ================================================== */}
        <div className="min-w-0 p-3 sm:p-5">
          {/* Brand + Price */}
          <div className="flex min-w-0 items-start justify-between gap-2 sm:gap-3">
            <div className="min-w-0 flex-1">
              <motion.p
                className="
                  truncate
                  text-[9px]
                  font-black
                  uppercase
                  tracking-wide
                  text-orange-500
                  sm:text-xs
                  sm:tracking-wider
                "
                animate={{
                  opacity: [0.65, 1, 0.65],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
              >
                {v.brand} · {v.category}
              </motion.p>

              <h3
                className="
                  mt-1
                  break-words
                  text-[15px]
                  font-black
                  leading-5
                  text-slate-900
                  sm:text-lg
                  sm:leading-normal
                "
              >
                {v.name}
              </h3>
            </div>

            {/* Price */}
            <motion.div
              className="min-w-0 shrink-0 text-right"
              whileHover={{
                scale: 1.05,
              }}
            >
              <b
                className="
                  block
                  whitespace-nowrap
                  text-[17px]
                  font-black
                  leading-5
                  text-orange-600
                  sm:text-xl
                "
              >
                {money(v.pricePerDay)}
              </b>

              <div className="text-[9px] text-slate-400 sm:text-xs">
                / day
              </div>
            </motion.div>
          </div>

          {/* Ready status */}
          <div className="mt-3 flex items-center gap-1.5 text-[9px] font-bold text-emerald-600 sm:mt-4 sm:text-xs">
            <motion.span
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
            >
              <CircleCheck
                size={13}
                className="sm:h-[15px] sm:w-[15px]"
              />
            </motion.span>

            <span>
              {v.available
                ? "Ready for rental"
                : "Currently unavailable"}
            </span>
          </div>

          {/* =================================================
              SPECIFICATIONS
          ================================================== */}
          <div
            className="
              mt-4
              grid
              min-w-0
              grid-cols-2
              gap-x-2
              gap-y-2
              text-[10px]
              font-semibold
              text-slate-500
              sm:mt-5
              sm:gap-2
              sm:text-xs
            "
          >
            <span className="flex min-w-0 items-center gap-1.5 overflow-hidden sm:gap-2">
              <Users
                size={14}
                className="shrink-0 sm:h-[15px] sm:w-[15px]"
              />
              <span className="truncate">{v.seats} seats</span>
            </span>

            <span className="flex min-w-0 items-center gap-1.5 overflow-hidden sm:gap-2">
              <Gauge
                size={14}
                className="shrink-0 sm:h-[15px] sm:w-[15px]"
              />
              <span className="truncate">{v.transmission}</span>
            </span>

            <span className="flex min-w-0 items-center gap-1.5 overflow-hidden sm:gap-2">
              <Fuel
                size={14}
                className="shrink-0 sm:h-[15px] sm:w-[15px]"
              />
              <span className="truncate">{v.fuel}</span>
            </span>

            <span className="flex min-w-0 items-center gap-1.5 overflow-hidden sm:gap-2">
              <MapPin
                size={14}
                className="shrink-0 sm:h-[15px] sm:w-[15px]"
              />
              <span className="truncate">{v.location}</span>
            </span>
          </div>

          {/* =================================================
              RENTAL ROAD ANIMATION
          ================================================== */}
          <div className="relative mt-5 h-7 overflow-hidden sm:mt-6">
            {/* Road */}
            <div className="absolute bottom-1 left-0 right-0 h-[2px] rounded-full bg-slate-200" />

            {/* Moving orange road light */}
            <motion.div
              className="
                absolute
                bottom-1
                left-0
                h-[2px]
                w-1/3
                rounded-full
                bg-orange-400
                shadow-[0_0_8px_rgba(249,115,22,0.7)]
              "
              animate={{
                x: ["-100%", "320%"],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Road marks */}
            <div className="absolute bottom-1 left-0 right-0 flex justify-between opacity-60">
              {Array.from({ length: 7 }).map((_, index) => (
                <motion.span
                  key={index}
                  className="h-[2px] w-3 rounded-full bg-slate-300"
                  animate={{
                    opacity: [0.25, 0.7, 0.25],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.12,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>

            {/* Moving vehicle */}
            <motion.div
              className="
                absolute
                bottom-1.5
                left-0
                z-20
                flex
                items-center
              "
              animate={{
                x: ["-35px", "calc(100% + 10px)"],
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                repeatDelay: 0.5,
                ease: "linear",
              }}
            >
              <motion.div
                animate={{
                  y: [0, -1, 0],
                }}
                transition={{
                  duration: 0.35,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {isBike ? (
                  <Bike
                    size={20}
                    strokeWidth={2.2}
                    className="
                      text-orange-500
                      drop-shadow-[0_2px_5px_rgba(249,115,22,0.45)]
                      sm:h-[22px]
                      sm:w-[22px]
                    "
                  />
                ) : (
                  <Car
                    size={21}
                    strokeWidth={2.2}
                    className="
                      text-orange-500
                      drop-shadow-[0_2px_5px_rgba(249,115,22,0.45)]
                      sm:h-[23px]
                      sm:w-[23px]
                    "
                  />
                )}
              </motion.div>
            </motion.div>
          </div>

          {/* =================================================
              BUTTONS
          ================================================== */}
          <div className="mt-4 grid min-w-0 grid-cols-2 gap-2 sm:mt-5 sm:flex">
            {/* View Details */}
            <Link
              to={`/vehicles/${v.id}`}
              className="
                btn-secondary
                flex
                min-w-0
                w-full
                items-center
                justify-center
                gap-1
                overflow-hidden
                whitespace-nowrap
                px-2
                py-2
                text-[10px]
                sm:flex-1
                sm:px-4
                sm:py-2.5
                sm:text-sm
              "
            >
              <span className="truncate">
                View details
              </span>

              <motion.span
                className="shrink-0"
                whileHover={{
                  x: 3,
                }}
              >
                <ArrowRight
                  size={13}
                  className="sm:h-4 sm:w-4"
                />
              </motion.span>
            </Link>

            {/* Enquire */}
            <Link
              to={v.available ? `/booking/${v.id}` : "#"}
              className={`
                btn-primary
                flex
                min-w-0
                w-full
                items-center
                justify-center
                gap-1
                overflow-hidden
                whitespace-nowrap
                px-2
                py-2
                text-[10px]
                sm:flex-1
                sm:px-4
                sm:py-2.5
                sm:text-sm
                ${
                  !v.available
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              `}
            >
              <motion.span
                className="shrink-0"
                animate={
                  v.available
                    ? {
                        scale: [1, 1.12, 1],
                      }
                    : {}
                }
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}
              >
                <CheckCircle2
                  size={13}
                  className="sm:h-4 sm:w-4"
                />
              </motion.span>

              <span className="truncate">
                Enquire
              </span>
            </Link>
          </div>
        </div>

        {/* =================================================
            BOTTOM GLOW LINE
        ================================================== */}
        <motion.div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            h-[2px]
            w-full
            origin-left
            bg-gradient-to-r
            from-transparent
            via-orange-400
            to-transparent
          "
          animate={{
            scaleX: [0.2, 1, 0.2],
            opacity: [0.35, 0.9, 0.35],
          }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.article>
  );
}