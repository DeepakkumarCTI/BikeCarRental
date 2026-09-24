import { Link } from "react-router-dom";
import {
  ArrowRight,
  Fuel,
  Gauge,
  MapPin,
  Users,
  CheckCircle2,
} from "lucide-react";
import { money } from "../utils";

export default function VehicleCard({ v }) {
  return (
    <article className="group min-w-0 w-full overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-soft transition hover:-translate-y-1 sm:rounded-3xl">

      {/* =====================================================
          IMAGE
      ====================================================== */}

      <Link
        to={`/vehicles/${v.id}`}
        className="relative block aspect-[16/10] min-w-0 overflow-hidden bg-orange-50"
      >
        <img
          src={v.imageUrl}
          alt={v.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/900x560/f97316/ffffff?text=Vehicle";
          }}
        />

        {/* Available Badge */}

        <span
          className={`absolute left-2 top-2 rounded-full px-2 py-1 text-[9px] font-black sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-xs ${
            v.available
              ? "bg-emerald-100 text-emerald-700"
              : "bg-rose-100 text-rose-700"
          }`}
        >
          {v.available ? "Available" : "Booked / Unavailable"}
        </span>

        {/* Vehicle Type */}

        <span className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[9px] font-black capitalize text-slate-700 sm:right-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-xs">
          {v.type}
        </span>
      </Link>

      {/* =====================================================
          CARD CONTENT
      ====================================================== */}

      <div className="min-w-0 p-3 sm:p-5">

        {/* =================================================
            BRAND + NAME + PRICE
        ================================================== */}

        <div className="flex min-w-0 items-start justify-between gap-2 sm:gap-3">

          {/* Vehicle Name */}

          <div className="min-w-0 flex-1">

            <p className="truncate text-[9px] font-black uppercase tracking-wide text-orange-500 sm:text-xs sm:tracking-wider">
              {v.brand} · {v.category}
            </p>

            <h3 className="mt-1 break-words text-[15px] font-black leading-5 text-slate-900 sm:text-lg sm:leading-normal">
              {v.name}
            </h3>

          </div>

          {/* Price */}

          <div className="min-w-0 shrink-0 text-right">

            <b className="block whitespace-nowrap text-[17px] font-black leading-5 text-orange-600 sm:text-xl">
              {money(v.pricePerDay)}
            </b>

            <div className="text-[9px] text-slate-400 sm:text-xs">
              / day
            </div>

          </div>

        </div>


        {/* =================================================
            SPECIFICATIONS
        ================================================== */}

        <div className="mt-4 grid min-w-0 grid-cols-2 gap-x-2 gap-y-2 text-[10px] font-semibold text-slate-500 sm:mt-5 sm:gap-2 sm:text-xs">

          {/* Seats */}

          <span className="flex min-w-0 items-center gap-1.5 overflow-hidden sm:gap-2">
            <Users
              size={14}
              className="shrink-0 sm:h-[15px] sm:w-[15px]"
            />

            <span className="truncate">
              {v.seats} seats
            </span>
          </span>


          {/* Transmission */}

          <span className="flex min-w-0 items-center gap-1.5 overflow-hidden sm:gap-2">
            <Gauge
              size={14}
              className="shrink-0 sm:h-[15px] sm:w-[15px]"
            />

            <span className="truncate">
              {v.transmission}
            </span>
          </span>


          {/* Fuel */}

          <span className="flex min-w-0 items-center gap-1.5 overflow-hidden sm:gap-2">
            <Fuel
              size={14}
              className="shrink-0 sm:h-[15px] sm:w-[15px]"
            />

            <span className="truncate">
              {v.fuel}
            </span>
          </span>


          {/* Location */}

          <span className="flex min-w-0 items-center gap-1.5 overflow-hidden sm:gap-2">
            <MapPin
              size={14}
              className="shrink-0 sm:h-[15px] sm:w-[15px]"
            />

            <span className="truncate">
              {v.location}
            </span>
          </span>

        </div>


        {/* =================================================
            ACTION BUTTONS
        ================================================== */}

        <div className="mt-4 grid min-w-0 grid-cols-2 gap-2 sm:mt-5 sm:flex">

          {/* View Details */}

          <Link
            to={`/vehicles/${v.id}`}
            className="btn-secondary flex min-w-0 w-full items-center justify-center overflow-hidden whitespace-nowrap px-2 py-2 text-[10px] sm:flex-1 sm:px-4 sm:py-2.5 sm:text-sm"
          >
            <span className="truncate">
              View details
            </span>
          </Link>


          {/* Enquire */}

          <Link
            to={
              v.available
                ? `/booking/${v.id}`
                : "#"
            }
            className={`btn-primary flex min-w-0 w-full items-center justify-center gap-1 overflow-hidden whitespace-nowrap px-2 py-2 text-[10px] sm:flex-1 sm:px-4 sm:py-2.5 sm:text-sm ${
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
    </article>
  );
}