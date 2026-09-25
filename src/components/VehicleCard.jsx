
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
        y: -4,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      className="group relative flex h-full min-w-0 w-full flex-col rounded-2xl sm:rounded-3xl"
    >
      {/* Animated Border */}
      <div className="pointer-events-none absolute -inset-[2px] overflow-hidden rounded-[18px] sm:rounded-[26px]">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[220%] w-[220%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,rgba(249,115,22,0.15),rgba(249,115,22,0.95),rgba(251,191,36,0.7),rgba(249,115,22,0.2),rgba(249,115,22,0.9),rgba(251,146,60,0.65),rgba(249,115,22,0.2),rgba(249,115,22,0.95),rgba(249,115,22,0.15))]"
          animate={{ rotate: 360 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Border Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-[2px] rounded-2xl bg-orange-400/20 blur-md sm:rounded-3xl"
        animate={{
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Card Body */}
      <div className="relative z-10 flex h-full min-w-0 w-full flex-1 flex-col overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 group-hover:shadow-[0_18px_45px_rgba(249,115,22,0.18)] sm:rounded-3xl">

        {/* Vehicle Image */}
        <Link
          to={`/vehicles/${v.id}`}
          className="relative block aspect-[16/10] w-full shrink-0 overflow-hidden bg-orange-50"
        >
          <img
            src={v.imageUrl}
            alt={v.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/900x560/f97316/ffffff?text=Vehicle";
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />

          {/* Image Light Sweep */}
          <motion.div
            className="pointer-events-none absolute inset-y-0 -left-[120%] w-[70%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/30 to-transparent"
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

          {/* Image Glow */}
          <motion.div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-orange-500/25 to-transparent"
            animate={{
              opacity: [0.35, 0.7, 0.35],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
          />

          {/* Vehicle Icon */}
          <motion.div
            className="absolute bottom-2.5 left-2.5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/40 bg-slate-950/65 text-white backdrop-blur-md sm:bottom-4 sm:left-4 sm:h-11 sm:w-11"
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
              <Bike size={18} className="sm:h-5 sm:w-5" />
            ) : (
              <Car size={19} className="sm:h-[21px] sm:w-[21px]" />
            )}
          </motion.div>

          {/* Availability Badge */}
          <motion.span
            className={`absolute left-2 top-2 max-w-[72%] rounded-full px-2 py-1 text-[9px] font-black shadow-sm backdrop-blur-sm sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-xs ${
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
            <span className="block truncate">
              {v.available ? "Available" : "Booked / Unavailable"}
            </span>
          </motion.span>

          {/* Vehicle Type */}
          <span className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[9px] font-black capitalize text-slate-700 shadow-sm backdrop-blur-sm sm:right-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-xs">
            {v.type}
          </span>
        </Link>

        {/* Card Content */}
        <div className="flex min-w-0 flex-1 flex-col p-3 sm:p-5">

          {/* Brand, Name and Price */}
          <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-start gap-1.5 sm:gap-3">

            <div className="min-w-0">
              <motion.p
                className="truncate text-[9px] font-black uppercase tracking-wide text-orange-500 sm:text-xs sm:tracking-wider"
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

              <h3 className="mt-1 line-clamp-2 min-h-[2.5rem] break-words text-[15px] font-black leading-5 text-slate-900 sm:min-h-[3.5rem] sm:text-lg sm:leading-7">
                {v.name}
              </h3>
            </div>

            {/* Price */}
            <motion.div
              className="min-w-0 pt-0.5 text-right"
              whileHover={{ scale: 1.03 }}
            >
              <b className="block whitespace-nowrap text-[15px] font-black leading-5 text-orange-600 sm:text-xl sm:leading-6">
                {money(v.pricePerDay)}
              </b>

              <div className="mt-0.5 text-[9px] text-slate-400 sm:text-xs">
                / day
              </div>
            </motion.div>
          </div>

          {/* Availability Status */}
          <div className="mt-3 flex min-h-[30px] min-w-0 items-center gap-1.5 text-[9px] font-bold sm:mt-4 sm:min-h-[32px] sm:text-xs">
            <motion.span
              className="shrink-0"
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
            >
              <CircleCheck
                size={14}
                className="text-emerald-600 sm:h-[15px] sm:w-[15px]"
              />
            </motion.span>

            <span
              className={`line-clamp-2 min-w-0 break-words ${
                v.available
                  ? "text-emerald-600"
                  : "text-rose-600"
              }`}
            >
              {v.available
                ? "Ready for rental"
                : "Currently unavailable"}
            </span>
          </div>

          {/* Vehicle Specifications */}
          <div className="mt-3 grid min-w-0 grid-cols-2 gap-x-1.5 gap-y-3 text-[10px] font-semibold text-slate-500 sm:mt-5 sm:gap-x-2 sm:gap-y-3 sm:text-xs">

            <span className="flex min-w-0 items-center gap-1.5 sm:gap-2">
              <Users
                size={14}
                className="shrink-0 sm:h-[15px] sm:w-[15px]"
              />
              <span className="truncate">
                {v.seats} seats
              </span>
            </span>

            <span className="flex min-w-0 items-center gap-1.5 sm:gap-2">
              <Gauge
                size={14}
                className="shrink-0 sm:h-[15px] sm:w-[15px]"
              />
              <span className="truncate">
                {v.transmission}
              </span>
            </span>

            <span className="flex min-w-0 items-center gap-1.5 sm:gap-2">
              <Fuel
                size={14}
                className="shrink-0 sm:h-[15px] sm:w-[15px]"
              />
              <span className="truncate">
                {v.fuel}
              </span>
            </span>

            <span className="flex min-w-0 items-center gap-1.5 sm:gap-2">
              <MapPin
                size={14}
                className="shrink-0 sm:h-[15px] sm:w-[15px]"
              />
              <span className="truncate">
                {v.location}
              </span>
            </span>
          </div>

          {/* Flexible Space Keeps Bottom Content Aligned */}
          <div className="mt-auto">

            {/* Animated Road */}
            <div className="relative mt-5 h-7 overflow-hidden sm:mt-6">

              <div className="absolute bottom-1 left-0 right-0 h-[2px] rounded-full bg-slate-200" />

              <motion.div
                className="absolute bottom-1 left-0 h-[2px] w-1/3 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.7)]"
                animate={{
                  x: ["-100%", "320%"],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

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

              <motion.div
                className="absolute bottom-1.5 left-0 z-20 flex items-center"
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
                      className="text-orange-500 drop-shadow-[0_2px_5px_rgba(249,115,22,0.45)] sm:h-[22px] sm:w-[22px]"
                    />
                  ) : (
                    <Car
                      size={21}
                      strokeWidth={2.2}
                      className="text-orange-500 drop-shadow-[0_2px_5px_rgba(249,115,22,0.45)] sm:h-[23px] sm:w-[23px]"
                    />
                  )}
                </motion.div>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <div className="mt-3 grid min-w-0 grid-cols-2 gap-1.5 sm:mt-5 sm:gap-2">

              {/* View Details */}
              <Link
                to={`/vehicles/${v.id}`}
                className="btn-secondary flex min-w-0 w-full items-center justify-center gap-1 overflow-hidden whitespace-nowrap px-1.5 py-2 text-[10px] sm:px-3 sm:py-2.5 sm:text-sm"
              >
                <span className="sm:hidden">
                  View
                </span>

                <span className="hidden sm:inline">
                  View details
                </span>

                <ArrowRight
                  size={13}
                  className="shrink-0 sm:h-4 sm:w-4"
                />
              </Link>

              {/* Enquire */}
              <Link
                to={v.available ? `/booking/${v.id}` : "#"}
                aria-disabled={!v.available}
                onClick={(e) => {
                  if (!v.available) {
                    e.preventDefault();
                  }
                }}
                className={`btn-primary flex min-w-0 w-full items-center justify-center gap-1 overflow-hidden whitespace-nowrap px-1.5 py-2 text-[10px] sm:px-3 sm:py-2.5 sm:text-sm ${
                  !v.available
                    ? "pointer-events-none opacity-50"
                    : ""
                }`}
              >
                <CheckCircle2
                  size={13}
                  className="shrink-0 sm:h-4 sm:w-4"
                />

                <span className="truncate">
                  Enquire
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Glow */}
        <motion.div
          className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-transparent via-orange-400 to-transparent"
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