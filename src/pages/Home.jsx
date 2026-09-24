import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bike,
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
} from "lucide-react";

import { getStored } from "../utils";
import VehicleCard from "../components/VehicleCard";

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* =========================================================
   RENTAL STEPS
========================================================= */

const rentalSteps = [
  {
    number: "01",
    icon: Bike,
    title: "Choose Your Bike",
    description:
      "Browse our available bikes, compare the options and select the one that fits your trip.",
    color: "from-orange-500 to-amber-400",
  },
  {
    number: "02",
    icon: FileText,
    title: "Documents & Advance",
    description:
      "Submit the required documents and pay the booking advance to confirm your rental.",
    color: "from-amber-500 to-yellow-400",
  },
  {
    number: "03",
    icon: Route,
    title: "Take the Bike & Ride",
    description:
      "Collect your bike from the pickup point and enjoy your trip with complete freedom.",
    color: "from-orange-500 to-pink-500",
  },
  {
    number: "04",
    icon: KeyRound,
    title: "Handover the Bike",
    description:
      "Return the bike at the agreed time and complete the simple handover process.",
    color: "from-pink-500 to-orange-500",
  },
];

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

      <section className="relative min-h-[700px] overflow-hidden bg-slate-950 sm:min-h-[720px] lg:min-h-[680px]">

        {/* Background Video */}

        <motion.video
          autoPlay
          muted
          loop
          playsInline
          initial={{ scale: 1.04 }}
          animate={{
            scale: [1.04, 1, 1.025],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="/videos/rental-hero.mp4"
            type="video/mp4"
          />
        </motion.video>

        {/* Overlays */}

        <div className="absolute inset-0 bg-slate-950/20" />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/20 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/10" />

        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/10 via-transparent to-pink-950/10" />

        {/* Orange Glow */}

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.18, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-40 top-0 h-[300px] w-[300px] rounded-full bg-orange-500/20 blur-[100px] sm:h-[400px] sm:w-[400px]"
        />

        {/* Pink Glow */}

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
            opacity: [0.06, 0.14, 0.06],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-40 bottom-10 h-[320px] w-[320px] rounded-full bg-pink-500/15 blur-[110px] sm:h-[420px] sm:w-[420px]"
        />

        {/* Light Streak */}

        <motion.div
          animate={{
            x: ["-30%", "130%"],
            opacity: [0, 0.25, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="pointer-events-none absolute left-0 top-[32%] h-px w-[35%] bg-gradient-to-r from-transparent via-orange-300/40 to-transparent blur-sm"
        />

        <motion.div
          animate={{
            x: ["120%", "-30%"],
            opacity: [0, 0.2, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="pointer-events-none absolute right-0 top-[58%] h-px w-[30%] bg-gradient-to-r from-transparent via-pink-300/30 to-transparent blur-sm"
        />

        {/* Rotating Circle */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute right-[6%] top-[15%] hidden h-52 w-52 rounded-full border border-white/10 lg:block"
        >
          <div className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-orange-400 shadow-lg shadow-orange-400/60" />
        </motion.div>

        {/* =================================================
            HERO CONTENT
        ================================================== */}

        <div className="relative z-10 flex min-h-[700px] items-center px-5 sm:min-h-[720px] sm:px-8 lg:min-h-[680px] lg:px-12 xl:px-16">

          <div className="w-full max-w-3xl py-12 sm:py-16 lg:max-w-4xl lg:py-12">

            {/* Badge */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
              }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[9px] font-black uppercase tracking-[0.12em] text-orange-200 backdrop-blur-md sm:mb-6 sm:px-5 sm:py-2.5 sm:text-xs sm:tracking-[0.15em]"
            >
              <motion.span
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles
                  size={14}
                  className="text-orange-300"
                />
              </motion.span>

              Fast · Flexible · Friendly Rentals
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-4xl text-[40px] font-black leading-[0.94] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[78px]"
            >
              Your journey.
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
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="inline-block bg-gradient-to-r from-orange-400 via-amber-300 to-pink-400 bg-[length:200%_200%] bg-clip-text text-transparent"
              >
                Your ride.
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
                duration: 0.7,
                delay: 0.4,
              }}
              className="mt-5 max-w-xl text-sm leading-6 text-white/75 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg lg:leading-8"
            >
              Rent premium bikes and cars by the hour or day.
              Choose your vehicle, complete a simple booking
              process and hit the road without the hassle.
            </motion.p>

            {/* Buttons */}

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
              className="mt-6 grid grid-cols-2 gap-3 sm:mt-7 sm:flex"
            >

              <Link
                to="/vehicles?type=bike"
                className="group relative flex items-center justify-center gap-1.5 overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 px-3 py-3.5 text-xs font-black text-white shadow-xl shadow-orange-950/30 transition-all duration-300 hover:-translate-y-1 sm:gap-2 sm:rounded-2xl sm:px-7 sm:py-4 sm:text-sm"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{
                    x: "-100%",
                  }}
                  animate={{
                    x: "100%",
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                />

                <Bike
                  size={17}
                  className="relative z-10"
                />

                <span className="relative z-10">
                  Rent a Bike
                </span>

                <ArrowRight
                  size={16}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/vehicles?type=car"
                className="group flex items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-3 py-3.5 text-xs font-black text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 sm:gap-2 sm:rounded-2xl sm:px-7 sm:py-4 sm:text-sm"
              >
                <CarFront size={17} />

                <span>
                  Rent a Car
                </span>

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </motion.div>

            {/* Trust Points */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.75,
                  },
                },
              }}
              className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 text-[11px] font-bold text-white/75 sm:mt-7 sm:flex sm:flex-wrap sm:gap-x-7 sm:text-sm"
            >
              {[
                {
                  icon: CheckCircle2,
                  text: "Clean vehicles",
                  color: "text-emerald-400",
                },
                {
                  icon: ShieldCheck,
                  text: "Transparent pricing",
                  color: "text-orange-400",
                },
                {
                  icon: Headphones,
                  text: "Human support",
                  color: "text-amber-300",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.span
                    key={item.text}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -15,
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                      },
                    }}
                    className="flex items-center gap-1.5"
                  >
                    <motion.span
                      animate={{
                        scale: [1, 1.12, 1],
                      }}
                      transition={{
                        duration: 2,
                        delay: index * 0.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Icon
                        size={15}
                        className={item.color}
                      />
                    </motion.span>

                    {item.text}
                  </motion.span>
                );
              })}
            </motion.div>

          </div>
        </div>

        {/* Scroll Indicator */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 xl:flex"
        >
          <span>
            Scroll to explore
          </span>

          <motion.div
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-6 w-px bg-gradient-to-b from-white/60 to-transparent"
          />
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
          HOW TO RENT
      ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-pink-50 py-12 sm:py-16 lg:py-10">

  {/* Background Decorations */}

  <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-orange-200/30 blur-[100px]" />

  <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-pink-200/30 blur-[100px]" />


  <div className="container-x relative">

    {/* =====================================================
        HEADING
    ===================================================== */}

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

      <div className="mx-auto mb-3 inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.15em] text-orange-600 sm:mb-4 sm:gap-2 sm:px-4 sm:py-2 sm:text-xs sm:tracking-widest">

        <Sparkles size={11} className="sm:h-[13px] sm:w-[13px]" />

        Simple Process

      </div>


      <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">

        How to rent your{" "}

        <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
          ride
        </span>

      </h2>


      <p className="mx-auto mt-2 max-w-lg text-[11px] leading-5 text-slate-500 sm:mt-4 sm:text-base sm:leading-7">
        Four simple steps from choosing your bike to
        completing your journey.
      </p>

    </motion.div>


    {/* =====================================================
        STEPS
    ===================================================== */}

    <div className="relative mt-9 sm:mt-14 lg:mt-20">

      {/* Desktop / Horizontal Connecting Line */}

      <div className="absolute left-[12.5%] right-[12.5%] top-11 h-0.5 rounded-full bg-gradient-to-r from-orange-300 via-amber-300 to-pink-300 sm:top-14 lg:top-16" />

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
          ease: "easeInOut",
        }}
        className="absolute left-[12.5%] right-[12.5%] top-11 h-0.5 origin-left rounded-full bg-gradient-to-r from-orange-500 via-amber-400 to-pink-500 sm:top-14 lg:top-16"
      />


      {/* =====================================================
          4 STEPS - SINGLE ROW ON ALL SCREENS
      ===================================================== */}

      <div className="grid grid-cols-4 gap-1.5 sm:gap-4 lg:gap-5">

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
                amount: 0.2,
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.6,
              }}
              className="relative min-w-0"
            >

              {/* =================================================
                  ICON
              ================================================= */}

              <motion.div
                whileHover={{
                  scale: 1.06,
                  rotate: -2,
                }}
                className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md sm:h-24 sm:w-24 lg:h-32 lg:w-32 lg:shadow-lg"
              >

                <div
                  className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${step.color} text-white shadow-md sm:h-14 sm:w-14 sm:rounded-2xl lg:h-20 lg:w-20 lg:rounded-3xl lg:shadow-lg`}
                >

                  <Icon
                    size={19}
                    className="sm:h-6 sm:w-6 lg:h-8 lg:w-8"
                  />

                </div>


                {/* Number */}

                <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full border-2 border-white bg-slate-950 text-[7px] font-black text-white sm:h-7 sm:w-7 sm:text-[9px] lg:h-8 lg:w-8 lg:text-[10px]">
                  {index + 1}
                </span>

              </motion.div>


              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="mt-3 text-center sm:mt-5">

                <p className="text-[6px] font-black tracking-[0.12em] text-orange-500 sm:text-[9px] sm:tracking-widest lg:text-[10px]">
                  STEP {step.number}
                </p>


                <h3 className="mt-1 text-[9px] font-black leading-3 text-slate-900 sm:mt-1.5 sm:text-sm sm:leading-5 lg:text-xl">
                  {step.title}
                </h3>


                <p className="mx-auto mt-1 max-w-[75px] text-[7px] leading-3 text-slate-500 sm:mt-2 sm:max-w-[160px] sm:text-[10px] sm:leading-5 lg:max-w-[210px] lg:text-sm lg:leading-6">
                  {step.description}
                </p>

              </div>

            </motion.div>
          );
        })}

      </div>

    </div>

  </div>

</section>


      {/* =====================================================
          FEATURE CARDS
      ===================================================== */}

     <section className="container-x py-8 sm:py-16 lg:py-10">

  {/* =====================================================
      SECTION HEADING
  ===================================================== */}

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    className="mb-7 text-center sm:mb-10"
  >

    <p className="text-[9px] font-black uppercase tracking-[0.18em] text-orange-500 sm:text-xs sm:tracking-widest">
      Why Choose Us
    </p>

    <h2 className="mt-1.5 text-2xl font-black leading-tight text-slate-950 sm:mt-2 sm:text-3xl lg:text-4xl">
      Everything you need for a better ride
    </h2>

    <p className="mx-auto mt-2 max-w-2xl text-[11px] leading-relaxed text-slate-500 sm:mt-3 sm:text-sm lg:text-base">
      Simple booking, flexible rentals and reliable service
      to make every journey comfortable.
    </p>

  </motion.div>


  {/* =====================================================
      FEATURE CARDS
  ===================================================== */}

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={staggerContainer}
    className="grid grid-cols-3 gap-2.5 sm:grid-cols-2 sm:gap-5 md:grid-cols-3"
  >

    {[
      {
        icon: MapPin,
        title: "Easy Pickup",
        text: "Convenient pickup options around Coimbatore and Pollachi.",
        gradient: "from-orange-500 to-amber-400",
      },
      {
        icon: Clock3,
        title: "Flexible Rentals",
        text: "Choose hourly or daily rentals based on your travel plan.",
        gradient: "from-amber-500 to-yellow-400",
      },
      {
        icon: ShieldCheck,
        title: "Simple & Secure",
        text: "Transparent pricing and a straightforward rental process.",
        gradient: "from-pink-500 to-orange-500",
      },
    ].map((item) => {

      const Icon = item.icon;

      return (
        <motion.div
          key={item.title}
          variants={fadeUp}
          whileHover={{
            y: -6,
          }}
          className="group min-w-0 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm transition-all duration-300 hover:shadow-xl sm:rounded-3xl sm:p-6 lg:p-7"
        >

          {/* Icon */}
          <div
            className={`grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br ${item.gradient} text-white shadow-md sm:h-14 sm:w-14 sm:rounded-2xl sm:shadow-lg`}
          >
            <Icon
              size={17}
              className="sm:h-6 sm:w-6"
            />
          </div>


          {/* Title */}
          <h3 className="mt-3 text-[11px] font-black leading-4 text-slate-900 sm:mt-5 sm:text-lg lg:text-xl">
            {item.title}
          </h3>


          {/* Description */}
          <p className="mt-1.5 text-[9px] leading-3.5 text-slate-500 sm:mt-2 sm:text-sm sm:leading-6">
            {item.text}
          </p>


          {/* Learn More */}
          <div className="mt-2.5 flex items-center gap-0.5 text-[8px] font-black text-orange-500 sm:mt-5 sm:gap-2 sm:text-sm">

            Learn more

            <ChevronRight
              size={11}
              className="transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4"
            />

          </div>

        </motion.div>
      );
    })}

  </motion.div>

</section>


      {/* =====================================================
          POPULAR RIDES
      ===================================================== */}

    <section className="container-x py-10 sm:py-14 lg:py-10">

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    className="mb-6 flex flex-col justify-between gap-3 sm:mb-10 sm:flex-row sm:items-end"
  >

    <div className="min-w-0">

      <p className="text-[9px] font-black uppercase tracking-[0.18em] text-orange-500 sm:text-xs sm:tracking-widest">
        Our Fleet
      </p>

      <h2 className="mt-1 text-xl font-black leading-tight text-slate-950 sm:mt-1.5 sm:text-3xl lg:text-4xl">
        Popular rides
      </h2>

      <p className="mt-1 text-[11px] leading-relaxed text-slate-500 sm:mt-1.5 sm:text-sm">
        Pick a ride that fits your trip and budget.
      </p>

    </div>

    <Link
      to="/vehicles"
      className="group inline-flex w-fit shrink-0 items-center gap-1.5 rounded-lg border border-orange-100 bg-orange-50 px-3 py-2 text-[10px] font-black text-orange-600 transition-all hover:bg-orange-500 hover:text-white sm:gap-2 sm:rounded-2xl sm:px-5 sm:py-3 sm:text-sm"
    >
      View all vehicles

      <ArrowRight
        size={13}
        className="shrink-0 transition-transform group-hover:translate-x-1 sm:h-[15px] sm:w-[15px]"
      />
    </Link>

  </motion.div>

  {featured.length > 0 ? (

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="grid min-w-0 grid-cols-2 gap-2 sm:gap-5 md:grid-cols-2 lg:grid-cols-4"
    >

      {featured.map((v) => (

        <motion.div
          key={v.id}
          variants={fadeUp}
          whileHover={{
            y: -5,
          }}
          transition={{
            duration: 0.25,
          }}
          className="min-w-0 w-full overflow-hidden"
        >

          <div className="w-full min-w-0">
            <VehicleCard v={v} />
          </div>

        </motion.div>

      ))}

    </motion.div>

  ) : (

    <div className="rounded-2xl border border-orange-100 bg-orange-50 p-6 text-center sm:rounded-3xl sm:p-10">

      <Bike
        size={32}
        className="mx-auto text-orange-400 sm:h-9 sm:w-9"
      />

      <h3 className="mt-2.5 text-base font-black sm:mt-4 sm:text-xl">
        Vehicles coming soon
      </h3>

      <p className="mx-auto mt-1.5 max-w-sm text-[11px] leading-relaxed text-slate-500 sm:mt-2 sm:text-sm">
        Our rental fleet will appear here once vehicles are added.
      </p>

    </div>

  )}

</section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

     <section className="relative overflow-hidden bg-slate-950 py-5 sm:py-16 lg:py-17">

  {/* Gradient Glows */}

  <div className="absolute -left-20 top-0 h-48 w-48 rounded-full bg-orange-500/25 blur-[80px] sm:h-72 sm:w-72 sm:blur-[100px]" />

  <div className="absolute -right-20 bottom-0 h-48 w-48 rounded-full bg-pink-500/20 blur-[80px] sm:h-72 sm:w-72 sm:blur-[100px]" />


  <div className="container-x relative z-10">

    <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-orange-500/20 via-white/5 to-pink-500/20 p-3.5 backdrop-blur-xl sm:rounded-[2rem] sm:p-10 lg:p-12">

      <div className="grid gap-4 lg:grid-cols-2 lg:items-center lg:gap-10">

        {/* =================================================
            TEXT
        ================================================== */}

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

          <h2 className="mt-1 text-xl font-black leading-tight text-white sm:mt-2 sm:text-4xl lg:text-5xl">
            Your next adventure{" "}
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              starts here.
            </span>
          </h2>

          <p className="mt-2 max-w-xl text-[11px] leading-5 text-white/60 sm:mt-5 sm:text-base sm:leading-7">
            Tell us your dates, pickup point and preferred
            vehicle. We'll check availability and help you
            get on the road.
          </p>

        </motion.div>


        {/* =================================================
            BUTTONS
        ================================================== */}

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
          className="grid grid-cols-2 gap-2 sm:flex sm:gap-3 lg:justify-end"
        >

          {/* Browse Fleet */}

          <Link
            to="/vehicles"
            className="group flex min-w-0 items-center justify-center gap-1 rounded-lg bg-white px-2 py-2.5 text-[10px] font-black text-orange-600 transition-all hover:-translate-y-1 hover:shadow-xl sm:gap-2 sm:rounded-2xl sm:px-7 sm:py-4 sm:text-sm"
          >
            <span className="truncate">
              Browse Fleet
            </span>

            <ArrowRight
              size={13}
              className="shrink-0 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4"
            />
          </Link>


          {/* WhatsApp */}

          <a
            href="https://wa.me/919876543210"
            className="flex min-w-0 items-center justify-center gap-1 rounded-lg border border-white/20 bg-white/10 px-2 py-2.5 text-[10px] font-black text-white backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/20 sm:gap-2 sm:rounded-2xl sm:px-7 sm:py-4 sm:text-sm"
          >
            <Phone
              size={13}
              className="shrink-0 sm:h-4 sm:w-4"
            />

            <span className="truncate">
              WhatsApp
            </span>
          </a>

        </motion.div>

      </div>

    </div>

  </div>

</section>
    </div>
  );
}