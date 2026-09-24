import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Fuel,
  Gauge,
  MapPin,
  Users,
  ShieldCheck,
  Clock3,
} from "lucide-react";

import { getStored, money } from "../utils";

export default function VehicleDetails() {
  const { id } = useParams();

  const v = getStored("od_vehicles", []).find(
    (x) => x.id === id
  );

  // =========================================================
  // VEHICLE NOT FOUND
  // =========================================================

  if (!v) {
    return (
      <section className="container-x py-16 sm:py-24">
        <div className="mx-auto max-w-lg rounded-3xl border border-orange-100 bg-orange-50 p-7 text-center sm:p-10">

          <h1 className="text-2xl font-black text-slate-950 sm:text-3xl">
            Vehicle not found
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            The vehicle you are looking for is no longer available.
          </p>

          <Link
            to="/vehicles"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-black text-white transition-all hover:bg-orange-600 sm:rounded-2xl"
          >
            <ArrowLeft size={16} />
            Back to vehicles
          </Link>

        </div>
      </section>
    );
  }

  // =========================================================
  // SPECIFICATIONS
  // =========================================================

  const specifications = [
    {
      icon: Users,
      label: "Seats",
      value: `${v.seats} seats`,
    },
    {
      icon: Gauge,
      label: "Transmission",
      value: v.transmission,
    },
    {
      icon: Fuel,
      label: "Fuel",
      value: v.fuel,
    },
    {
      icon: MapPin,
      label: "Location",
      value: v.location,
    },
  ];

  return (
    <section className="container-x min-w-0 py-7 sm:py-10 lg:py-14">

      {/* =====================================================
          BACK TO FLEET
      ===================================================== */}

      <Link
        to="/vehicles"
        className="mb-5 inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 transition-colors hover:text-orange-600 sm:mb-7 sm:gap-2 sm:text-sm"
      >
        <ArrowLeft
          size={15}
          className="sm:h-[17px] sm:w-[17px]"
        />
        Back to fleet
      </Link>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="grid min-w-0 gap-6 lg:grid-cols-2 lg:gap-10 xl:gap-12">

        {/* ===================================================
            VEHICLE IMAGE
        =================================================== */}

        <div className="min-w-0 overflow-hidden rounded-[1.5rem] border border-orange-100 bg-white shadow-soft sm:rounded-[2rem]">

          <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-auto lg:min-h-[560px]">

            <img
              src={v.imageUrl}
              alt={v.name}
              className="absolute inset-0 h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/1200x800/f97316/ffffff?text=Vehicle";
              }}
            />

            {/* Image overlay */}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent sm:h-32" />

          </div>

        </div>

        {/* ===================================================
            VEHICLE INFORMATION
        =================================================== */}

        <div className="min-w-0 lg:py-2">

          {/* Tags */}

          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">

            <span className="rounded-full bg-orange-100 px-2.5 py-1 text-[9px] font-black uppercase text-orange-700 sm:px-3 sm:text-xs">
              {v.type}
            </span>

            <span
              className={`rounded-full px-2.5 py-1 text-[9px] font-black sm:px-3 sm:text-xs ${
                v.available
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-rose-100 text-rose-700"
              }`}
            >
              {v.available ? "Available" : "Unavailable"}
            </span>

          </div>

          {/* Brand / Category */}

          <p className="mt-4 text-[9px] font-black uppercase tracking-[0.16em] text-orange-500 sm:mt-5 sm:text-xs sm:tracking-widest">
            {v.brand} · {v.category}
          </p>

          {/* Vehicle Name */}

          <h1 className="mt-1.5 break-words text-3xl font-black leading-tight tracking-tight text-slate-950 sm:mt-2 sm:text-4xl lg:text-5xl">
            {v.name}
          </h1>

          {/* Description */}

          <p className="mt-3 break-words text-xs leading-6 text-slate-600 sm:mt-5 sm:text-sm sm:leading-7 lg:text-base">
            {v.description}
          </p>

          {/* =================================================
              SPECIFICATIONS
          ================================================= */}

          <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-7 sm:grid-cols-4 sm:gap-3">

            {specifications.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="min-w-0 overflow-hidden rounded-xl border border-orange-100 bg-orange-50 p-3 sm:rounded-2xl sm:p-4"
                >

                  <Icon
                    size={17}
                    className="text-orange-500 sm:h-[19px] sm:w-[19px]"
                  />

                  <span className="mt-1.5 block truncate text-[9px] font-bold text-slate-500 sm:mt-2 sm:text-xs">
                    {item.value}
                  </span>

                </div>
              );
            })}

          </div>

          {/* =================================================
              PRICING CARD
          ================================================= */}

          <div className="mt-5 rounded-2xl bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 p-4 text-white shadow-lg shadow-orange-100 sm:mt-7 sm:rounded-3xl sm:p-6">

            <div className="flex items-center justify-between gap-4">

              <div className="min-w-0">

                <span className="text-[10px] text-orange-100 sm:text-sm">
                  Rental from
                </span>

                <div className="mt-0.5 text-2xl font-black sm:text-3xl">

                  {money(v.pricePerDay)}

                  <small className="ml-1 text-[10px] font-bold text-orange-100 sm:text-sm">
                    / day
                  </small>

                </div>

                <div className="mt-0.5 text-[10px] text-orange-100 sm:mt-1 sm:text-sm">
                  {money(v.pricePerHour)} / hour
                </div>

              </div>

              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15 sm:h-14 sm:w-14 sm:rounded-2xl">

                <Clock3
                  size={22}
                  className="sm:h-7 sm:w-7"
                />

              </div>

            </div>

            {/* Booking Button */}

            <Link
              to={v.available ? `/booking/${v.id}` : "#"}
              className={`mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-black text-orange-600 transition-all hover:bg-orange-50 sm:mt-5 sm:rounded-2xl sm:px-5 sm:py-3 sm:text-sm ${
                !v.available
                  ? "pointer-events-none opacity-50"
                  : ""
              }`}
            >
              {v.available
                ? "Start enquiry"
                : "Currently unavailable"}

              {v.available && (
                <ArrowRight
                  size={15}
                  className="sm:h-[18px] sm:w-[18px]"
                />
              )}
            </Link>

          </div>

          {/* =================================================
              SECURITY MESSAGE
          ================================================= */}

          <div className="mt-4 flex items-start gap-2 text-[9px] font-bold leading-4 text-slate-500 sm:mt-5 sm:gap-3 sm:text-xs sm:leading-5">

            <ShieldCheck
              className="mt-0.5 shrink-0 text-emerald-500"
              size={16}
            />

            <span>
              Availability is confirmed by our rental team
              before final booking.
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}