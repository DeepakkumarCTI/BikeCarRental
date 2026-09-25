
import { useState } from "react";

import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock3,
  HelpCircle,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How can I book a bike without seeing it physically?",
      answer:
        "You can browse the vehicle details, photos, features and rental price available on our website. Select your preferred bike and submit an enquiry with your rental dates and contact details. Our team will contact you to confirm the vehicle availability and booking details.",
    },
    {
      question: "I have a learner's licence. Will that work?",
      answer:
        "A valid licence that legally permits you to ride the selected vehicle is required. A learner's licence may have specific conditions and restrictions, so please confirm the applicable requirements with our team before making a booking.",
    },
    {
      question: "Can I cancel my booking? If yes, how?",
      answer:
        "Yes, cancellation requests can be made by contacting our team with your booking details. Cancellation charges or refund eligibility may depend on how close the cancellation is to the scheduled pickup time and the applicable rental terms.",
    },
    {
      question: "How does the company handle security deposits?",
      answer:
        "A security deposit may be required depending on the vehicle and rental terms. The applicable deposit amount and refund conditions will be communicated before the booking is confirmed. The deposit is subject to the agreed rental conditions.",
    },
    {
      question: "Will I get a complimentary helmet with my bike rental?",
      answer:
        "Helmet availability depends on the selected bike and rental package. Please confirm helmet availability with our team while making your booking so that we can provide you with the applicable details.",
    },
    {
      question: "Is there any fine for delaying the vehicle return?",
      answer:
        "Late return charges may apply if the vehicle is returned after the agreed return time. The applicable charge depends on the rental terms and the duration of the delay. Please contact our team if you expect to be late.",
    },
  ];

  return (
    <div>
      {/* =================================================
          CONTACT MAIN SECTION
      ================================================== */}
      <section className="container-x py-6 sm:py-12 lg:py-16">
        {/* HERO */}
        <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 p-5 shadow-lg shadow-slate-200/50 sm:rounded-[2rem] sm:p-12">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-orange-400 sm:text-sm sm:tracking-widest">
            Get in touch
          </p>

          <h1 className="mt-2 text-2xl font-black leading-tight text-white sm:text-5xl">
            Let’s get you moving.
          </h1>

          <p className="mt-3 max-w-2xl text-xs leading-5 text-slate-300 sm:mt-4 sm:text-base sm:leading-6">
            Questions about a vehicle, rental dates, pickup locations or
            long-term rentals? Reach our team directly.
          </p>
        </div>

        {/* =================================================
            CONTACT CARDS
        ================================================== */}
        <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {/* CALL */}
          <div className="group rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-[1px] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-100 sm:rounded-3xl">
            <Info
              icon={Phone}
              title="Call us"
              text="+91 98765 43210"
              href="tel:+919876543210"
              iconColor="bg-orange-100 text-orange-600"
            />
          </div>

          {/* WHATSAPP */}
          <div className="group rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-green-50 p-[1px] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-100 sm:rounded-3xl">
            <Info
              icon={MessageCircle}
              title="WhatsApp"
              text="Chat with our team"
              href="https://wa.me/919876543210"
              iconColor="bg-emerald-100 text-emerald-600"
            />
          </div>

          {/* EMAIL */}
          <div className="group rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-[1px] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100 sm:rounded-3xl">
            <Info
              icon={Mail}
              title="Email"
              text="hello@orangedrive.in"
              href="mailto:hello@orangedrive.in"
              iconColor="bg-blue-100 text-blue-600"
            />
          </div>

          {/* LOCATIONS */}
          <div className="group rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-purple-50 p-[1px] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-100 sm:rounded-3xl">
            <Info
              icon={MapPin}
              title="Locations"
              text="Coimbatore & Pollachi"
              iconColor="bg-violet-100 text-violet-600"
            />
          </div>
        </div>

        {/* =================================================
            SUPPORT + LOCATION
        ================================================== */}
        <div className="mt-5 grid gap-4 sm:mt-8 sm:gap-6 lg:grid-cols-2">
          {/* RENTAL SUPPORT */}
          <div className="group rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-yellow-50 p-[1px] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-100 sm:rounded-3xl">
            <div className="card min-w-0 rounded-[calc(1rem-1px)] bg-white p-4 sm:rounded-[calc(1.5rem-1px)] sm:p-7">
              <h2 className="text-lg font-black text-slate-900 sm:text-2xl">
                Rental support
              </h2>

              <div className="mt-4 grid gap-4 text-xs leading-5 text-slate-600 sm:mt-6 sm:gap-5 sm:text-sm sm:leading-6">
                {/* SUPPORT TIME */}
                <p className="flex min-w-0 gap-2.5 sm:gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600 sm:h-10 sm:w-10 sm:rounded-2xl">
                    <Clock3 size={17} />
                  </span>

                  <span className="pt-1">
                    Support available daily from 8:00 AM to 9:00 PM.
                  </span>
                </p>

                {/* PICKUP */}
                <p className="flex min-w-0 gap-2.5 sm:gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-600 sm:h-10 sm:w-10 sm:rounded-2xl">
                    <MapPin size={17} />
                  </span>

                  <span className="pt-1">
                    Pickup and drop can be discussed based on location and
                    vehicle availability.
                  </span>
                </p>

                {/* WHATSAPP */}
                <p className="flex min-w-0 gap-2.5 sm:gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 sm:h-10 sm:w-10 sm:rounded-2xl">
                    <MessageCircle size={17} />
                  </span>

                  <span className="pt-1">
                    WhatsApp is the fastest way to share your trip details.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* LOCATION */}
          <div className="group rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-sky-50 p-[1px] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-100 sm:rounded-3xl">
            <div className="overflow-hidden rounded-[calc(1rem-1px)] bg-white p-1.5 sm:rounded-[calc(1.5rem-1px)] sm:p-2">
              <div className="relative overflow-hidden rounded-[1.1rem] sm:rounded-[1.4rem]">
                <iframe
                  title="Orange Drive location - Coimbatore and Pollachi"
                  src="https://www.google.com/maps?q=Coimbatore%20Tamil%20Nadu%20India&output=embed"
                  className="h-52 w-full border-0 sm:h-64"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* MAP LABEL */}
                <div className="pointer-events-none absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3">
                  <div className="rounded-xl border border-cyan-100 bg-white/95 px-3 py-2 shadow-lg backdrop-blur-sm sm:rounded-2xl sm:px-4 sm:py-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 sm:h-9 sm:w-9">
                        <MapPin size={17} className="sm:h-5 sm:w-5" />
                      </span>

                      <div className="min-w-0">
                        <h3 className="truncate text-xs font-black text-slate-900 sm:text-sm">
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
        </div>
      </section>

      {/* =================================================
          FAQ SECTION
      ================================================== */}
      <section className="w-full min-w-0 px-0 py-10 sm:py-14 lg:py-10">
        <div className="w-full min-w-0 px-4 sm:px-8 lg:px-16">
          {/* SECTION HEADER */}
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1.5 sm:px-4 sm:py-2">
              <HelpCircle
                size={14}
                className="text-orange-500 sm:h-4 sm:w-4"
              />

              <span className="text-[9px] font-black uppercase tracking-[0.16em] text-orange-600 sm:text-xs sm:tracking-widest">
                Frequently Asked Questions
              </span>
            </div>

            <h2 className="mt-3 text-2xl font-black leading-tight text-slate-950 sm:mt-4 sm:text-3xl lg:text-4xl">
              Have Questions?
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-[11px] leading-relaxed text-slate-500 sm:mt-3 sm:text-sm lg:text-base">
              Here are some common questions customers ask before booking a
              bike or car with us.
            </p>
          </div>

          {/* FAQ LIST */}
          <div className="mx-auto mt-7 max-w-3xl space-y-2.5 sm:mt-9 sm:space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 sm:rounded-3xl ${
                    isOpen
                      ? "border-orange-200 bg-orange-50/60 shadow-[0_10px_30px_rgba(249,115,22,0.08)]"
                      : "border-slate-200 bg-white hover:border-orange-100 hover:shadow-sm"
                  }`}
                >
                  {/* QUESTION */}
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full min-w-0 items-center justify-between gap-3 px-4 py-4 text-left sm:px-6 sm:py-5"
                    aria-expanded={isOpen}
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      {/* NUMBER */}
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-[10px] font-black transition-all duration-300 sm:h-9 sm:w-9 sm:text-xs ${
                          isOpen
                            ? "bg-orange-500 text-white shadow-md shadow-orange-200"
                            : "bg-orange-50 text-orange-500"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* QUESTION */}
                      <span
                        className={`min-w-0 text-[11px] font-black leading-relaxed sm:text-sm lg:text-base ${
                          isOpen ? "text-orange-600" : "text-slate-800"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    {/* ARROW */}
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-8 sm:w-8 ${
                        isOpen
                          ? "rotate-180 bg-orange-500 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <ChevronDown size={15} />
                    </span>
                  </button>

                  {/* ANSWER */}
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="border-t border-orange-100 px-4 pb-4 pt-3 sm:px-6 sm:pb-5 sm:pt-4">
                        <p className="pl-11 text-[10px] leading-relaxed text-slate-500 sm:pl-12 sm:text-sm">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* BOTTOM CONTACT */}
          <div className="mx-auto mt-7 flex max-w-3xl flex-col items-center justify-center gap-2 text-center sm:mt-9 sm:flex-row sm:gap-3">
            <p className="text-[10px] font-medium text-slate-500 sm:text-sm">
              Still have a question?
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 text-[10px] font-black text-orange-600 transition-all hover:gap-2.5 sm:text-sm"
            >
              Contact us
              <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* =================================================
   CONTACT INFO CARD
================================================== */

function Info({
  icon: I,
  title,
  text,
  href,
  iconColor = "bg-orange-100 text-orange-600",
}) {
  const content = (
    <div className="card min-w-0 rounded-[calc(1rem-1px)] bg-white p-3.5 transition-all duration-300 sm:rounded-[calc(1.5rem-1px)] sm:p-5 lg:p-6">
      {/* ICON */}
      <div
        className={`grid h-9 w-9 place-items-center rounded-xl sm:h-11 sm:w-11 sm:rounded-2xl ${iconColor}`}
      >
        <I size={17} className="sm:hidden" />
        <I size={20} className="hidden sm:block" />
      </div>

      {/* TITLE */}
      <h3 className="mt-3 truncate text-xs font-black text-slate-900 sm:mt-5 sm:text-base">
        {title}
      </h3>

      {/* DESCRIPTION */}
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
        className="block min-w-0"
      >
        {content}
      </a>
    );
  }

  return content;
}
