import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";

import { ArrowRight } from "lucide-react";

import VehicleCard from "../components/VehicleCard";
import { getStored } from "../utils";

export default function Vehicles() {
  const [params] = useSearchParams();

  const [type, setType] = useState(
    params.get("type") || "all"
  );

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [location, setLocation] = useState("all");
  const [onlyAvailable, setOnlyAvailable] = useState(false);


  const vehicles = getStored("od_vehicles", []);

  const categories = [
    ...new Set(
      vehicles
        .map((v) => v.category)
        .filter(Boolean)
    ),
  ];

  const locations = [
    ...new Set(
      vehicles
        .map((v) => v.location)
        .filter(Boolean)
    ),
  ];

  const filtered = useMemo(() => {
    return vehicles.filter((v) => {
      const matchesType =
        type === "all" || v.type === type;

      const matchesCategory =
        category === "all" ||
        v.category === category;

      const matchesLocation =
        location === "all" ||
        v.location === location;

      const matchesAvailability =
        !onlyAvailable || v.available;

      const searchText =
        `${v.name || ""} ${v.brand || ""} ${v.category || ""}`.toLowerCase();

      const matchesSearch =
        searchText.includes(query.toLowerCase());

      return (
        matchesType &&
        matchesCategory &&
        matchesLocation &&
        matchesAvailability &&
        matchesSearch
      );
    });
  }, [
    vehicles,
    type,
    category,
    location,
    onlyAvailable,
    query,
  ]);

  const reset = () => {
    setType("all");
    setCategory("all");
    setLocation("all");
    setOnlyAvailable(false);
    setQuery("");
  };

  return (
    <div>
      <section className="w-full min-w-0 px-2 py-6 sm:px-4 sm:py-12 lg:px-5 lg:py-16">

  {/* =====================================================
      HEADER + FILTER AREA
  ====================================================== */}
  <div className="w-full min-w-0 overflow-hidden rounded-none bg-gradient-to-br from-orange-100 via-white to-amber-50 px-3 py-4 shadow-sm sm:rounded-[2rem] sm:px-7 sm:py-7 md:px-9 md:py-9 lg:px-10 lg:py-10">

    {/* Heading */}
    <div className="max-w-3xl">
      <p className="text-[9px] font-black uppercase tracking-[0.18em] text-orange-500 sm:text-xs sm:tracking-widest">
        Our fleet
      </p>

      <h1 className="mt-1.5 text-2xl font-black leading-tight text-slate-950 sm:mt-2 sm:text-4xl lg:text-5xl">
        Find your ride
      </h1>

      <p className="mt-2 max-w-2xl text-[11px] leading-relaxed text-slate-600 sm:mt-3 sm:text-sm lg:text-base">
        Compare bikes and cars by category,
        location, features and rental price.
      </p>
    </div>

    {/* =====================================================
        FILTERS
    ====================================================== */}
    <div className="mt-5 grid min-w-0 grid-cols-2 gap-2.5 sm:mt-7 sm:gap-3 lg:grid-cols-[1.5fr_repeat(3,1fr)_auto]">

      {/* Search */}
      <div className="relative col-span-2 min-w-0 lg:col-span-1">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 sm:left-4"
          size={16}
        />

        <input
          className="input h-10 w-full min-w-0 pl-9 text-xs sm:h-auto sm:pl-11 sm:text-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search vehicle..."
        />
      </div>


{/* Type */}
<select
  className="input h-10 min-w-0 w-full truncate appearance-none px-2 text-[10px] sm:h-auto sm:px-3 sm:text-sm"
  value={type}
  onChange={(e) => setType(e.target.value)}
>
  <option value="all">All types</option>
  <option value="bike">Bikes</option>
  <option value="car">Cars</option>
</select>

{/* Category */}
<select
  className="input h-10 min-w-0 w-full truncate appearance-none px-2 text-[10px] sm:h-auto sm:px-3 sm:text-sm"
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
  <option value="all">All categories</option>

  {categories.map((c) => (
    <option key={c} value={c}>
      {c}
    </option>
  ))}
</select>

{/* Location */}
<select
  className="input h-10 min-w-0 w-full truncate appearance-none px-2 text-[10px] sm:h-auto sm:px-3 sm:text-sm"
  value={location}
  onChange={(e) => setLocation(e.target.value)}
>
  <option value="all">All locations</option>

  {locations.map((c) => (
    <option key={c} value={c}>
      {c}
    </option>
  ))}
</select>



      {/* Availability */}
      <button
        type="button"
        onClick={() => setOnlyAvailable((value) => !value)}
        aria-label="Toggle available vehicles"
        className={`flex h-10 min-w-0 items-center justify-center rounded-xl px-3 transition-all sm:h-auto sm:rounded-2xl ${
          onlyAvailable
            ? "bg-emerald-500 text-white shadow-md shadow-emerald-200"
            : "border border-white bg-white text-slate-600 hover:bg-orange-50"
        }`}
      >
        <SlidersHorizontal size={17} />
      </button>
    </div>

    {/* =====================================================
        RESULT COUNT / ACTIVE FILTERS
    ====================================================== */}
    <div className="mt-4 flex min-w-0 flex-wrap items-center gap-2 sm:mt-5">

      <span className="text-[10px] font-bold text-slate-500 sm:text-sm">
        {filtered.length} vehicles found
      </span>

      {onlyAvailable && (
        <button
          type="button"
          onClick={() => setOnlyAvailable(false)}
          className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold text-emerald-700 sm:px-3 sm:text-xs"
        >
          Available only
          <X size={12} />
        </button>
      )}

      <button
        type="button"
        onClick={reset}
        className="ml-auto text-[10px] font-black text-orange-600 transition-colors hover:text-orange-700 sm:text-sm"
      >
        Reset filters
      </button>
    </div>
  </div>

  {/* =====================================================
      VEHICLE GRID
  ====================================================== */}
  {filtered.length > 0 ? (
    <div className="mt-6 grid w-full min-w-0 grid-cols-2 gap-2 px-0 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">

      {filtered.map((v) => (
        <div
          key={v.id}
          className="min-w-0 w-full overflow-hidden"
        >
          <VehicleCard v={v} />
        </div>
      ))}

    </div>
  ) : (

    /* =====================================================
        EMPTY STATE
    ====================================================== */
    <div className="mt-6 w-full rounded-none border border-orange-100 bg-orange-50/70 px-4 py-14 text-center sm:mt-8 sm:rounded-3xl sm:px-8 sm:py-20">

      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 sm:h-16 sm:w-16">
        <Search
          size={20}
          className="text-orange-500 sm:h-7 sm:w-7"
        />
      </div>

      <h3 className="mt-4 text-base font-black text-slate-950 sm:text-xl">
        No matching vehicles
      </h3>

      <p className="mx-auto mt-1.5 max-w-md text-[11px] leading-relaxed text-slate-500 sm:mt-2 sm:text-sm">
        Try another category or clear your filters.
      </p>

      <button
        type="button"
        onClick={reset}
        className="mt-5 rounded-xl bg-orange-500 px-4 py-2.5 text-xs font-black text-white shadow-lg shadow-orange-200 transition-all hover:bg-orange-600 sm:mt-6 sm:rounded-2xl sm:px-5 sm:py-3 sm:text-sm"
      >
        Clear filters
      </button>

    </div>
  )}
    </section>

{/* =====================================================
    FREQUENTLY ASKED QUESTIONS
====================================================== */}

    
    </div>
    
  );
}