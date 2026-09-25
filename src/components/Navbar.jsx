import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  Menu,
  X,
  Phone,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  Bike,
  CarFront,
} from "lucide-react";

import rentalLogo from "../assets/rental-logo.png";

const links = [
  ["/", "Home"],
  ["/vehicles", "Vehicles"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const active = (p) =>
    location.pathname === p ||
    (p === "/vehicles" && location.pathname.startsWith("/vehicles/"));

  return (
    <header className="sticky top-0 z-50 px-1 pt-1 sm:px-2 sm:pt-1.5">
      <div className="w-full">

        <div className="relative overflow-hidden rounded-2xl border border-orange-100/80 bg-white/95 shadow-[0_10px_40px_rgba(249,115,22,0.10)] backdrop-blur-2xl sm:rounded-3xl">

          {/* =================================================
              BACKGROUND GLOW
          ================================================= */}

          <div className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-orange-300/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-amber-300/20 blur-3xl" />

          {/* =================================================
              MAIN NAVBAR
          ================================================= */}

          <div className="relative flex h-14 items-center justify-between px-2.5 sm:h-[68px] sm:px-5 lg:px-6">

            

            {/* ================= LOGO ================= */}

<Link
  to="/"
  onClick={() => setOpen(false)}
  className="group flex min-w-0 items-center gap-1 sm:gap-2"
>
  {/* ================= PNG LOGO ================= */}

  <motion.div
    whileHover={{
      scale: 1.05,
      rotate: -1,
    }}
    transition={{
      type: "spring",
      stiffness: 300,
    }}
    className="relative -ml-1 shrink-0 sm:-ml-2"
  >
    <img
      src={rentalLogo}
      alt="Car & Bike Rental"
      className="
        h-16 w-20
        object-contain
        sm:h-[72px] sm:w-24
        lg:h-20 lg:w-28
      "
    />
  </motion.div>

  {/* ================= BRAND ================= */}

  <div className="min-w-0 leading-tight">

    <div className="flex items-center gap-1 sm:gap-2">

      {/* Desktop */}
      <strong
        className="
          hidden
          bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500
          bg-clip-text
          text-lg
          font-black
          tracking-tight
          text-transparent
          sm:block
          lg:text-xl
        "
      >
        Car & Bike
      </strong>

      {/* Mobile */}
      <strong
        className="
          block
          truncate
          bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500
          bg-clip-text
          text-sm
          font-black
          tracking-tight
          text-transparent
          sm:hidden
        "
      >
        Car & Bike
      </strong>

      {/* Rental Badge */}
      <span
        className="
          hidden
          rounded-full
          bg-gradient-to-r from-orange-100 to-amber-100
          px-2
          py-0.5
          text-[9px]
          font-extrabold
          uppercase
          tracking-wider
          text-orange-600
          lg:inline-block
        "
      >
        Rental
      </span>

    </div>

    {/* Tagline */}
    <small
      className="
        hidden
        text-[10px]
        font-semibold
        tracking-wide
        text-slate-500
        sm:block
      "
    >
      Ride • Explore • Repeat
    </small>

  </div>
</Link>

            {/* =================================================
                DESKTOP NAV
            ================================================= */}

            <nav className="hidden items-center gap-1.5 md:flex">

              {links.map(([path, label]) => {
                const isActive = active(path);

                return (
                  <NavLink
                    key={path}
                    to={path}
                    className="relative"
                  >

                    <motion.div
                      whileHover={{ y: -1 }}
                      className={`relative rounded-2xl px-4 py-2 text-sm font-bold transition-all duration-300 ${
                        isActive
                          ? "text-orange-600"
                          : "text-slate-600 hover:text-orange-600"
                      }`}
                    >

                      {/* Active Background */}

                      {isActive && (
                        <motion.span
                          layoutId="activeNav"
                          className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-orange-50 via-amber-50 to-orange-100 shadow-sm"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}

                      <span className="relative z-10 flex items-center gap-1.5">

                        {label}

                        {label === "Vehicles" && (
                          <Sparkles
                            size={13}
                            className="text-amber-500"
                          />
                        )}

                      </span>

                      {/* Active Line */}

                      {isActive && (
                        <motion.span
                          layoutId="activeLine"
                          className="absolute bottom-0.5 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400"
                        />
                      )}

                    </motion.div>

                  </NavLink>
                );
              })}

              {/* =================================================
                  CALL BUTTON
              ================================================= */}

              <a
                href="tel:+919876543210"
                className="ml-2 flex items-center gap-2 rounded-2xl border border-orange-100 bg-gradient-to-r from-orange-50 to-amber-50 px-4 py-2 text-sm font-bold text-orange-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md hover:shadow-orange-100"
              >

                <span className="grid h-7 w-7 place-items-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-sm">

                  <Phone size={14} />

                </span>

                <span>Call Us</span>

              </a>

              {/* =================================================
                  ADMIN BUTTON
              ================================================= */}

              <Link
                to="/admin/login"
                className="group relative ml-1 overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >

                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative flex items-center gap-2">

                  <ShieldCheck
                    size={16}
                    className="text-orange-400"
                  />

                  Admin

                  <ChevronRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />

                </span>

              </Link>

            </nav>

            {/* =================================================
                MOBILE ACTIONS
            ================================================= */}

            <div className="flex shrink-0 items-center gap-1.5 md:hidden">

              {/* Call */}

              <a
                href="tel:+919876543210"
                aria-label="Call us"
                className="grid h-8 w-8 place-items-center rounded-xl border border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50 text-orange-600 shadow-sm transition-all hover:scale-105 sm:h-10 sm:w-10 sm:rounded-2xl"
              >

                <Phone
                  size={15}
                  className="sm:hidden"
                />

                <Phone
                  size={18}
                  className="hidden sm:block"
                />

              </a>

              {/* Menu */}

              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setOpen((v) => !v)}
                className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-orange-500 via-orange-500 to-amber-400 text-white shadow-md shadow-orange-200 sm:h-10 sm:w-10 sm:rounded-2xl"
                aria-label="Toggle menu"
                aria-expanded={open}
              >

                <AnimatePresence mode="wait">

                  {open ? (
                    <motion.div
                      key="close"
                      initial={{
                        rotate: -90,
                        opacity: 0,
                      }}
                      animate={{
                        rotate: 0,
                        opacity: 1,
                      }}
                      exit={{
                        rotate: 90,
                        opacity: 0,
                      }}
                    >

                      <X
                        size={18}
                        className="sm:h-[21px] sm:w-[21px]"
                      />

                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{
                        rotate: 90,
                        opacity: 0,
                      }}
                      animate={{
                        rotate: 0,
                        opacity: 1,
                      }}
                      exit={{
                        rotate: -90,
                        opacity: 0,
                      }}
                    >

                      <Menu
                        size={18}
                        className="sm:h-[21px] sm:w-[21px]"
                      />

                    </motion.div>
                  )}

                </AnimatePresence>

              </motion.button>

            </div>

          </div>

          {/* =================================================
              CONTINUOUS RENTAL QUOTE LINE
          ================================================= */}

          <div className="relative overflow-hidden border-t border-orange-100/70 bg-gradient-to-r from-orange-50/70 via-white to-amber-50/70">

            {/* Animated Line */}

            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
            />

            {/* Moving Quote */}

            <div className="flex h-6 items-center overflow-hidden sm:h-7">

              <motion.div
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex min-w-max items-center"
              >

                <div className="flex items-center gap-5 px-2 text-[8px] font-extrabold uppercase tracking-[0.16em] text-slate-500 sm:gap-8 sm:text-[9px]">

                  <span className="flex items-center gap-1.5">
                    <Bike
                      size={11}
                      className="text-orange-500"
                    />
                    Ride smart. Explore more.
                  </span>

                  <span className="text-orange-300">
                    ✦
                  </span>

                  <span className="flex items-center gap-1.5">
                    <CarFront
                      size={11}
                      className="text-amber-500"
                    />
                    Two wheels or four — your journey starts here.
                  </span>

                  <span className="text-orange-300">
                    ✦
                  </span>

                  <span>
                    Pick your ride. Make your move.
                  </span>

                  <span className="text-orange-300">
                    ✦
                  </span>

                  <span>
                    Drive. Discover. Repeat.
                  </span>

                  <span className="text-orange-300">
                    ✦
                  </span>

                  {/* Duplicate for seamless loop */}

                  <span className="flex items-center gap-1.5">
                    <Bike
                      size={11}
                      className="text-orange-500"
                    />
                    Ride smart. Explore more.
                  </span>

                  <span className="text-orange-300">
                    ✦
                  </span>

                  <span className="flex items-center gap-1.5">
                    <CarFront
                      size={11}
                      className="text-amber-500"
                    />
                    Two wheels or four — your journey starts here.
                  </span>

                  <span className="text-orange-300">
                    ✦
                  </span>

                  <span>
                    Pick your ride. Make your move.
                  </span>

                  <span className="text-orange-300">
                    ✦
                  </span>

                  <span>
                    Drive. Discover. Repeat.
                  </span>

                </div>

              </motion.div>

            </div>

          </div>

          {/* =================================================
              MOBILE MENU
          ================================================= */}

          <AnimatePresence>

            {open && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                }}
                className="overflow-hidden md:hidden"
              >

                <div className="border-t border-orange-100 bg-gradient-to-b from-white via-orange-50/30 to-amber-50/40 px-2.5 pb-3.5 pt-2.5 sm:px-4 sm:pb-5 sm:pt-3">

                  {/* Mobile Status */}

                  <div className="mb-2.5 flex items-center justify-between rounded-xl border border-orange-100 bg-white/80 px-3 py-2.5 shadow-sm sm:mb-3 sm:rounded-2xl sm:px-4 sm:py-3">

                    <div className="min-w-0">

                      <p className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 sm:text-xs">
                        Orange Drive
                      </p>

                      <p className="truncate text-xs font-bold text-slate-800 sm:text-sm">
                        Your journey starts here
                      </p>

                    </div>

                    <div className="ml-2 flex shrink-0 items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-[9px] font-bold text-green-600 sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-[11px]">

                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500 sm:h-2 sm:w-2" />

                      Available

                    </div>

                  </div>

                  {/* Mobile Links */}

                  <div className="grid gap-1.5 sm:gap-2">

                    {links.map(([path, label], index) => {
                      const isActive = active(path);

                      return (
                        <motion.div
                          key={path}
                          initial={{
                            x: -10,
                            opacity: 0,
                          }}
                          animate={{
                            x: 0,
                            opacity: 1,
                          }}
                          transition={{
                            delay: index * 0.05,
                          }}
                        >

                          <Link
                            to={path}
                            onClick={() => setOpen(false)}
                            className={`group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-bold transition-all sm:rounded-2xl sm:px-4 sm:py-3.5 ${
                              isActive
                                ? "bg-gradient-to-r from-orange-500 to-amber-400 text-white shadow-md shadow-orange-200"
                                : "bg-white text-slate-700 shadow-sm hover:bg-orange-50 hover:text-orange-600"
                            }`}
                          >

                            <span>
                              {label}
                            </span>

                            <ChevronRight
                              size={16}
                              className={`transition-transform group-hover:translate-x-1 sm:h-[18px] sm:w-[18px] ${
                                isActive
                                  ? "text-white"
                                  : "text-slate-300"
                              }`}
                            />

                          </Link>

                        </motion.div>
                      );
                    })}

                    {/* Admin */}

                    <motion.div
                      initial={{
                        x: -10,
                        opacity: 0,
                      }}
                      animate={{
                        x: 0,
                        opacity: 1,
                      }}
                      transition={{
                        delay: 0.16,
                      }}
                    >

                      <Link
                        to="/admin/login"
                        onClick={() => setOpen(false)}
                        className="group mt-0.5 flex items-center justify-between rounded-xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 px-3 py-2.5 text-sm font-bold text-white shadow-lg sm:mt-1 sm:rounded-2xl sm:px-4 sm:py-3.5"
                      >

                        <span className="flex items-center gap-2">

                          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 sm:h-8 sm:w-8 sm:rounded-xl">

                            <ShieldCheck
                              size={15}
                              className="sm:h-[17px] sm:w-[17px]"
                            />

                          </span>

                          Admin Portal

                        </span>

                        <ChevronRight
                          size={16}
                          className="text-orange-400 transition-transform group-hover:translate-x-1 sm:h-[18px] sm:w-[18px]"
                        />

                      </Link>

                    </motion.div>

                  </div>

                  {/* Mobile Contact */}

                  <div className="mt-2.5 flex items-center justify-between rounded-xl bg-gradient-to-r from-orange-100 via-amber-50 to-yellow-100 px-3 py-2.5 sm:mt-4 sm:rounded-2xl sm:px-4 sm:py-3">

                    <div>

                      <p className="text-[10px] font-semibold text-orange-600 sm:text-xs">
                        Need a vehicle?
                      </p>

                      <p className="text-xs font-black text-slate-800 sm:text-sm">
                        Call us anytime
                      </p>

                    </div>

                    <a
                      href="tel:+919876543210"
                      className="flex items-center gap-1.5 rounded-lg bg-white px-2.5 py-1.5 text-[10px] font-extrabold text-orange-600 shadow-sm sm:gap-2 sm:rounded-xl sm:px-3 sm:py-2 sm:text-xs"
                    >

                      <Phone
                        size={12}
                        className="sm:h-[14px] sm:w-[14px]"
                      />

                      Call Now

                    </a>

                  </div>

                </div>

              </motion.div>
            )}

          </AnimatePresence>

        </div>

      </div>
    </header>
  );
}