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
} from "lucide-react";

const links = [
  ["/", "Home"],
  ["/vehicles", "Vehicles"],
  ["/contact", "Contact"],
];

/* =========================================================
   PROFESSIONAL VEHICLE LOGO
========================================================= */
function VehicleLogo() {
  return (
    <svg
      viewBox="0 0 120 70"
      className="h-8 w-11 sm:h-9 sm:w-12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Vehicle body */}
      <path
        d="
          M12 45
          L18 30
          C19 27 22 25 27 25
          H41
          L49 14
          C51 11 54 9 58 9
          H76
          C80 9 83 11 85 14
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
          H12Z
        "
        fill="currentColor"
      />

      {/* Windows */}
      <path
        d="
          M45 25
          L52 15
          C54 13 56 12 59 12
          H75
          C78 12 80 14 82 16
          L87 25
          H45Z
        "
        fill="white"
        opacity="0.95"
      />

      {/* Window divider */}
      <path
        d="M67 13V25"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Headlight */}
      <path
        d="M98 29C102 29 104 31 106 35H98V29Z"
        fill="#FFF7ED"
      />

      {/* Front grille */}
      <path
        d="M99 37H107L108 42H99V37Z"
        fill="white"
        opacity="0.7"
      />

      {/* Wheels */}
      <circle cx="30" cy="49" r="10" fill="#0F172A" />
      <circle cx="30" cy="49" r="5" fill="#94A3B8" />
      <circle cx="30" cy="49" r="2" fill="#E2E8F0" />

      <circle cx="90" cy="49" r="10" fill="#0F172A" />
      <circle cx="90" cy="49" r="5" fill="#94A3B8" />
      <circle cx="90" cy="49" r="2" fill="#E2E8F0" />

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

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const active = (p) =>
    location.pathname === p ||
    (p === "/vehicles" && location.pathname.startsWith("/vehicles/"));

  return (
    <header className="sticky top-0 z-50 px-1 pt-1.5 sm:px-2 sm:pt-2">
      <div className="w-full">
        <div className="relative overflow-hidden rounded-2xl border border-orange-100/80 bg-white/95 shadow-[0_10px_40px_rgba(249,115,22,0.10)] backdrop-blur-2xl sm:rounded-3xl">

          {/* Background glow */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-orange-300/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-amber-300/20 blur-3xl" />

          {/* =================================================
              MAIN NAVBAR
          ================================================= */}
          <div className="relative flex h-16 items-center justify-between px-2.5 sm:h-[76px] sm:px-5 lg:px-6">

            {/* ================= LOGO ================= */}
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="group flex min-w-0 items-center gap-2 sm:gap-3"
            >
              {/* Logo Icon */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: -1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative shrink-0"
              >
                <div className="absolute inset-0 rounded-xl bg-orange-400/30 blur-md transition-opacity group-hover:opacity-70" />

                <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-orange-500 via-orange-500 to-amber-400 text-white shadow-md shadow-orange-200/70 sm:h-12 sm:w-12 sm:rounded-2xl">
                  <VehicleLogo />

                  <span className="absolute -right-3 -top-3 h-7 w-7 rounded-full bg-white/25 blur-md" />
                </span>
              </motion.div>

              {/* Brand */}
              <div className="min-w-0 leading-tight">

                {/* Desktop / larger screens */}
                <div className="flex items-center gap-2">
                  <strong className="hidden bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-xl font-black tracking-tight text-transparent sm:block">
                    Car & Bike
                  </strong>

                  {/* Mobile brand */}
                  <strong className="block truncate bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-sm font-black tracking-tight text-transparent sm:hidden">
                    Car & Bike
                  </strong>

                  <span className="hidden rounded-full bg-gradient-to-r from-orange-100 to-amber-100 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-orange-600 lg:inline-block">
                    Rental
                  </span>
                </div>

                {/* Subtitle */}
                <small className="hidden text-[11px] font-semibold tracking-wide text-slate-500 sm:block">
                 Ride | Explore | Repeat
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
                      className={`relative rounded-2xl px-4 py-2.5 text-sm font-bold transition-all duration-300 ${
                        isActive
                          ? "text-orange-600"
                          : "text-slate-600 hover:text-orange-600"
                      }`}
                    >
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

                      {isActive && (
                        <motion.span
                          layoutId="activeLine"
                          className="absolute bottom-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400"
                        />
                      )}
                    </motion.div>
                  </NavLink>
                );
              })}

              {/* Call */}
              <a
                href="tel:+919876543210"
                className="ml-2 flex items-center gap-2 rounded-2xl border border-orange-100 bg-gradient-to-r from-orange-50 to-amber-50 px-4 py-2.5 text-sm font-bold text-orange-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md hover:shadow-orange-100"
              >
                <span className="grid h-7 w-7 place-items-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-sm">
                  <Phone size={14} />
                </span>

                <span>Call Us</span>
              </a>

              {/* Admin */}
              <Link
                to="/admin/login"
                className="group relative ml-1 overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative flex items-center gap-2">
                  <ShieldCheck size={16} className="text-orange-400" />

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

              {/* Mobile Call */}
              <a
                href="tel:+919876543210"
                aria-label="Call us"
                className="grid h-9 w-9 place-items-center rounded-xl border border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50 text-orange-600 shadow-sm transition-all hover:scale-105 sm:h-11 sm:w-11 sm:rounded-2xl"
              >
                <Phone size={16} className="sm:hidden" />
                <Phone size={18} className="hidden sm:block" />
              </a>

              {/* Mobile Menu */}
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setOpen((v) => !v)}
                className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-orange-500 via-orange-500 to-amber-400 text-white shadow-md shadow-orange-200 sm:h-11 sm:w-11 sm:rounded-2xl"
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                <AnimatePresence mode="wait">
                  {open ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                    >
                      <X size={19} className="sm:h-[21px] sm:w-[21px]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                    >
                      <Menu size={19} className="sm:h-[21px] sm:w-[21px]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* =================================================
              MOBILE MENU
          ================================================= */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
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
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
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
                            <span>{label}</span>

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
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.16 }}
                    >
                      <Link
                        to="/admin/login"
                        onClick={() => setOpen(false)}
                        className="group mt-0.5 flex items-center justify-between rounded-xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 px-3 py-2.5 text-sm font-bold text-white shadow-lg sm:mt-1 sm:rounded-2xl sm:px-4 sm:py-3.5"
                      >
                        <span className="flex items-center gap-2">
                          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 sm:h-8 sm:w-8 sm:rounded-xl">
                            <ShieldCheck size={15} className="sm:h-[17px] sm:w-[17px]" />
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
                      <Phone size={12} className="sm:h-[14px] sm:w-[14px]" />
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