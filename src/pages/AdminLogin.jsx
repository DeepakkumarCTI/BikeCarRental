import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  User,
  LockKeyhole,
  ArrowLeft,
  CarFront,
  CheckCircle2,
  BarChart3,
  CalendarCheck,
  Users,
  ArrowUpRight,
} from "lucide-react";
import { getStored, setStored } from "../utils";

function VehicleLogo() {
  return (
    <svg
      viewBox="0 0 120 70"
      className="h-8 w-12 sm:h-9 sm:w-14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 45L18 30C19 27 22 25 27 25H41L49 14C51 11 54 9 58 9H76C80 9 83 11 85 14L92 25H98C103 25 107 29 108 34L110 45V51H102C101 58 96 62 90 62C84 62 79 58 78 51H42C41 58 36 62 30 62C24 62 19 58 18 51H10V45H12Z"
        fill="currentColor"
      />
      <path
        d="M45 25L52 15C54 13 56 12 59 12H75C78 12 80 14 82 16L87 25H45Z"
        fill="white"
        opacity="0.95"
      />
      <path d="M67 13V25" stroke="currentColor" strokeWidth="2" />
      <path
        d="M98 29C102 29 104 31 106 35H98V29Z"
        fill="#FFF7ED"
      />
      <path
        d="M99 37H107L108 42H99V37Z"
        fill="white"
        opacity="0.7"
      />
      <circle cx="30" cy="49" r="10" fill="#0F172A" />
      <circle cx="30" cy="49" r="5" fill="#94A3B8" />
      <circle cx="30" cy="49" r="2" fill="#E2E8F0" />
      <circle cx="90" cy="49" r="10" fill="#0F172A" />
      <circle cx="90" cy="49" r="5" fill="#94A3B8" />
      <circle cx="90" cy="49" r="2" fill="#E2E8F0" />
      <path
        d="M16 43H98"
        stroke="white"
        strokeWidth="2"
        opacity="0.3"
      />
    </svg>
  );
}

function Feature({ icon: Icon, title, text }) {
  return (
    <div className="flex gap-3">
      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-white/10 text-orange-300 ring-1 ring-white/10">
        <Icon size={16} />
      </div>

      <div>
        <p className="text-sm font-bold text-white">{title}</p>
        <p className="mt-0.5 text-xs leading-5 text-slate-400">
          {text}
        </p>
      </div>
    </div>
  );
}

export default function AdminLogin() {
  const nav = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();

    const a = getStored("od_admin", {});

    if (username === a.username && password === a.password) {
      setStored("od_admin_session", {
        loggedIn: true,
        at: Date.now(),
      });

      nav("/admin");
    } else {
      setError("Invalid admin username or password.");
    }
  };

  return (
    <section className="min-h-[calc(100vh-80px)] bg-slate-950 px-3 py-5 sm:px-5 sm:py-8">
      <div
        className="
          mx-auto
          grid
          min-h-[540px]
          max-w-5xl
          overflow-hidden
          rounded-[1.5rem]
          border
          border-slate-800
          bg-white
          shadow-2xl
          lg:grid-cols-[1fr_1fr]
        "
      >

        {/* LEFT BRAND PANEL */}
        <div className="relative hidden overflow-hidden bg-slate-950 lg:block">

          {/* Decorative background */}
          <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl" />

          <div className="relative flex h-full flex-col p-8 xl:p-9">

            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-orange-500 text-white shadow-lg shadow-orange-500/20">
                <VehicleLogo />
              </div>

              <div>
                <p className="text-base font-black text-white">
                  Car & Bike Rentals
                </p>

                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-orange-400">
                  Admin Management
                </p>
              </div>
            </div>

            {/* Main heading */}
            <div className="mt-12 max-w-md">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1.5 text-[11px] font-bold text-orange-300">
                <ShieldCheck size={14} />
                Secure Management Portal
              </div>

              <h2 className="text-3xl font-black leading-tight tracking-tight text-white xl:text-4xl">
                Manage your
                <span className="block text-orange-500">
                  rental business.
                </span>
              </h2>

              <p className="mt-4 max-w-md text-xs leading-6 text-slate-400">
                Access your fleet, monitor vehicle availability, review
                customer enquiries and keep your rental operations organized
                from one place.
              </p>
            </div>

            {/* Feature list */}
            <div className="mt-7 grid gap-4">
              <Feature
                icon={CarFront}
                title="Fleet Management"
                text="Manage cars, bikes and vehicle availability."
              />

              <Feature
                icon={CalendarCheck}
                title="Booking Enquiries"
                text="Keep track of customer rental requests."
              />

              <Feature
                icon={Users}
                title="Customer Management"
                text="Review and manage customer information."
              />

              <Feature
                icon={BarChart3}
                title="Business Overview"
                text="Keep your rental operations organized."
              />
            </div>

            {/* Bottom status */}
            <div className="mt-auto pt-6">
              <div className="flex items-center justify-between border-t border-slate-800 pt-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    System Status
                  </p>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />

                    <span className="text-xs font-semibold text-slate-300">
                      Admin portal ready
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-[10px] text-slate-500">2026</p>

                  <p className="text-[10px] font-bold text-orange-400">
                    Ride. Explore. Repeat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT LOGIN PANEL */}
        <div className="flex items-center bg-white px-5 py-6 sm:px-8 sm:py-8 lg:px-10 xl:px-12">
          <form
            onSubmit={submit}
            className="mx-auto w-full max-w-sm"
          >

            {/* Back link */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 transition hover:text-orange-600"
            >
              <ArrowLeft size={15} />
              Back to website
            </Link>

            {/* Mobile brand */}
            <div className="mt-6 flex items-center gap-3 lg:hidden">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-orange-500 text-white shadow-lg shadow-orange-200">
                <VehicleLogo />
              </div>

              <div>
                <p className="text-sm font-black text-slate-900">
                  Car & Bike Rentals
                </p>

                <p className="text-[10px] font-bold uppercase tracking-wider text-orange-500">
                  Admin Portal
                </p>
              </div>
            </div>

            {/* Login icon */}
            <div className="mt-7 grid h-12 w-12 place-items-center rounded-xl bg-orange-50 text-orange-600 ring-1 ring-orange-100">
              <ShieldCheck size={24} />
            </div>

            <h1 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              Welcome back
            </h1>

            <p className="mt-1.5 max-w-sm text-xs leading-5 text-slate-500">
              Sign in to access your rental management dashboard.
            </p>

            {/* Error */}
            {error && (
              <div className="mt-4 flex items-start gap-2 rounded-xl border border-rose-100 bg-rose-50 p-3 text-xs font-bold text-rose-600">
                <span className="mt-0.5">!</span>
                <span>{error}</span>
              </div>
            )}

            {/* Fields */}
            <div className="mt-6 grid gap-4">

              {/* Username */}
              <div>
                <label className="label">
                  Username
                </label>

                <div className="relative">
                  <User
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    size={17}
                  />

                  <input
                    className="input h-11 pl-10"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      setError("");
                    }}
                    placeholder="Enter username"
                    autoComplete="username"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="label">
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    size={17}
                  />

                  <input
                    type="password"
                    className="input h-11 pl-10"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    placeholder="Enter password"
                    autoComplete="current-password"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="btn-primary mt-5 flex w-full items-center justify-center gap-2 py-3"
            >
              Secure sign in
              <ArrowUpRight size={16} />
            </button>

            {/* Security information */}
            <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 p-3">
              <div className="flex gap-3">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-emerald-600 shadow-sm">
                  <CheckCircle2 size={17} />
                </div>

                <div>
                  <p className="text-[11px] font-black text-slate-800">
                    Secure admin access
                  </p>

                  <p className="mt-0.5 text-[11px] leading-4 text-slate-500">
                    This portal is restricted to authorized rental
                    administrators.
                  </p>
                </div>
              </div>
            </div>

            {/* Demo credentials */}
            <div className="mt-3 rounded-xl border border-orange-100 bg-orange-50 p-3 text-center">
              <p className="text-[10px] font-bold uppercase tracking-wider text-orange-600">
                Demo access
              </p>

              <p className="mt-1 text-[11px] text-slate-600">
                Username: <b>admin</b>
                <span className="mx-2 text-orange-300">•</span>
                Password: <b>Admin@123</b>
              </p>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}