
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Plus,
  Pencil,
  Trash2,
  LogOut,
  CarFront,
  Bike,
  ClipboardList,
  CheckCircle2,
  X,
  Save,
  Search,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Image as ImageIcon,
} from "lucide-react";

import {
  getStored,
  makeId,
  money,
  setStored,
} from "../utils";


const empty = {
  id: "",
  type: "bike",
  name: "",
  category: "",
  brand: "",
  pricePerDay: "",
  pricePerHour: "",
  fuel: "Petrol",
  transmission: "Manual",
  seats: 2,
  location: "Coimbatore",
  available: true,
  imageUrl: "",
  description: "",
};


/* =====================================================
   IMAGE HELPERS
===================================================== */

function normalizeImageUrl(url) {
  if (!url) return "";

  const value = String(url).trim();

  if (!value) return "";

  if (
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("data:image/")
  ) {
    return value;
  }

  if (value.startsWith("//")) {
    return `https:${value}`;
  }

  return `https://${value}`;
}


/* =====================================================
   MAIN DASHBOARD
===================================================== */

export default function AdminDashboard() {
  const nav = useNavigate();

  const [vehicles, setVehicles] = useState(() =>
    getStored("od_vehicles", [])
  );

  const [bookings, setBookings] = useState(() =>
    getStored("od_bookings", [])
  );

  const [tab, setTab] = useState("overview");
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState("");

  // Vehicle type filter
  const [vehicleFilter, setVehicleFilter] = useState("all");


  useEffect(() => {
    if (!getStored("od_admin_session", null)?.loggedIn) {
      nav("/admin/login");
    }
  }, [nav]);


  const saveVehicles = (v) => {
    setVehicles(v);
    setStored("od_vehicles", v);
  };


  const remove = (id) => {
    if (confirm("Delete this vehicle?")) {
      saveVehicles(
        vehicles.filter((v) => v.id !== id)
      );
    }
  };


  const logout = () => {
    localStorage.removeItem("od_admin_session");
    nav("/admin/login");
  };


  /*
    Vehicle filtering

    Search + selected type
  */
  const filtered = vehicles.filter((v) => {
    const matchesSearch =
      `${v.name} ${v.brand} ${v.category}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesType =
      vehicleFilter === "all" ||
      v.type?.toLowerCase() === vehicleFilter;

    return matchesSearch && matchesType;
  });


  /*
    Click from dashboard stat cards
  */
  const openVehicles = (type = "all") => {
    setVehicleFilter(type);
    setSearch("");
    setTab("vehicles");
  };


  const openBookings = () => {
    setTab("bookings");
  };


  const updateBooking = (id, status) => {
    const b = bookings.map((x) =>
      x.id === id
        ? { ...x, status }
        : x
    );

    setBookings(b);
    setStored("od_bookings", b);
  };


  return (
    <section className="w-full overflow-hidden px-2 py-5 sm:px-4 sm:py-8">

      {/* =========================
          HEADER
      ========================= */}

      <div className="mb-6 flex min-w-0 items-center justify-between gap-3">

        <div className="min-w-0 flex-1">

          <p className="truncate text-[10px] font-black uppercase tracking-widest text-orange-500 sm:text-xs">
            Management console
          </p>

          <h1 className="mt-1 truncate text-2xl font-black sm:text-4xl">
            Admin dashboard
          </h1>

          <p className="mt-1 truncate text-[11px] text-slate-500 sm:text-sm">
            Fleet, availability and enquiry management.
          </p>

        </div>


        <div className="flex shrink-0 gap-2">

          {/* WEBSITE BUTTON */}

          <Link
            to="/"
            className="btn-secondary flex items-center gap-1.5 px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm"
          >
            <ExternalLink size={15} />

            <span>
              Website
            </span>
          </Link>


          {/* LOGOUT */}

          <button
            onClick={logout}
            className="grid h-9 w-9 place-items-center rounded-xl bg-slate-100 text-slate-700 sm:h-11 sm:w-11"
            aria-label="Logout"
          >
            <LogOut size={16} />
          </button>

        </div>

      </div>


      {/* =========================
          STATS
      ========================= */}

      <div className="grid min-w-0 grid-cols-5 gap-2 sm:gap-4">

        {/* TOTAL VEHICLES */}

        <Stat
          icon={CarFront}
          label="Total vehicles"
          value={vehicles.length}
          onClick={() => openVehicles("all")}
        />


        {/* CARS */}

        <Stat
          icon={CarFront}
          label="Cars"
          value={
            vehicles.filter(
              (v) => v.type?.toLowerCase() === "car"
            ).length
          }
          onClick={() => openVehicles("car")}
        />


        {/* BIKES */}

        <Stat
          icon={Bike}
          label="Bikes"
          value={
            vehicles.filter(
              (v) => v.type?.toLowerCase() === "bike"
            ).length
          }
          onClick={() => openVehicles("bike")}
        />


        {/* AVAILABLE */}

        <Stat
          icon={CheckCircle2}
          label="Available"
          value={
            vehicles.filter(
              (v) => v.available
            ).length
          }
        />


        {/* ENQUIRIES */}

        <Stat
          icon={ClipboardList}
          label="Enquiries"
          value={bookings.length}
          onClick={openBookings}
        />

      </div>


      {/* =========================
          TABS
      ========================= */}

      <div className="mt-5 flex min-w-0 gap-1.5 overflow-x-auto rounded-2xl border border-orange-100 bg-white p-1.5 shadow-sm sm:mt-7 sm:gap-2 sm:rounded-3xl sm:p-2">

        {[
          ["overview", "Overview"],
          ["vehicles", "Vehicles"],
          ["bookings", "Enquiries"],
        ].map(([k, l]) => (

          <button
            key={k}
            onClick={() => setTab(k)}
            className={`shrink-0 rounded-xl px-3 py-2 text-[11px] font-black sm:rounded-2xl sm:px-5 sm:py-3 sm:text-sm ${
              tab === k
                ? "bg-orange-500 text-white"
                : "text-slate-600 hover:bg-orange-50"
            }`}
          >
            {l}
          </button>

        ))}

      </div>


      {/* =========================
          TAB CONTENT
      ========================= */}

      {tab === "overview" && (
        <Overview
          bookings={bookings}
          vehicles={vehicles}
          setTab={setTab}
        />
      )}


      {tab === "vehicles" && (
        <VehicleManager
          vehicles={filtered}
          allVehicles={vehicles}
          search={search}
          setSearch={setSearch}
          editing={editing}
          setEditing={setEditing}
          saveVehicles={saveVehicles}
          remove={remove}
          vehicleFilter={vehicleFilter}
          setVehicleFilter={setVehicleFilter}
        />
      )}


      {tab === "bookings" && (
        <Bookings
          bookings={bookings}
          updateBooking={updateBooking}
        />
      )}

    </section>
  );
}


/* =====================================================
   STAT
===================================================== */

function Stat({
  icon: I,
  label,
  value,
  onClick,
}) {
  const clickable = Boolean(onClick);

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!clickable}
      className={`group min-w-0 overflow-hidden rounded-2xl border border-orange-100 bg-white p-2.5 text-left shadow-sm transition-all sm:rounded-3xl sm:p-5 ${
        clickable
          ? "cursor-pointer hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100 active:scale-[0.98]"
          : "cursor-default"
      }`}
    >

      <div className="flex min-w-0 items-center justify-between gap-1">

        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-orange-50 text-orange-500 transition-all group-hover:bg-orange-100 sm:h-10 sm:w-10 sm:rounded-xl">

          <I
            size={14}
            className="sm:hidden"
          />

          <I
            size={19}
            className="hidden sm:block"
          />

        </span>

        <b className="truncate text-lg sm:text-3xl">
          {value}
        </b>

      </div>

      <p className="mt-2 truncate text-[9px] font-bold text-slate-500 sm:mt-4 sm:text-sm">
        {label}
      </p>

      {clickable && (
        <p className="mt-1 hidden text-[9px] font-bold text-orange-400 sm:block">
          Click to view →
        </p>
      )}

    </button>
  );
}


/* =====================================================
   OVERVIEW
===================================================== */

function Overview({
  bookings,
  vehicles,
  setTab,
}) {
  return (
    <div className="mt-5 grid min-w-0 grid-cols-2 gap-3 sm:mt-7 sm:gap-6">

      {/* RECENT ENQUIRIES */}

      <div className="card min-w-0 overflow-hidden p-3 sm:p-6">

        <div className="flex min-w-0 items-center justify-between gap-2">

          <h2 className="min-w-0 truncate text-sm font-black sm:text-xl">
            Recent enquiries
          </h2>

          <button
            onClick={() => setTab("bookings")}
            className="shrink-0 whitespace-nowrap text-[10px] font-bold text-orange-600 sm:text-sm"
          >
            View all
          </button>

        </div>


        <div className="mt-3 grid min-w-0 gap-2 sm:mt-5 sm:gap-3">

          {bookings
            .slice(0, 5)
            .map((b) => (

              <div
                key={b.id}
                className="min-w-0 overflow-hidden rounded-xl bg-orange-50 p-2.5 sm:rounded-2xl sm:p-4"
              >

                <div className="flex min-w-0 items-center justify-between gap-2">

                  <div className="min-w-0 flex-1">

                    <b className="block truncate text-[11px] sm:text-sm">
                      {b.name}
                    </b>

                    <p className="truncate text-[9px] text-slate-500 sm:text-xs">
                      {b.vehicleName} · {b.date} {b.time}
                    </p>

                  </div>

                  <span className="max-w-[35%] shrink-0 truncate text-[9px] font-black text-orange-600 sm:max-w-none sm:text-xs">
                    {b.status}
                  </span>

                </div>

              </div>

            ))}


          {!bookings.length && (
            <p className="py-8 text-center text-[10px] text-slate-500 sm:py-10 sm:text-sm">
              No enquiries yet.
            </p>
          )}

        </div>

      </div>


      {/* FLEET AVAILABILITY */}

      <div className="card min-w-0 overflow-hidden p-3 sm:p-6">

        <div className="flex min-w-0 items-center justify-between gap-2">

          <h2 className="min-w-0 truncate text-sm font-black sm:text-xl">
            Fleet availability
          </h2>

          <button
            onClick={() => setTab("vehicles")}
            className="shrink-0 whitespace-nowrap text-[10px] font-bold text-orange-600 sm:text-sm"
          >
            Manage
          </button>

        </div>


        <div className="mt-3 grid min-w-0 gap-3 sm:mt-5 sm:gap-4">

          {vehicles
            .slice(0, 6)
            .map((v) => (

              <div
                key={v.id}
                className="min-w-0 overflow-hidden"
              >

                <div className="flex min-w-0 justify-between gap-2 text-[10px] font-bold sm:text-sm">

                  <span className="min-w-0 truncate">
                    {v.name}
                  </span>

                  <span
                    className={`shrink-0 whitespace-nowrap ${
                      v.available
                        ? "text-emerald-600"
                        : "text-rose-600"
                    }`}
                  >
                    {v.available
                      ? "Available"
                      : "Unavailable"}
                  </span>

                </div>


                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100 sm:mt-2 sm:h-2">

                  <div
                    className={`h-full rounded-full ${
                      v.available
                        ? "bg-emerald-500"
                        : "bg-rose-400"
                    }`}
                    style={{
                      width: v.available
                        ? "100%"
                        : "25%",
                    }}
                  />

                </div>

              </div>

            ))}


          {!vehicles.length && (
            <p className="py-8 text-center text-[10px] text-slate-500 sm:py-10 sm:text-sm">
              No vehicles added yet.
            </p>
          )}

        </div>

      </div>

    </div>
  );
}


/* =====================================================
   VEHICLE MANAGER
===================================================== */

function VehicleManager({
  vehicles,
  allVehicles,
  search,
  setSearch,
  editing,
  setEditing,
  saveVehicles,
  remove,
  vehicleFilter,
  setVehicleFilter,
}) {
  const [showAll, setShowAll] = useState(false);


  const start = () =>
    setEditing({
      ...empty,
      id: makeId("vehicle"),
    });


  const save = (v) => {
    const all = getStored(
      "od_vehicles",
      []
    );

    const cleanedVehicle = {
      ...v,
      imageUrl: normalizeImageUrl(
        v.imageUrl
      ),
    };


    const exists = all.some(
      (x) => x.id === cleanedVehicle.id
    );


    const next = exists
      ? all.map((x) =>
          x.id === cleanedVehicle.id
            ? cleanedVehicle
            : x
        )
      : [cleanedVehicle, ...all];


    saveVehicles(next);
    setEditing(null);
  };


  const displayedVehicles =
    search.trim() || showAll
      ? vehicles
      : vehicles.slice(0, 4);


  return (
    <div className="mt-5 min-w-0 sm:mt-7">

      {/* SEARCH + FILTER + ADD */}

      <div className="mb-4 flex min-w-0 flex-wrap items-center gap-2 sm:mb-5">

        <div className="relative min-w-0 flex-1 sm:max-w-md">

          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 sm:left-4"
            size={15}
          />

          <input
            className="input h-10 w-full pl-9 text-xs sm:h-auto sm:pl-11 sm:text-sm"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);

              if (e.target.value.trim()) {
                setShowAll(true);
              } else {
                setShowAll(false);
              }
            }}
            placeholder="Search fleet..."
          />

        </div>


        {/* VEHICLE FILTER */}

        <div className="flex min-w-0 gap-1 rounded-xl bg-slate-100 p-1 sm:rounded-2xl">

          {[
            ["all", "All"],
            ["car", "Cars"],
            ["bike", "Bikes"],
          ].map(([key, label]) => (

            <button
              key={key}
              type="button"
              onClick={() => {
                setVehicleFilter(key);
                setShowAll(false);
              }}
              className={`rounded-lg px-2.5 py-1.5 text-[9px] font-black transition sm:rounded-xl sm:px-4 sm:py-2 sm:text-xs ${
                vehicleFilter === key
                  ? "bg-white text-orange-600 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {label}
            </button>

          ))}

        </div>


        {/* ADD VEHICLE */}

        <button
          onClick={start}
          className="btn-primary shrink-0 px-3 py-2.5 text-xs sm:px-4 sm:text-sm"
        >

          <Plus size={16} />

          <span className="hidden sm:inline">
            Add vehicle
          </span>

          <span className="sm:hidden">
            Add
          </span>

        </button>

      </div>


      {/* ACTIVE FILTER TEXT */}

      <div className="mb-3 flex items-center justify-between gap-2">

        <p className="truncate text-[10px] font-bold text-slate-500 sm:text-sm">

          {vehicleFilter === "all"
            ? "All vehicles"
            : vehicleFilter === "car"
            ? "Cars only"
            : "Bikes only"}

          <span className="ml-1 text-orange-500">
            ({vehicles.length})
          </span>

        </p>


        {vehicleFilter !== "all" && (
          <button
            type="button"
            onClick={() => setVehicleFilter("all")}
            className="shrink-0 text-[10px] font-black text-orange-600 sm:text-xs"
          >
            Show all
          </button>
        )}

      </div>


      {/* VEHICLE LIST */}

      <div className="grid min-w-0 gap-3 sm:gap-4">

        {displayedVehicles.map((v) => (

          <VehicleCard
            key={v.id}
            vehicle={v}
            setEditing={setEditing}
            remove={remove}
          />

        ))}


        {!vehicles.length && (
          <div className="card py-16 text-center text-xs text-slate-500 sm:py-20 sm:text-sm">
            No vehicles found.
          </div>
        )}

      </div>


      {/* VIEW MORE / SHOW LESS */}

      {vehicles.length > 4 &&
        !search.trim() && (

          <div className="mt-5 flex justify-center">

            <button
              onClick={() =>
                setShowAll(!showAll)
              }
              className="flex items-center gap-2 rounded-xl border border-orange-200 bg-orange-50 px-5 py-2.5 text-xs font-black text-orange-600 transition hover:bg-orange-100 sm:px-6 sm:py-3 sm:text-sm"
            >

              {showAll ? (
                <>
                  Show less
                  <ChevronUp size={16} />
                </>
              ) : (
                <>
                  View more
                  <ChevronDown size={16} />
                </>
              )}

            </button>

          </div>

        )}


      {/* VEHICLE MODAL */}

      {editing && (
        <VehicleModal
          initial={editing}
          onClose={() =>
            setEditing(null)
          }
          onSave={save}
        />
      )}

    </div>
  );
}


/* =====================================================
   VEHICLE CARD
===================================================== */

function VehicleCard({
  vehicle,
  setEditing,
  remove,
}) {
  const [imageError, setImageError] =
    useState(false);

  const imageUrl = normalizeImageUrl(
    vehicle.imageUrl
  );


  return (
    <div className="card flex min-w-0 items-center gap-2 overflow-hidden p-2.5 sm:gap-4 sm:p-4">

      {/* IMAGE */}

      <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl bg-orange-50 sm:h-28 sm:w-40 sm:rounded-2xl">

        {imageUrl && !imageError ? (
          <img
            src={imageUrl}
            className="h-full w-full object-cover"
            alt={vehicle.name || "Vehicle"}
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1 text-orange-300">

            <ImageIcon
              size={22}
              className="sm:hidden"
            />

            <ImageIcon
              size={32}
              className="hidden sm:block"
            />

            <span className="text-[7px] font-bold sm:text-[9px]">
              No image
            </span>

          </div>
        )}

      </div>


      {/* DETAILS */}

      <div className="min-w-0 flex-1">

        <div className="flex min-w-0 flex-wrap gap-1.5 sm:gap-2">

          <span className="shrink-0 text-[9px] font-black uppercase text-orange-500 sm:text-xs">
            {vehicle.type}
          </span>


          <span
            className={`shrink-0 text-[9px] font-black sm:text-xs ${
              vehicle.available
                ? "text-emerald-600"
                : "text-rose-600"
            }`}
          >
            {vehicle.available
              ? "Available"
              : "Unavailable"}
          </span>

        </div>


        <h3 className="mt-0.5 truncate text-xs font-black sm:text-lg">
          {vehicle.name}
        </h3>


        <p className="truncate text-[9px] text-slate-500 sm:text-sm">
          {vehicle.category} ·{" "}
          {vehicle.location} ·{" "}
          {money(vehicle.pricePerDay)}/day
        </p>

      </div>


      {/* ACTIONS */}

      <div className="flex shrink-0 gap-1 sm:gap-2">

        <button
          onClick={() =>
            setEditing(vehicle)
          }
          className="grid h-8 w-8 place-items-center rounded-lg bg-orange-50 text-orange-600 sm:h-11 sm:w-11 sm:rounded-xl"
          aria-label="Edit vehicle"
        >
          <Pencil size={14} />
        </button>


        <button
          onClick={() =>
            remove(vehicle.id)
          }
          className="grid h-8 w-8 place-items-center rounded-lg bg-rose-50 text-rose-600 sm:h-11 sm:w-11 sm:rounded-xl"
          aria-label="Delete vehicle"
        >
          <Trash2 size={14} />
        </button>

      </div>

    </div>
  );
}


/* =====================================================
   VEHICLE MODAL
===================================================== */

function VehicleModal({
  initial,
  onClose,
  onSave,
}) {
  const [v, setV] = useState({
    ...empty,
    ...initial,
    imageUrl: initial?.imageUrl || "",
  });

  const [imageError, setImageError] =
    useState(false);


  const ch = (k, val) => {
    setV((prev) => ({
      ...prev,
      [k]: val,
    }));

    if (k === "imageUrl") {
      setImageError(false);
    }
  };


  const previewUrl = normalizeImageUrl(
    v.imageUrl
  );


  const handleSave = () => {
    const cleaned = {
      ...v,
      imageUrl: normalizeImageUrl(
        v.imageUrl
      ),
    };

    onSave(cleaned);
  };


  return (
    <div className="fixed inset-0 z-[70] overflow-y-auto bg-slate-900/40 p-2 backdrop-blur-sm sm:p-4">

      <div className="mx-auto my-4 max-w-3xl rounded-2xl bg-white p-4 shadow-2xl sm:my-8 sm:rounded-[2rem] sm:p-8">

        {/* HEADER */}

        <div className="flex items-start justify-between gap-3">

          <div className="min-w-0">

            <h2 className="truncate text-lg font-black sm:text-2xl">
              {initial.name
                ? "Edit vehicle"
                : "Add vehicle"}
            </h2>

            <p className="truncate text-[10px] text-slate-500 sm:text-sm">
              Add a direct image URL for the vehicle.
            </p>

          </div>


          <button
            onClick={onClose}
            className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-slate-100 sm:h-10 sm:w-10 sm:rounded-xl"
            aria-label="Close"
          >
            <X size={17} />
          </button>

        </div>


        {/* FORM */}

        <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-7 sm:gap-4">

          {[
            ["name", "Vehicle name"],
            ["brand", "Brand"],
            ["category", "Category"],
            ["location", "Pickup location"],
            ["pricePerDay", "Price per day"],
            ["pricePerHour", "Price per hour"],
            ["seats", "Seats"],
          ].map(([k, l]) => (

            <div
              key={k}
              className="min-w-0"
            >

              <label className="label text-[10px] sm:text-xs">
                {l}
              </label>

              <input
                className="input h-9 w-full min-w-0 text-[10px] sm:h-auto sm:text-sm"
                value={v[k] ?? ""}
                onChange={(e) =>
                  ch(
                    k,
                    e.target.value
                  )
                }
              />

            </div>

          ))}


          {/* TYPE */}

          <div className="min-w-0">

            <label className="label text-[10px] sm:text-xs">
              Type
            </label>

            <select
              className="input h-9 w-full min-w-0 text-[10px] sm:h-auto sm:text-sm"
              value={v.type}
              onChange={(e) =>
                ch(
                  "type",
                  e.target.value
                )
              }
            >
              <option value="bike">
                Bike
              </option>

              <option value="car">
                Car
              </option>
            </select>

          </div>


          {/* TRANSMISSION */}

          <div className="min-w-0">

            <label className="label text-[10px] sm:text-xs">
              Transmission
            </label>

            <select
              className="input h-9 w-full min-w-0 text-[10px] sm:h-auto sm:text-sm"
              value={v.transmission}
              onChange={(e) =>
                ch(
                  "transmission",
                  e.target.value
                )
              }
            >
              <option value="Manual">
                Manual
              </option>

              <option value="Automatic">
                Automatic
              </option>
            </select>

          </div>


          {/* FUEL */}

          <div className="min-w-0">

            <label className="label text-[10px] sm:text-xs">
              Fuel
            </label>

            <select
              className="input h-9 w-full min-w-0 text-[10px] sm:h-auto sm:text-sm"
              value={v.fuel}
              onChange={(e) =>
                ch(
                  "fuel",
                  e.target.value
                )
              }
            >
              <option value="Petrol">
                Petrol
              </option>

              <option value="Diesel">
                Diesel
              </option>

              <option value="Electric">
                Electric
              </option>
            </select>

          </div>


          {/* AVAILABLE */}

          <div className="flex min-w-0 items-end">

            <label className="flex w-full min-w-0 items-center gap-2 overflow-hidden rounded-xl bg-orange-50 p-2.5 text-[10px] font-bold sm:gap-3 sm:rounded-2xl sm:p-4 sm:text-sm">

              <input
                type="checkbox"
                checked={v.available}
                onChange={(e) =>
                  ch(
                    "available",
                    e.target.checked
                  )
                }
                className="h-4 w-4 shrink-0 accent-orange-500 sm:h-5 sm:w-5"
              />

              <span className="truncate">
                Available for rental
              </span>

            </label>

          </div>


          {/* IMAGE URL */}

          <div className="col-span-2 min-w-0">

            <label className="label text-[10px] sm:text-xs">
              Vehicle image URL
            </label>


            <div className="relative">

              <ImageIcon
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="url"
                className="input h-10 w-full min-w-0 pl-9 text-[10px] sm:h-11 sm:text-sm"
                value={v.imageUrl}
                onChange={(e) =>
                  ch(
                    "imageUrl",
                    e.target.value
                  )
                }
                placeholder="https://example.com/vehicle.jpg"
              />

            </div>


            <p className="mt-1 text-[8px] text-slate-400 sm:text-[10px]">
              Use a direct image URL ending in .jpg, .jpeg, .png, .webp, etc.
            </p>

          </div>


          {/* IMAGE PREVIEW */}

          <div className="col-span-2 min-w-0">

            <label className="label text-[10px] sm:text-xs">
              Image preview
            </label>


            <div className="relative flex min-h-36 w-full items-center justify-center overflow-hidden rounded-2xl border border-dashed border-orange-200 bg-orange-50 sm:min-h-48">

              {previewUrl && !imageError ? (
                <img
                  src={previewUrl}
                  alt="Vehicle preview"
                  className="h-36 w-full object-cover sm:h-48"
                  onLoad={() =>
                    setImageError(false)
                  }
                  onError={() =>
                    setImageError(true)
                  }
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-2 px-4 text-center">

                  <ImageIcon
                    size={32}
                    className="text-orange-300"
                  />

                  <p className="text-[10px] font-bold text-slate-400 sm:text-xs">
                    {v.imageUrl
                      ? "Unable to load this image URL"
                      : "Enter an image URL to see the preview"}
                  </p>

                  {v.imageUrl && (
                    <p className="max-w-md break-all text-[8px] text-slate-400 sm:text-[10px]">
                      Check that the URL points directly to an image.
                    </p>
                  )}

                </div>
              )}

            </div>

          </div>


          {/* DESCRIPTION */}

          <div className="col-span-2 min-w-0">

            <label className="label text-[10px] sm:text-xs">
              Description
            </label>

            <textarea
              className="input min-h-20 w-full min-w-0 text-[10px] sm:min-h-24 sm:text-sm"
              value={v.description ?? ""}
              onChange={(e) =>
                ch(
                  "description",
                  e.target.value
                )
              }
            />

          </div>

        </div>


        {/* BUTTONS */}

        <div className="mt-5 flex justify-end gap-2 sm:mt-7 sm:gap-3">

          <button
            onClick={onClose}
            className="btn-secondary px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm"
          >
            Cancel
          </button>


          <button
            onClick={handleSave}
            className="btn-primary px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm"
          >
            <Save size={15} />
            Save vehicle
          </button>

        </div>

      </div>

    </div>
  );
}


/* =====================================================
   BOOKINGS
===================================================== */

function Bookings({
  bookings,
  updateBooking,
}) {
  return (
    <div className="mt-5 grid min-w-0 gap-3 sm:mt-7 sm:gap-4">

      {bookings.map((b) => (

        <div
          key={b.id}
          className="card min-w-0 overflow-hidden p-3 sm:p-5"
        >

          <div className="flex min-w-0 items-start justify-between gap-3">

            {/* DETAILS */}

            <div className="min-w-0 flex-1">

              <div className="flex min-w-0 flex-wrap items-center gap-1.5 sm:gap-2">

                <span className="shrink-0 rounded-full bg-orange-100 px-2 py-1 text-[9px] font-black text-orange-700 sm:px-3 sm:text-xs">
                  {b.status}
                </span>

                <span className="truncate text-[8px] font-bold text-slate-400 sm:text-xs">
                  {new Date(
                    b.createdAt
                  ).toLocaleString()}
                </span>

              </div>


              <h3 className="mt-2 truncate text-sm font-black sm:mt-3 sm:text-xl">
                {b.name} · {b.vehicleName}
              </h3>


              <p className="mt-1 truncate text-[10px] text-slate-600 sm:mt-2 sm:text-sm">
                {b.phone}
                {b.email &&
                  ` · ${b.email}`}
              </p>


              <div className="mt-2 grid min-w-0 grid-cols-2 gap-x-3 gap-y-1 text-[9px] text-slate-500 sm:mt-4 sm:gap-2 sm:text-sm">

                <span className="truncate">
                  📅 {b.date} · {b.time}
                </span>

                <span className="truncate">
                  📍 {b.pickup} → {b.drop}
                </span>

                <span className="truncate">
                  ⏱ {b.duration} day(s)
                </span>

                <span className="truncate">
                  📝 {b.notes || "No notes"}
                </span>

              </div>

            </div>


            {/* ACTIONS */}

            <div className="flex shrink-0 flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:gap-2">

              <button
                onClick={() =>
                  updateBooking(
                    b.id,
                    "Confirmed"
                  )
                }
                className="rounded-lg bg-emerald-500 px-2 py-1.5 text-[9px] font-black text-white sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm"
              >
                Confirm
              </button>


              <button
                onClick={() =>
                  updateBooking(
                    b.id,
                    "Cancelled"
                  )
                }
                className="rounded-lg bg-rose-50 px-2 py-1.5 text-[9px] font-black text-rose-600 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm"
              >
                Cancel
              </button>


              <a
                href={`https://wa.me/${b.phone.replace(
                  /\D/g,
                  ""
                )}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-orange-50 px-2 py-1.5 text-[9px] font-black text-orange-600 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm"
              >
                WhatsApp
              </a>

            </div>

          </div>

        </div>

      ))}


      {!bookings.length && (
        <div className="card py-16 text-center text-xs text-slate-500 sm:py-20 sm:text-sm">
          No customer enquiries yet.
        </div>
      )}

    </div>
  );
}
