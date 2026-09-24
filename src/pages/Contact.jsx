import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock3,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="container-x py-6 sm:py-12 lg:py-16">
      {/* HERO */}
      <div className="rounded-[1.5rem] bg-gradient-to-br from-orange-100 via-white to-amber-100 p-5 sm:rounded-[2rem] sm:p-12">
        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-orange-500 sm:text-sm sm:tracking-widest">
          Get in touch
        </p>

        <h1 className="mt-2 text-2xl font-black leading-tight sm:text-5xl">
          Let’s get you moving.
        </h1>

        <p className="mt-3 max-w-2xl text-xs leading-5 text-slate-600 sm:mt-4 sm:text-base sm:leading-6">
          Questions about a vehicle, rental dates, pickup locations or
          long-term rentals? Reach our team directly.
        </p>
      </div>

      {/* CONTACT CARDS */}
      <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        <Info
          icon={Phone}
          title="Call us"
          text="+91 98765 43210"
          href="tel:+919876543210"
        />

        <Info
          icon={MessageCircle}
          title="WhatsApp"
          text="Chat with our team"
          href="https://wa.me/919876543210"
        />

        <Info
          icon={Mail}
          title="Email"
          text="hello@orangedrive.in"
          href="mailto:hello@orangedrive.in"
        />

        <Info
          icon={MapPin}
          title="Locations"
          text="Coimbatore & Pollachi"
        />
      </div>

      {/* SUPPORT + LOCATION */}
      <div className="mt-5 grid gap-4 sm:mt-8 sm:gap-6 lg:grid-cols-2">
        {/* RENTAL SUPPORT */}
        <div className="card min-w-0 p-4 sm:p-7">
          <h2 className="text-lg font-black sm:text-2xl">
            Rental support
          </h2>

          <div className="mt-4 grid gap-4 text-xs leading-5 text-slate-600 sm:mt-6 sm:gap-5 sm:text-sm sm:leading-6">
            <p className="flex min-w-0 gap-2.5 sm:gap-3">
              <Clock3
                size={18}
                className="mt-0.5 shrink-0 text-orange-500 sm:h-5 sm:w-5"
              />
              <span>
                Support available daily from 8:00 AM to 9:00 PM.
              </span>
            </p>

            <p className="flex min-w-0 gap-2.5 sm:gap-3">
              <MapPin
                size={18}
                className="mt-0.5 shrink-0 text-orange-500 sm:h-5 sm:w-5"
              />
              <span>
                Pickup and drop can be discussed based on location and
                vehicle availability.
              </span>
            </p>

            <p className="flex min-w-0 gap-2.5 sm:gap-3">
              <MessageCircle
                size={18}
                className="mt-0.5 shrink-0 text-orange-500 sm:h-5 sm:w-5"
              />
              <span>
                WhatsApp is the fastest way to share your trip details.
              </span>
            </p>
          </div>
        </div>

        {/* LOCATION */}
        <div className="overflow-hidden rounded-2xl border border-orange-100 bg-white p-1.5 shadow-soft sm:rounded-3xl sm:p-2">
  <div className="relative overflow-hidden rounded-[1.1rem] sm:rounded-[1.4rem]">
    <iframe
      title="Orange Drive location - Coimbatore and Pollachi"
      src="https://www.google.com/maps?q=Coimbatore%20Tamil%20Nadu%20India&output=embed"
      className="h-52 w-full border-0 sm:h-64"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />

    <div className="pointer-events-none absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3">
      <div className="rounded-xl bg-white/95 px-3 py-2 shadow-lg backdrop-blur-sm sm:rounded-2xl sm:px-4 sm:py-3">
        <div className="flex items-center gap-2">
          <MapPin
            size={18}
            className="shrink-0 text-orange-500 sm:h-5 sm:w-5"
          />

          <div className="min-w-0">
            <h3 className="truncate text-xs font-black sm:text-sm">
              Coimbatore · Pollachi
            </h3>

            <p className="text-[9px] text-slate-500 sm:text-xs">
              Tamil Nadu, India
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}

function Info({ icon: I, title, text, href }) {
  const content = (
    <div className="card min-w-0 p-3.5 transition sm:p-5 lg:p-6">
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-orange-100 text-orange-600 sm:h-11 sm:w-11 sm:rounded-2xl">
        <I size={17} className="sm:hidden" />
        <I size={20} className="hidden sm:block" />
      </div>

      <h3 className="mt-3 truncate text-xs font-black sm:mt-5 sm:text-base">
        {title}
      </h3>

      <p className="mt-1 truncate text-[10px] text-slate-500 sm:mt-2 sm:text-sm">
        {text}
      </p>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className="min-w-0"
      >
        {content}
      </a>
    );
  }

  return content;
}