import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bike,
  Car,
  CarFront,
  CheckCircle2,
  Clock3,
  Headphones,
  MapPin,
  ShieldCheck,
  Sparkles,
  FileText,
  Route,
  KeyRound,
  ChevronRight,
  Phone,
  CalendarDays,
  CalendarCheck2,
  Gauge,
  Zap,
  Search,
  Users,
  IndianRupee,
  Navigation,
  MessageCircle,
  Clock,
  Timer,
  MoveRight,
  CircleCheck,
} from "lucide-react";

import { getStored } from "../utils";
import VehicleCard from "../components/VehicleCard";

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/* =========================================================
   RENTAL STEPS
========================================================= */

const rentalSteps = [
  {
    number: "01",
    icon: Search,
    title: "Choose Your Vehicle",
    description:
      "Browse our bikes and cars, compare options and select the ride that fits your trip.",
    color: "from-orange-500 to-amber-400",
  },
  {
    number: "02",
    icon: CalendarDays,
    title: "Select Date & Time",
    description:
      "Choose your pickup date, return date and preferred pickup time.",
    color: "from-amber-500 to-yellow-400",
  },
  {
    number: "03",
    icon: FileText,
    title: "Send Booking Request",
    description:
      "Enter your details and submit the booking enquiry. Our team will confirm availability.",
    color: "from-orange-500 to-pink-500",
  },
  {
    number: "04",
    icon: KeyRound,
    title: "Pick Up & Ride",
    description:
      "Collect your vehicle from the agreed location and enjoy your journey.",
    color: "from-pink-500 to-orange-500",
  },
];

/* =========================================================
   RENTAL FEATURES
========================================================= */

const features = [
  {
    icon: MapPin,
    title: "Easy Pickup",
    text: "Convenient pickup and drop options around Coimbatore and Pollachi.",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    icon: Clock3,
    title: "Flexible Rentals",
    text: "Choose hourly or daily rental options based on your travel plan.",
    gradient: "from-amber-500 to-yellow-400",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Pricing",
    text: "Clear rental pricing with no unnecessary surprises.",
    gradient: "from-pink-500 to-orange-500",
  },
  {
    icon: CircleCheck,
    title: "Vehicle Availability",
    text: "Check available bikes and cars before sending your enquiry.",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: Headphones,
    title: "Human Support",
    text: "Get direct assistance from our team whenever you need help.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Navigation,
    title: "Easy Locations",
    text: "Share your pickup and drop locations while making your request.",
    gradient: "from-violet-500 to-purple-400",
  },
];

/* =========================================================
   ANIMATED ROAD
========================================================= */

function AnimatedRoad() {
  return (
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[4] h-24 overflow-hidden">
      <div className="absolute bottom-0 h-16 w-full bg-slate-950/80 backdrop-blur-[2px]" />

      <div className="absolute bottom-16 h-px w-full bg-gradient-to-r from-transparent via-orange-400/60 to-transparent" />

      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-7 left-0 flex w-[200%] gap-10"
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="h-1 w-16 shrink-0 rounded-full bg-white/50 sm:w-24"
          />
        ))}
      </motion.div>

      <motion.div
        animate={{
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-16 left-0 h-px w-full bg-orange-400 blur-sm"
      />
    </div>
  );
}

/* =========================================================
   SPEED LINES
========================================================= */

function SpeedLines({ reverse = false }) {
  return (
    <div
      className={`pointer-events-none absolute top-1/2 ${
        reverse ? "right-full" : "left-full"
      }`}
    >
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            width: 0,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            width: ["10px", "70px", "110px"],
          }}
          transition={{
            duration: 1.1,
            repeat: Infinity,
            delay: index * 0.16,
            ease: "easeOut",
          }}
          className="absolute h-[2px] rounded-full bg-gradient-to-r from-orange-300 to-transparent"
          style={{
            top: `${(index - 2) * 12}px`,
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   MOVING BIKE
========================================================= */

function MovingBike() {
  return (
    <motion.div
      initial={{
        x: "-25vw",
      }}
      animate={{
        x: "120vw",
      }}
      transition={{
        duration: 16,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute bottom-[62px] left-0 z-[8]"
    >
      <div className="relative">
        <motion.div
          animate={{
            scaleX: [1, 0.92, 1],
            opacity: [0.25, 0.15, 0.25],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
          }}
          className="absolute -bottom-2 left-1/2 h-2 w-24 -translate-x-1/2 rounded-full bg-black/60 blur-md"
        />

        <SpeedLines />

        <motion.div
          animate={{
            opacity: [0.3, 0.65, 0.3],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
          }}
          className="absolute inset-0 rounded-full bg-orange-500/20 blur-2xl"
        />

        <motion.div
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            duration: 0.35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <Bike
            size={72}
            strokeWidth={1.5}
            className="text-orange-400 drop-shadow-[0_0_15px_rgba(251,146,60,0.7)] sm:h-24 sm:w-24"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MOVING CAR
========================================================= */

function MovingCar() {
  return (
    <motion.div
      initial={{
        x: "120vw",
      }}
      animate={{
        x: "-30vw",
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
        delay: 4,
      }}
      className="absolute bottom-[68px] right-0 z-[7]"
    >
      <div className="relative">
        <motion.div
          animate={{
            scaleX: [1, 0.9, 1],
            opacity: [0.3, 0.15, 0.3],
          }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
          }}
          className="absolute -bottom-2 left-1/2 h-2 w-28 -translate-x-1/2 rounded-full bg-black/70 blur-md"
        />

        <motion.div
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
          className="absolute -right-4 top-1/2 h-3 w-10 rounded-full bg-yellow-200 blur-md"
        />

        <SpeedLines reverse />

        <motion.div
          animate={{
            y: [0, -1.5, 0],
          }}
          transition={{
            duration: 0.45,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <CarFront
            size={82}
            strokeWidth={1.3}
            className="text-pink-300 drop-shadow-[0_0_18px_rgba(244,114,182,0.6)] sm:h-28 sm:w-28"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   FLOATING LOCATION CARD
========================================================= */

function FloatingLocationCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        y: [0, -8, 0],
        scale: 1,
      }}
      transition={{
        opacity: {
          duration: 0.8,
        },
        scale: {
          duration: 0.8,
        },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="absolute right-[5%] top-[24%] z-20 hidden w-52 rounded-2xl border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-xl lg:block"
    >
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-orange-500/20">
          <MapPin className="text-orange-300" size={19} />
        </div>

        <div>
          <p className="text-[9px] font-bold uppercase tracking-widest text-white/40">
            Pickup location
          </p>

          <p className="mt-0.5 text-sm font-black text-white">
            Coimbatore
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between rounded-xl bg-black/20 px-3 py-2">
        <span className="text-[10px] text-white/50">
          Vehicles nearby
        </span>

        <span className="flex items-center gap-1 text-[10px] font-black text-emerald-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Available
        </span>
      </div>
    </motion.div>
  );
}

/* =========================================================
   FLOATING BOOKING CARD
========================================================= */

function FloatingBookingCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 30,
      }}
      animate={{
        opacity: 1,
        x: [0, 5, 0],
        y: [0, -5, 0],
      }}
      transition={{
        opacity: {
          duration: 1,
          delay: 0.8,
        },
        x: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="absolute bottom-[25%] right-[8%] z-20 hidden w-56 rounded-2xl border border-white/15 bg-slate-950/60 p-4 shadow-2xl backdrop-blur-xl xl:block"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-widest text-white/40">
            Quick booking
          </p>

          <p className="mt-1 text-sm font-black text-white">
            Ready to ride?
          </p>
        </div>

        <div className="grid h-9 w-9 place-items-center rounded-xl bg-orange-500/20">
          <Zap size={17} className="text-orange-300" />
        </div>
      </div>

      <div className="mt-3 space-y-2">
        <div className="flex items-center gap-2 rounded-lg bg-white/5 px-2.5 py-2">
          <CalendarDays size={13} className="text-orange-300" />
          <span className="text-[10px] text-white/60">
            Choose your dates
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-lg bg-white/5 px-2.5 py-2">
          <Route size={13} className="text-pink-300" />
          <span className="text-[10px] text-white/60">
            Select your vehicle
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN HOME
========================================================= */

export default function Home() {
  const vehicles = getStored("od_vehicles", []);

  const featured = vehicles
    .filter((v) => v.available)
    .slice(0, 4);

  return (
    <div className="overflow-hidden bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[590px] overflow-hidden bg-slate-950 sm:min-h-[650px] lg:min-h-[720px]">

  {/* Video */}
  <motion.video
    autoPlay
    muted
    loop
    playsInline
    initial={{ scale: 1.06 }}
    animate={{
      scale: [1.06, 1, 1.035],
    }}
    transition={{
      duration: 22,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute inset-0 h-full w-full object-cover object-center"
  >
    <source
      src="/videos/rental-hero.mp4"
      type="video/mp4"
    />
  </motion.video>

  {/* Lighter Mobile Overlay */}
  <div className="absolute inset-0 bg-slate-950/25" />

  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-950/35 to-slate-950/5" />

  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-slate-950/10" />

  <div className="absolute inset-0 bg-gradient-to-br from-orange-950/10 via-transparent to-pink-950/10" />

  {/* Ambient Glow */}

  <motion.div
    animate={{
      x: [0, 100, 0],
      y: [0, -40, 0],
      scale: [1, 1.15, 1],
      opacity: [0.12, 0.25, 0.12],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute -left-40 top-10 h-[350px] w-[350px] rounded-full bg-orange-500/20 blur-[120px]"
  />

  <motion.div
    animate={{
      x: [0, -80, 0],
      y: [0, 50, 0],
      scale: [1, 1.2, 1],
      opacity: [0.08, 0.2, 0.08],
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-pink-500/20 blur-[130px]"
  />

  {/* Light Streaks */}

  {[...Array(5)].map((_, index) => (
    <motion.div
      key={index}
      animate={{
        x: ["-20%", "120%"],
        opacity: [0, 0.45, 0],
      }}
      transition={{
        duration: 5 + index,
        repeat: Infinity,
        delay: index * 2,
        ease: "linear",
      }}
      className="pointer-events-none absolute left-0 h-px w-[30%] bg-gradient-to-r from-transparent via-orange-300/50 to-transparent blur-sm"
      style={{
        top: `${25 + index * 12}%`,
      }}
    />
  ))}

  <FloatingLocationCard />
  <FloatingBookingCard />

  {/* Route Circle */}

  <motion.div
    animate={{
      rotate: 360,
    }}
    transition={{
      duration: 35,
      repeat: Infinity,
      ease: "linear",
    }}
    className="pointer-events-none absolute right-[13%] top-[18%] hidden h-64 w-64 rounded-full border border-dashed border-white/10 lg:block"
  >
    <motion.div
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.4, 1, 0.4],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_20px_rgba(251,146,60,1)]"
    />
  </motion.div>

  {/* Hero Content */}

  <div className="relative z-10 flex min-h-[590px] items-center px-4 sm:min-h-[650px] sm:px-6 lg:min-h-[720px] lg:px-12 xl:px-16">

    <div className="w-full max-w-4xl pb-10 pt-12 sm:pb-14 sm:pt-16 lg:pb-20 lg:pt-20">

      {/* Badge */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-300/20 bg-orange-400/10 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.12em] text-orange-200 backdrop-blur-xl sm:mb-5 sm:px-4 sm:py-2 sm:text-[10px] lg:px-5 lg:py-2.5 lg:text-xs"
      >
        <Sparkles size={13} />

        Fast · Flexible · Freedom to Move
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{
          opacity: 0,
          y: 45,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="max-w-4xl text-[36px] font-black leading-[0.94] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-[82px]"
      >
        Move freely.
        <br />

        <motion.span
          animate={{
            backgroundPosition: [
              "0% 50%",
              "100% 50%",
              "0% 50%",
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="inline-block bg-gradient-to-r from-orange-400 via-amber-300 to-pink-400 bg-[length:200%_200%] bg-clip-text text-transparent"
        >
          Go anywhere.
        </motion.span>
      </motion.h1>

      {/* Description */}

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.4,
        }}
        className="mt-4 max-w-lg text-xs leading-5 text-white/70 sm:mt-5 sm:text-sm sm:leading-6 lg:mt-6 lg:text-lg lg:leading-7"
      >
        Rent bikes and cars for city rides, weekend trips
        and long-distance journeys. Choose your vehicle,
        dates and pickup location and send your booking
        request.
      </motion.p>

      {/* CTA */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          delay: 0.55,
        }}
        className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-3 lg:mt-7 lg:flex"
      >

        <Link
          to="/vehicles?type=bike"
          className="group relative flex items-center justify-center gap-1.5 overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 px-3 py-2.5 text-[10px] font-black text-white shadow-2xl shadow-orange-950/40 transition-all duration-300 hover:-translate-y-1 sm:gap-2 sm:px-5 sm:py-3 sm:text-xs lg:rounded-2xl lg:px-7 lg:py-4 lg:text-sm"
        >
          <Bike
            size={15}
            className="relative z-10 transition-transform group-hover:rotate-6 sm:h-[17px] sm:w-[17px] lg:h-[18px] lg:w-[18px]"
          />

          <span className="relative z-10">
            Rent a Bike
          </span>

          <ArrowRight
            size={13}
            className="relative z-10 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4"
          />
        </Link>

        <Link
          to="/vehicles?type=car"
          className="group flex items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-3 py-2.5 text-[10px] font-black text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 sm:gap-2 sm:px-5 sm:py-3 sm:text-xs lg:rounded-2xl lg:px-7 lg:py-4 lg:text-sm"
        >
          <CarFront
            size={15}
            className="sm:h-[17px] sm:w-[17px] lg:h-[18px] lg:w-[18px]"
          />

          <span>
            Rent a Car
          </span>

          <ArrowRight
            size={13}
            className="transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4"
          />
        </Link>

      </motion.div>

      {/* Trust */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.8,
        }}
        className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[9px] font-bold text-white/70 sm:mt-6 sm:gap-x-5 sm:text-xs lg:mt-7 lg:text-sm"
      >

        <div className="flex items-center gap-1">
          <CheckCircle2
            size={13}
            className="text-emerald-400 sm:h-[15px] sm:w-[15px]"
          />
          Available vehicles
        </div>

        <div className="flex items-center gap-1">
          <ShieldCheck
            size={13}
            className="text-orange-400 sm:h-[15px] sm:w-[15px]"
          />
          Transparent pricing
        </div>

        <div className="flex items-center gap-1">
          <Headphones
            size={13}
            className="text-amber-300 sm:h-[15px] sm:w-[15px]"
          />
          Human support
        </div>

      </motion.div>

    </div>
  </div>

  {/* Moving Vehicles */}

  <MovingBike />
  <MovingCar />

  <AnimatedRoad />

  {/* Fleet status */}

  <motion.div
    initial={{
      opacity: 0,
      y: 30,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      delay: 1,
      duration: 0.8,
    }}
    className="absolute bottom-3 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-4 rounded-full border border-white/10 bg-black/30 px-5 py-2.5 backdrop-blur-xl lg:flex"
  >

    <div className="flex items-center gap-2">
      <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

      <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">
        Fleet live
      </span>
    </div>

    <div className="h-3 w-px bg-white/10" />

    <div className="flex items-center gap-2 text-[10px] font-bold text-white/70">
      <Gauge
        size={13}
        className="text-orange-400"
      />

      Bikes & Cars ready to move
    </div>

  </motion.div>

</section>

      {/* =====================================================
          MOBILE QUICK FEATURES
      ===================================================== */}

      <section className="relative z-20 -mt-5 px-4 sm:-mt-6 md:hidden">

        <div className="grid grid-cols-2 gap-3 rounded-3xl border border-orange-100 bg-white p-3 shadow-xl">

          <div className="rounded-2xl bg-orange-50 p-4">
            <MapPin
              size={21}
              className="text-orange-500"
            />

            <b className="mt-2 block text-sm">
              Easy pickup
            </b>

            <span className="mt-1 block text-xs leading-5 text-slate-500">
              Coimbatore & Pollachi
            </span>
          </div>

          <div className="rounded-2xl bg-amber-50 p-4">
            <Clock3
              size={21}
              className="text-amber-600"
            />

            <b className="mt-2 block text-sm">
              Flexible rentals
            </b>

            <span className="mt-1 block text-xs leading-5 text-slate-500">
              Hourly & daily options
            </span>
          </div>

        </div>
      </section>

      {/* =====================================================
          QUICK BOOKING SEARCH
      ===================================================== */}

      <section className="relative z-30 px-4 pt-6 sm:px-6 sm:pt-12 lg:-mt-14">

  <div className="mx-auto max-w-6xl">

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl sm:p-6"
    >

      {/* Header */}

      <div className="mb-4 flex flex-col justify-between gap-2 sm:mb-5 sm:flex-row sm:items-center">

        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-orange-500 sm:text-xs">
            Plan your journey
          </p>

          <h2 className="mt-1 text-lg font-black text-slate-950 sm:text-2xl">
            Find your perfect ride
          </h2>
        </div>

        <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 sm:text-xs">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          Check availability
        </span>

      </div>

      {/* Finder Grid */}

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-5">

        {/* Vehicle */}

        <Link
          to="/vehicles"
          className="group rounded-xl border border-slate-200 bg-slate-50 p-2.5 transition hover:border-orange-300 hover:bg-orange-50 sm:rounded-2xl sm:p-3"
        >
          <div className="flex items-center gap-2 sm:gap-3">

            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-orange-100 sm:h-10 sm:w-10 sm:rounded-xl">
              <Bike
                size={17}
                className="text-orange-500 sm:h-[19px] sm:w-[19px]"
              />
            </div>

            <div className="min-w-0">
              <p className="text-[8px] font-bold uppercase tracking-wider text-slate-400 sm:text-[9px]">
                Vehicle
              </p>

              <p className="truncate text-xs font-black text-slate-800 sm:text-sm">
                Bike / Car
              </p>
            </div>

          </div>
        </Link>

        {/* Pickup */}

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 sm:rounded-2xl sm:p-3">
          <div className="flex items-center gap-2 sm:gap-3">

            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-orange-100 sm:h-10 sm:w-10 sm:rounded-xl">
              <MapPin
                size={17}
                className="text-orange-500 sm:h-[19px] sm:w-[19px]"
              />
            </div>

            <div className="min-w-0">
              <p className="text-[8px] font-bold uppercase tracking-wider text-slate-400 sm:text-[9px]">
                Pickup
              </p>

              <p className="truncate text-xs font-black text-slate-800 sm:text-sm">
                Your location
              </p>
            </div>

          </div>
        </div>

        {/* Date */}

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 sm:rounded-2xl sm:p-3">
          <div className="flex items-center gap-2 sm:gap-3">

            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-amber-100 sm:h-10 sm:w-10 sm:rounded-xl">
              <CalendarDays
                size={17}
                className="text-amber-600 sm:h-[19px] sm:w-[19px]"
              />
            </div>

            <div className="min-w-0">
              <p className="text-[8px] font-bold uppercase tracking-wider text-slate-400 sm:text-[9px]">
                Date
              </p>

              <p className="truncate text-xs font-black text-slate-800 sm:text-sm">
                Choose dates
              </p>
            </div>

          </div>
        </div>

        {/* Time */}

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 sm:rounded-2xl sm:p-3">
          <div className="flex items-center gap-2 sm:gap-3">

            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-pink-100 sm:h-10 sm:w-10 sm:rounded-xl">
              <Clock
                size={17}
                className="text-pink-500 sm:h-[19px] sm:w-[19px]"
              />
            </div>

            <div className="min-w-0">
              <p className="text-[8px] font-bold uppercase tracking-wider text-slate-400 sm:text-[9px]">
                Time
              </p>

              <p className="truncate text-xs font-black text-slate-800 sm:text-sm">
                Pickup time
              </p>
            </div>

          </div>
        </div>

        {/* Browse Button */}

        <Link
          to="/vehicles"
          className="group col-span-2 flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-3 py-3 text-xs font-black text-white transition hover:bg-orange-500 sm:col-span-2 sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm lg:col-span-1"
        >
          Browse Vehicles

          <ArrowRight
            size={15}
            className="transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4"
          />
        </Link>

      </div>

    </motion.div>

  </div>

</section>

      {/* =====================================================
          HOW TO RENT
      ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-pink-50 py-12 sm:py-16 lg:py-16">

  {/* Background Glow */}

  <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-orange-200/30 blur-[100px]" />

  <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-pink-200/30 blur-[100px]" />

  <div className="container-x relative">

    {/* ================= HEADER ================= */}

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={fadeUp}
      className="mx-auto max-w-2xl text-center"
    >

      <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1.5 text-[8px] font-black uppercase tracking-widest text-orange-600 sm:px-4 sm:py-2 sm:text-xs">
        <Sparkles size={12} />
        Simple Process
      </div>

      <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
        How to rent your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
          ride
        </span>
      </h2>

      <p className="mx-auto mt-2 max-w-lg text-[10px] leading-4 text-slate-500 sm:mt-3 sm:text-base sm:leading-7">
        From choosing your vehicle to picking it up,
        everything is simple and straightforward.
      </p>

    </motion.div>

    {/* ================= STEPS ================= */}

    <div className="relative mt-8 sm:mt-12 lg:mt-16">

      {/* Main Connecting Line */}

      <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-0.5 bg-gradient-to-r from-orange-300 via-amber-300 to-pink-300 sm:block lg:top-16" />

      <motion.div
        initial={{
          scaleX: 0,
        }}
        whileInView={{
          scaleX: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.5,
        }}
        className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-0.5 origin-left bg-gradient-to-r from-orange-500 via-amber-400 to-pink-500 sm:block lg:top-16"
      />

      {/* 4 STEPS - ALWAYS ONE ROW */}

      <div className="grid grid-cols-4 gap-2 sm:gap-4 lg:gap-5">

        {rentalSteps.map((step, index) => {

          const Icon = step.icon;

          return (
            <motion.div
              key={step.number}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.6,
              }}
              className="relative min-w-0 text-center"
            >

              {/* Circle */}

              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: -2,
                }}
                className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md sm:h-20 sm:w-20 lg:h-32 lg:w-32 lg:shadow-lg"
              >

                <div
                  className={`grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br ${step.color} text-white shadow-md sm:h-12 sm:w-12 sm:rounded-2xl lg:h-20 lg:w-20`}
                >
                  <Icon
                    size={16}
                    className="sm:h-5 sm:w-5 lg:h-8 lg:w-8"
                  />
                </div>

                {/* Number */}

                <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full border-2 border-white bg-slate-950 text-[7px] font-black text-white sm:h-6 sm:w-6 sm:text-[8px] lg:h-7 lg:w-7">
                  {index + 1}
                </span>

              </motion.div>

              {/* Text */}

              <div className="mt-3 sm:mt-4">

                <p className="text-[7px] font-black tracking-widest text-orange-500 sm:text-[9px]">
                  STEP {step.number}
                </p>

                <h3 className="mt-1 text-[9px] font-black leading-3 text-slate-900 sm:text-sm sm:leading-5 lg:text-xl lg:leading-6">
                  {step.title}
                </h3>

                <p className="mx-auto mt-1 hidden max-w-[150px] text-[9px] leading-4 text-slate-500 sm:block sm:mt-2 sm:text-[10px] sm:leading-5 lg:max-w-[210px] lg:text-sm lg:leading-6">
                  {step.description}
                </p>

              </div>

            </motion.div>
          );
        })}

      </div>

    </div>

    {/* ================= LOOPING BOTTOM ROUTE LINE ================= */}

    <div className="relative mt-10 h-10 overflow-hidden sm:mt-14 sm:h-12 lg:mt-16">

      {/* Soft Background Line */}

      <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-orange-200 to-transparent" />

      {/* Animated Dashed Route */}

      <motion.div
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 top-1/2 h-[2px] w-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-orange-500 to-pink-500"
      />

      {/* Route Dots */}

      {[0, 1, 2, 3, 4, 5].map((dot) => (
        <motion.span
          key={dot}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.35, 1, 0.35],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            delay: dot * 0.3,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-orange-500 sm:h-2 sm:w-2"
          style={{
            left: `${8 + dot * 16}%`,
          }}
        />
      ))}

      {/* Moving Vehicle Dot */}

      <motion.div
        animate={{
          x: ["-10%", "110%"],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 flex -translate-y-1/2 items-center"
      >
        <div className="h-2.5 w-2.5 rounded-full bg-slate-950 shadow-[0_0_12px_rgba(15,23,42,0.35)] sm:h-3 sm:w-3" />

        <div className="h-px w-8 bg-gradient-to-r from-slate-950/40 to-transparent sm:w-12" />
      </motion.div>

      {/* Route End Points */}

      <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border-2 border-orange-500 bg-white sm:h-3 sm:w-3" />

      <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border-2 border-pink-500 bg-white sm:h-3 sm:w-3" />

    </div>

  </div>
</section>

      {/* =====================================================
          RENTAL REQUIREMENTS
      ===================================================== */}

      <section className="container-x py-12 sm:py-16 lg:py-14">

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{
      once: true,
    }}
    variants={fadeUp}
    className="mb-8 text-center sm:mb-12"
  >
    <p className="text-[9px] font-black uppercase tracking-[0.18em] text-orange-500 sm:text-xs">
      Everything included
    </p>

    <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-4xl">
      Built for a smooth rental experience
    </h2>

    <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
      From availability and pricing to pickup locations
      and customer support, we keep the rental process simple.
    </p>
  </motion.div>

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{
      once: true,
    }}
    variants={staggerContainer}
    className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
  >

    {features.map((item, index) => {

      const Icon = item.icon;

      // Different colors for each feature card
      const cardColors = [
        {
          border: "border-orange-100",
          bg: "from-orange-50 via-white to-amber-50",
          icon: "from-orange-500 to-amber-500",
          glow: "bg-orange-400",
        },
        {
          border: "border-blue-100",
          bg: "from-blue-50 via-white to-cyan-50",
          icon: "from-blue-500 to-cyan-500",
          glow: "bg-blue-400",
        },
        {
          border: "border-emerald-100",
          bg: "from-emerald-50 via-white to-green-50",
          icon: "from-emerald-500 to-green-500",
          glow: "bg-emerald-400",
        },
        {
          border: "border-violet-100",
          bg: "from-violet-50 via-white to-purple-50",
          icon: "from-violet-500 to-purple-500",
          glow: "bg-violet-400",
        },
        {
          border: "border-pink-100",
          bg: "from-pink-50 via-white to-rose-50",
          icon: "from-pink-500 to-rose-500",
          glow: "bg-pink-400",
        },
        {
          border: "border-cyan-100",
          bg: "from-cyan-50 via-white to-sky-50",
          icon: "from-cyan-500 to-sky-500",
          glow: "bg-cyan-400",
        },
      ];

      const color = cardColors[index % cardColors.length];

      return (
        <motion.div
          key={item.title}
          variants={fadeUp}
          whileHover={{
            y: -7,
            scale: 1.02,
          }}
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            y: {
              duration: 4 + index * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            },
          }}
          className={`group relative overflow-hidden rounded-2xl border ${color.border} bg-gradient-to-br ${color.bg} p-4 shadow-sm transition-shadow duration-300 hover:shadow-2xl sm:rounded-3xl sm:p-6`}
        >

          {/* Animated glow */}
          <motion.div
            animate={{
              x: ["-120%", "120%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.5,
            }}
            className="pointer-events-none absolute inset-y-0 left-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent"
          />

          {/* Decorative floating circle */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
            className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full ${color.glow} blur-2xl`}
          />

          {/* Icon */}
          <motion.div
            animate={{
              y: [0, -3, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.15,
            }}
            className={`relative z-10 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${color.icon} text-white shadow-lg sm:h-14 sm:w-14 sm:rounded-2xl`}
          >
            <Icon
              size={18}
              className="sm:h-6 sm:w-6"
            />
          </motion.div>

          {/* Content */}
          <div className="relative z-10">

            <h3 className="mt-3 text-xs font-black leading-4 text-slate-900 sm:mt-5 sm:text-lg">
              {item.title}
            </h3>

            <p className="mt-1.5 text-[9px] leading-4 text-slate-500 sm:mt-2 sm:text-sm sm:leading-6">
              {item.text}
            </p>

          </div>

          {/* Bottom animated line */}
          <motion.div
            animate={{
              width: ["20%", "80%", "20%"],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
            className={`absolute bottom-0 left-1/2 h-1 -translate-x-1/2 rounded-full bg-gradient-to-r ${color.icon}`}
          />

        </motion.div>
      );
    })}

  </motion.div>
</section>

      {/* =====================================================
          CHOOSE YOUR RIDE
      ===================================================== */}

      <section className="relative overflow-hidden bg-slate-950 py-12 sm:py-16 lg:py-20">

  {/* Background Glow */}
  <motion.div
    animate={{
      x: [0, 80, 0],
      opacity: [0.08, 0.18, 0.08],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-500/20 blur-[100px] sm:h-96 sm:w-96 sm:blur-[120px]"
  />

  <motion.div
    animate={{
      x: [0, -80, 0],
      opacity: [0.06, 0.15, 0.06],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-pink-500/20 blur-[100px] sm:h-96 sm:w-96 sm:blur-[120px]"
  />

  <div className="container-x relative z-10">

    {/* Heading */}
    <div className="mx-auto max-w-2xl text-center">

      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-orange-400 sm:text-xs sm:tracking-[0.2em]">
        Vehicle categories
      </p>

      <h2 className="mt-2 text-2xl font-black text-white sm:mt-3 sm:text-4xl lg:text-5xl">
        Choose your{" "}
        <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
          ride
        </span>
      </h2>

      <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-white/50 sm:mt-3 sm:text-sm sm:leading-6">
        Pick a bike for quick city travel or a car for
        comfortable family and long-distance journeys.
      </p>

    </div>

    {/* Bike + Car */}
    {/* grid-cols-2 keeps both cards side-by-side on mobile */}
    <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5">

      {/* ================= BIKE ================= */}
      <Link
        to="/vehicles?type=bike"
        className="group relative min-h-[245px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-3 transition-all duration-500 hover:-translate-y-2 hover:border-orange-400/40 sm:min-h-[310px] sm:rounded-[2rem] sm:p-6 lg:p-8"
      >

        {/* Glow */}
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-500/10 blur-[60px] sm:h-64 sm:w-64 sm:blur-[90px]" />

        {/* Bike Illustration */}
        <motion.div
          animate={{
            x: [0, 5, 0],
            rotate: [0, -2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-3 right-1 opacity-70 sm:bottom-5 sm:right-5 lg:right-10"
        >
          <Bike
            size={85}
            strokeWidth={1}
            className="text-orange-400/80 drop-shadow-[0_0_20px_rgba(249,115,22,0.35)] sm:h-[120px] sm:w-[120px] lg:h-[150px] lg:w-[150px]"
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10">

          {/* Icon */}
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-orange-500/15 sm:h-12 sm:w-12 sm:rounded-2xl">
            <Bike
              size={18}
              className="text-orange-400 sm:h-6 sm:w-6"
            />
          </div>

          {/* Label */}
          <p className="mt-4 text-[8px] font-black uppercase tracking-[0.15em] text-orange-400 sm:mt-6 sm:text-xs sm:tracking-widest">
            Two wheels
          </p>

          {/* Title */}
          <h3 className="mt-1 text-lg font-black text-white sm:mt-2 sm:text-3xl">
            Rent a Bike
          </h3>

          {/* Description */}
          <p className="mt-1 max-w-[180px] text-[10px] leading-4 text-white/50 sm:mt-2 sm:text-sm sm:leading-6">
            Easy city travel, quick pickups and fuel-friendly journeys.
          </p>

          {/* Button */}
          <div className="mt-4 flex items-center gap-1 text-[10px] font-black text-white sm:mt-6 sm:gap-2 sm:text-sm">
            Explore bikes

            <ArrowRight
              size={13}
              className="transition-transform group-hover:translate-x-2 sm:h-4 sm:w-4"
            />
          </div>

        </div>
      </Link>

      {/* ================= CAR ================= */}
      <Link
        to="/vehicles?type=car"
        className="group relative min-h-[245px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-3 transition-all duration-500 hover:-translate-y-2 hover:border-pink-400/40 sm:min-h-[310px] sm:rounded-[2rem] sm:p-6 lg:p-8"
      >

        {/* Glow */}
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-pink-500/10 blur-[60px] sm:h-64 sm:w-64 sm:blur-[90px]" />

        {/* Car Illustration */}
        <motion.div
          animate={{
            x: [0, -5, 0],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-3 right-1 opacity-70 sm:bottom-5 sm:right-5 lg:right-10"
        >
          <CarFront
            size={85}
            strokeWidth={1}
            className="text-pink-300/80 drop-shadow-[0_0_20px_rgba(244,114,182,0.35)] sm:h-[120px] sm:w-[120px] lg:h-[150px] lg:w-[150px]"
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10">

          {/* Icon */}
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-pink-500/15 sm:h-12 sm:w-12 sm:rounded-2xl">
            <CarFront
              size={18}
              className="text-pink-300 sm:h-6 sm:w-6"
            />
          </div>

          {/* Label */}
          <p className="mt-4 text-[8px] font-black uppercase tracking-[0.15em] text-pink-300 sm:mt-6 sm:text-xs sm:tracking-widest">
            Four wheels
          </p>

          {/* Title */}
          <h3 className="mt-1 text-lg font-black text-white sm:mt-2 sm:text-3xl">
            Rent a Car
          </h3>

          {/* Description */}
          <p className="mt-1 max-w-[180px] text-[10px] leading-4 text-white/50 sm:mt-2 sm:text-sm sm:leading-6">
            Comfortable rides for families, groups and longer journeys.
          </p>

          {/* Button */}
          <div className="mt-4 flex items-center gap-1 text-[10px] font-black text-white sm:mt-6 sm:gap-2 sm:text-sm">
            Explore cars

            <ArrowRight
              size={13}
              className="transition-transform group-hover:translate-x-2 sm:h-4 sm:w-4"
            />
          </div>

        </div>
      </Link>

    </div>
  </div>
</section>

      {/* =====================================================
          POPULAR RIDES
      ===================================================== */}

      <section className="container-x py-12 sm:py-16 lg:py-14">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          variants={fadeUp}
          className="mb-7 flex flex-col justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end"
        >

          <div className="min-w-0">

            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-orange-500 sm:text-xs">
              Our Fleet
            </p>

            <h2 className="mt-1 text-2xl font-black text-slate-950 sm:text-3xl lg:text-4xl">
              Popular rides
            </h2>

            <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
              Browse available vehicles and check their rental pricing.
            </p>

          </div>

          <Link
            to="/vehicles"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-xl border border-orange-100 bg-orange-50 px-4 py-2.5 text-xs font-black text-orange-600 transition-all hover:bg-orange-500 hover:text-white sm:rounded-2xl sm:px-5 sm:py-3 sm:text-sm"
          >
            View all vehicles

            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </motion.div>

        {featured.length > 0 ? (

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={staggerContainer}
            className="grid min-w-0 grid-cols-2 gap-2.5 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4"
          >

            {featured.map((v) => (

              <motion.div
                key={v.id}
                variants={fadeUp}
                whileHover={{
                  y: -5,
                }}
                className="min-w-0 w-full overflow-hidden"
              >
                <VehicleCard v={v} />
              </motion.div>

            ))}

          </motion.div>

        ) : (

          <div className="rounded-3xl border border-orange-100 bg-orange-50 p-8 text-center sm:p-10">

            <Bike
              size={35}
              className="mx-auto text-orange-400"
            />

            <h3 className="mt-3 text-lg font-black sm:text-xl">
              Vehicles coming soon
            </h3>

            <p className="mx-auto mt-2 max-w-sm text-xs leading-relaxed text-slate-500 sm:text-sm">
              Our rental fleet will appear here once vehicles
              are added.
            </p>

            <Link
              to="/vehicles"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-xs font-black text-white"
            >
              Browse Fleet
              <ArrowRight size={14} />
            </Link>

          </div>

        )}

      </section>

      {/* =====================================================
          BOOKING / ENQUIRY SECTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-pink-50 py-12 sm:py-16">

        <div className="container-x">

          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">

            {/* LEFT */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >

              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-orange-500 sm:text-xs">
                Booking enquiry
              </p>

              <h2 className="mt-2 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
                Ready to book your{" "}
                <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  next ride?
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
                Select your vehicle, rental dates, pickup and
                drop location, then send your details to our team.
                We will check availability and confirm your booking.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-3">

                <div className="rounded-2xl border border-orange-100 bg-white p-4">
                  <CalendarDays
                    size={20}
                    className="text-orange-500"
                  />
                  <p className="mt-2 text-xs font-black text-slate-900">
                    Choose dates
                  </p>
                </div>

                <div className="rounded-2xl border border-orange-100 bg-white p-4">
                  <MapPin
                    size={20}
                    className="text-orange-500"
                  />
                  <p className="mt-2 text-xs font-black text-slate-900">
                    Pickup location
                  </p>
                </div>

                <div className="rounded-2xl border border-orange-100 bg-white p-4">
                  <Users
                    size={20}
                    className="text-orange-500"
                  />
                  <p className="mt-2 text-xs font-black text-slate-900">
                    Customer details
                  </p>
                </div>

              </div>

            </motion.div>

            {/* RIGHT CARD */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="rounded-3xl border border-white bg-white p-5 shadow-xl sm:p-7"
            >

              <div className="flex items-center gap-3">

                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-100">
                  <FileText
                    size={22}
                    className="text-orange-500"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-black text-slate-950">
                    Send a booking enquiry
                  </h3>

                  <p className="text-xs text-slate-500">
                    Quick and easy vehicle request
                  </p>
                </div>

              </div>

              <div className="mt-5 space-y-3">

                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                  <Bike
                    size={17}
                    className="text-orange-500"
                  />

                  <span className="text-xs font-bold text-slate-600">
                    Select bike or car
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                  <CalendarDays
                    size={17}
                    className="text-orange-500"
                  />

                  <span className="text-xs font-bold text-slate-600">
                    Select pickup & return date
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                  <Clock
                    size={17}
                    className="text-orange-500"
                  />

                  <span className="text-xs font-bold text-slate-600">
                    Select pickup time
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                  <MapPin
                    size={17}
                    className="text-orange-500"
                  />

                  <span className="text-xs font-bold text-slate-600">
                    Add pickup & drop location
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                  <Users
                    size={17}
                    className="text-orange-500"
                  />

                  <span className="text-xs font-bold text-slate-600">
                    Enter customer details
                  </span>
                </div>

              </div>

              <Link
                to="/vehicles"
                className="group mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3.5 text-sm font-black text-white transition hover:bg-orange-500"
              >
                Start Booking

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

            </motion.div>

          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-slate-950 py-12 sm:py-16">

        <div className="absolute -left-20 top-0 h-48 w-48 rounded-full bg-orange-500/25 blur-[80px] sm:h-72 sm:w-72 sm:blur-[100px]" />

        <div className="absolute -right-20 bottom-0 h-48 w-48 rounded-full bg-pink-500/20 blur-[80px] sm:h-72 sm:w-72 sm:blur-[100px]" />

        <div className="container-x relative z-10">

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/20 via-white/5 to-pink-500/20 p-5 backdrop-blur-xl sm:rounded-[2rem] sm:p-10 lg:p-12">

            <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-10">

              <motion.div
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
              >

                <p className="text-[9px] font-black uppercase tracking-[0.16em] text-orange-300 sm:text-xs sm:tracking-widest">
                  Ready to ride?
                </p>

                <h2 className="mt-2 text-2xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                  Your next adventure{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                    starts here.
                  </span>
                </h2>

                <p className="mt-3 max-w-xl text-xs leading-5 text-white/60 sm:mt-5 sm:text-base sm:leading-7">
                  Browse our bikes and cars, check pricing and
                  availability, then send your booking enquiry.
                </p>

              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="grid grid-cols-2 gap-2.5 sm:flex sm:justify-end sm:gap-3"
              >

                <Link
                  to="/vehicles"
                  className="group flex items-center justify-center gap-1.5 rounded-xl bg-white px-4 py-3 text-xs font-black text-orange-600 transition-all hover:-translate-y-1 hover:shadow-xl sm:rounded-2xl sm:px-7 sm:py-4 sm:text-sm"
                >
                  Browse Fleet

                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4"
                  />
                </Link>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs font-black text-white backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/20 sm:rounded-2xl sm:px-7 sm:py-4 sm:text-sm"
                >
                  <MessageCircle
                    size={15}
                  />

                  WhatsApp
                </a>

              </motion.div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}