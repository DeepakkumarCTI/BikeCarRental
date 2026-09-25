import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  Youtube,
  Send,
  X,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { useState } from "react";

import rentalLogo from "../assets/rental-logo.png";

/* =========================================================
   LEGAL MODAL
========================================================= */
function LegalModal({ title, type, children, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/50 p-2 backdrop-blur-sm sm:p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-orange-100 bg-white shadow-2xl sm:max-h-[90vh] sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-orange-100 bg-white/95 px-4 py-3 backdrop-blur-xl sm:px-7 sm:py-4">
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-orange-100 text-orange-600 sm:h-9 sm:w-9 sm:rounded-xl">
              {type === "privacy" ? (
                <ShieldCheck size={16} />
              ) : (
                <FileText size={16} />
              )}
            </span>

            <h3 className="truncate text-base font-black text-slate-900 sm:text-2xl">
              {title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-orange-50 text-orange-600 transition hover:bg-orange-500 hover:text-white sm:h-9 sm:w-9 sm:rounded-xl"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="space-y-4 px-4 py-5 text-xs leading-6 text-slate-600 sm:space-y-5 sm:px-7 sm:py-8 sm:text-sm sm:leading-7">
          {children}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   FOOTER
========================================================= */
export default function Footer() {
  const [legal, setLegal] = useState(null);

  return (
    <>
      <footer className="mt-3 w-full border-t border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 sm:mt-5">
        {/* Full Width Footer Container */}
        <div className="w-full px-2 py-6 sm:px-4 sm:py-10 lg:px-5">
          {/* =================================================
              FOOTER GRID
          ================================================= */}
          <div className="grid grid-cols-2 gap-x-5 gap-y-6 sm:gap-8 lg:grid-cols-[1.4fr_.7fr_.8fr_1fr] lg:gap-10">
            {/* =================================================
                BRAND
                Full width on mobile
            ================================================= */}
            <div className="col-span-2 min-w-0 lg:col-span-1">
              {/* Logo */}
              <Link
                to="/"
                className="group flex min-w-0 items-center gap-1.5 sm:gap-2"
              >
                <div className="relative -ml-1 shrink-0 sm:-ml-2">
                  <img
                    src={rentalLogo}
                    alt="Car & Bike Rentals"
                    className="
                      h-16 w-20
                      object-contain
                      transition-transform
                      duration-300
                      group-hover:scale-105
                      sm:h-20 sm:w-28
                      lg:h-24 lg:w-32
                    "
                  />
                </div>

                <div className="min-w-0 leading-tight">
                  <div
                    className="
                      truncate
                      bg-gradient-to-r
                      from-orange-600
                      via-orange-500
                      to-amber-500
                      bg-clip-text
                      text-sm
                      font-black
                      tracking-tight
                      text-transparent
                      sm:text-xl
                    "
                  >
                    Car & Bike Rentals
                  </div>

                  <div className="text-[10px] font-bold text-orange-600 sm:text-sm">
                    Ride. Explore. Repeat.
                  </div>
                </div>
              </Link>

              {/* Description */}
              <p className="mt-3 max-w-xl text-[11px] leading-5 text-slate-600 sm:mt-4 sm:text-sm sm:leading-6">
                Reliable bikes and cars for city rides, business travel,
                airport transfers and memorable road trips across Coimbatore
                and Pollachi.
              </p>

              {/* Social Media */}
              <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                <SocialIcon
                  href="#"
                  label="Instagram"
                  icon={Instagram}
                />

                <SocialIcon
                  href="#"
                  label="Facebook"
                  icon={Facebook}
                />

                <SocialIcon
                  href="https://wa.me/919876543210"
                  label="WhatsApp"
                  icon={MessageCircle}
                  external
                />

                <SocialIcon
                  href="#"
                  label="YouTube"
                  icon={Youtube}
                />

                <SocialIcon
                  href="#"
                  label="X"
                  icon={X}
                />

                <SocialIcon
                  href="#"
                  label="Telegram"
                  icon={Send}
                />
              </div>
            </div>

            {/* =================================================
                EXPLORE
            ================================================= */}
            <div className="min-w-0">
              <h4 className="text-xs font-black text-slate-900 sm:text-sm">
                Explore
              </h4>

              <div className="mt-2.5 grid gap-1.5 text-[11px] font-semibold text-slate-600 sm:mt-3 sm:gap-2.5 sm:text-sm">
                <Link
                  to="/"
                  className="transition hover:translate-x-1 hover:text-orange-600"
                >
                  Home
                </Link>
                <Link
                  to="/contact"
                  className="transition hover:translate-x-1 hover:text-orange-600"
                >
                  Contact Us
                </Link>
                <Link
                  to="/vehicles"
                  className="transition hover:translate-x-1 hover:text-orange-600"
                >
                  All Vehicles
                </Link>

                
                <Link
                  to="/vehicles?type=bike"
                  className="transition hover:translate-x-1 hover:text-orange-600"
                >
                  Bike Rentals
                </Link>
                
              </div>
            </div>

            {/* =================================================
                CUSTOMER
            ================================================= */}
            <div className="min-w-0">
              <h4 className="text-xs font-black text-slate-900 sm:text-sm">
                Customer
              </h4>

              <div className="mt-2.5 grid gap-1.5 text-[11px] font-semibold leading-5 text-slate-600 sm:mt-3 sm:gap-2.5 sm:text-sm sm:leading-normal">
                <button
                  className="text-left transition hover:translate-x-1 hover:text-orange-600"
                  onClick={() => setLegal("privacy")}
                >
                  Privacy Policy
                </button>

                <button
                  className="text-left transition hover:translate-x-1 hover:text-orange-600"
                  onClick={() => setLegal("terms")}
                >
                  Terms & Conditions
                </button>

                <span>Support: 8 AM – 9 PM</span>

                <span>WhatsApp support</span>

                <span>Availability assistance</span>
              </div>
            </div>

            {/* =================================================
                REACH US
                Full width on mobile
            ================================================= */}
            <div className="col-span-2 min-w-0 sm:col-span-2 lg:col-span-1">
              <h4 className="text-xs font-black text-slate-900 sm:text-sm">
                Reach us
              </h4>

              <div className="mt-2.5 grid gap-2.5 text-[11px] leading-5 text-slate-600 sm:mt-3 sm:gap-3 sm:text-sm sm:leading-normal">
                {/* Location */}
                <div className="flex items-start gap-2">
                  <MapPin
                    className="mt-0.5 shrink-0 text-orange-500"
                    size={15}
                  />

                  <span>
                    Coimbatore & Pollachi,
                    <br />
                    Tamil Nadu
                  </span>
                </div>

                {/* Phone */}
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 transition hover:text-orange-600"
                >
                  <Phone
                    className="shrink-0 text-orange-500"
                    size={15}
                  />

                  <span>+91 98765 43210</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:hello@orangedrive.in"
                  className="flex min-w-0 items-center gap-2 transition hover:text-orange-600"
                >
                  <Mail
                    className="shrink-0 text-orange-500"
                    size={15}
                  />

                  <span className="break-all">
                    info@carbikerent.in
                  </span>
                </a>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-orange-500 px-3 py-2 text-[10px] font-extrabold text-white shadow-md shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-600 sm:mt-4 sm:gap-2 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-xs"
              >
                <MessageCircle size={13} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* =================================================
              BOTTOM BAR
          ================================================= */}
          <div className="mt-6 grid gap-1.5 border-t border-orange-100 pt-3 text-[9px] font-semibold leading-4 text-slate-500 sm:mt-8 sm:flex sm:items-center sm:justify-between sm:gap-2 sm:pt-4 sm:text-xs sm:leading-normal">
            <span>
              © 2026 Orange Drive Rentals. All rights reserved.
            </span>

            <span>
              Drive responsibly. Follow local traffic and rental rules.
            </span>
          </div>
        </div>
      </footer>

      {/* =====================================================
          PRIVACY POLICY
      ===================================================== */}
      {legal === "privacy" && (
        <LegalModal
          title="Privacy Policy"
          type="privacy"
          onClose={() => setLegal(null)}
        >
          <div>
            <h4 className="font-black text-slate-900">
              1. Information We Collect
            </h4>

            <p className="mt-1">
              We may collect information that you voluntarily provide when
              making an enquiry or requesting vehicle availability. This may
              include your name, mobile number, email address, travel dates,
              pickup location, preferred vehicle and other information needed
              to respond to your request.
            </p>
          </div>

          <div>
            <h4 className="font-black text-slate-900">
              2. How We Use Your Information
            </h4>

            <p className="mt-1">
              Information provided through the website may be used to respond
              to enquiries, check vehicle availability, communicate rental
              details, coordinate pickup and return arrangements, provide
              customer support and improve our rental services.
            </p>
          </div>

          <div>
            <h4 className="font-black text-slate-900">
              3. WhatsApp and Communication
            </h4>

            <p className="mt-1">
              If you contact us through WhatsApp, phone or email, the
              information you provide may be used to communicate with you
              regarding your enquiry, requested vehicle and rental
              arrangements.
            </p>
          </div>

          <div>
            <h4 className="font-black text-slate-900">
              4. Website and Local Storage
            </h4>

            <p className="mt-1">
              Vehicle and booking information in this demo application may be
              stored in your browser's localStorage. This is suitable for
              demonstration purposes and should not be treated as a secure
              production booking database.
            </p>
          </div>

          <div>
            <h4 className="font-black text-slate-900">
              5. Payment Information
            </h4>

            <p className="mt-1">
              This website does not request or intentionally store complete
              payment card information through the enquiry form. If online
              payments are introduced, payment processing should be handled by
              an appropriate secure payment provider.
            </p>
          </div>

          <div>
            <h4 className="font-black text-slate-900">
              6. Sharing of Information
            </h4>

            <p className="mt-1">
              We do not intentionally sell customer information. Information
              may be shared when reasonably necessary to process a rental
              enquiry, provide requested services, comply with applicable law,
              prevent misuse or protect the rights and security of the
              business and its customers.
            </p>
          </div>

          <div>
            <h4 className="font-black text-slate-900">
              7. Data Security
            </h4>

            <p className="mt-1">
              We take reasonable steps to protect information handled through
              our services. However, no internet transmission or electronic
              storage system can be guaranteed to be completely secure.
            </p>
          </div>

          <div>
            <h4 className="font-black text-slate-900">
              8. Data Correction Requests
            </h4>

            <p className="mt-1">
              If you believe information submitted through the website needs
              to be corrected or updated, please contact us using the phone
              number or email address provided on this website.
            </p>
          </div>

          <div>
            <h4 className="font-black text-slate-900">
              9. Policy Updates
            </h4>

            <p className="mt-1">
              This privacy policy may be updated from time to time to reflect
              changes to our services, website functionality or applicable
              requirements. Updated information will be published on this
              page.
            </p>
          </div>
        </LegalModal>
      )}

      {/* =====================================================
          TERMS & CONDITIONS
      ===================================================== */}
      {legal === "terms" && (
        <LegalModal
          title="Terms & Conditions"
          type="terms"
          onClose={() => setLegal(null)}
        >
          <div>
            <h4 className="font-black text-slate-900">
              1. Enquiry and Booking
            </h4>

            <p className="mt-1">
              Submitting an enquiry through this website does not automatically
              create a confirmed rental. A booking becomes confirmed only
              after vehicle availability, rental requirements, pricing and
              applicable terms have been verified and communicated by the
              rental team.
            </p>
          </div>

          <div>
            <h4 className="font-black text-slate-900">
              2. Vehicle Availability
            </h4>

            <p className="mt-1">
              All vehicles are subject to availability. A vehicle displayed on
              the website may become unavailable before an enquiry is confirmed.
              The final vehicle, rental period and applicable price will be
              confirmed by the rental team.
            </p>
          </div>

          <div>
            <h4 className="font-black text-slate-900">
              3. Customer Eligibility
            </h4>

            <p className="mt-1">
              Customers must satisfy the applicable age, identification,
              driving licence and other document requirements for the selected
              vehicle and rental arrangement. Additional documents may be
              requested before vehicle handover.
            </p>
          </div>

          <div>
            <h4 className="font-black text-slate-900">
              4. Rental Charges
            </h4>

            <p className="mt-1">
              Displayed prices may be illustrative and may vary depending on
              rental duration, vehicle category, season, demand, deposits,
              taxes, fuel requirements, additional services and other agreed
              rental conditions.
            </p>
          </div>

          <div>
            <h4 className="font-black text-slate-900">
              5. Security Deposit
            </h4>

            <p className="mt-1">
              A security deposit may be required depending on the vehicle and
              rental arrangement. Any applicable deposit, refund conditions and
              deductions will be communicated before confirmation of the
              rental.
            </p>
          </div>

          <div>
            <h4 className="font-black text-slate-900">
              6. Vehicle Use
            </h4>

            <p className="mt-1">
              Rented vehicles must be used responsibly and only for lawful
              purposes. Customers are responsible for complying with applicable
              traffic laws, parking regulations and restrictions communicated
              by the rental provider.
            </p>
          </div>

          <div>
            <h4 className="font-black text-slate-900">
              7. Traffic Fines and Penalties
            </h4>

            <p className="mt-1">
              Traffic fines, parking penalties, toll charges and other
              liabilities arising from the customer's use of the vehicle may
              be the responsibility of the customer where applicable.
            </p>
          </div>

          <div>
            <h4 className="font-black text-slate-900">
              8. Vehicle Condition
            </h4>

            <p className="mt-1">
              Customers should inspect the vehicle at handover and report any
              visible damage or issue before beginning the rental. Customers
              may be responsible for damage caused during the rental period
              according to the agreed rental terms.
            </p>
          </div>

          <div>
            <h4 className="font-black text-slate-900">
              9. Fuel and Return
            </h4>

            <p className="mt-1">
              Fuel requirements and return conditions may vary by vehicle and
              rental agreement. The vehicle should be returned at the agreed
              time, location and condition unless otherwise agreed with the
              rental team.
            </p>
          </div>

          <div>
            <h4 className="font-black text-slate-900">
              10. Cancellation and Changes
            </h4>

            <p className="mt-1">
              Cancellation, extension, early return or changes to a confirmed
              rental may be subject to availability and applicable charges.
              Customers should contact the rental team as early as possible
              when requesting a change.
            </p>
          </div>

          <div>
            <h4 className="font-black text-slate-900">
              11. Website Information
            </h4>

            <p className="mt-1">
              We make reasonable efforts to keep vehicle information and
              displayed content useful and current. However, specifications,
              availability, photographs and pricing may change and should be
              verified with the rental team before confirmation.
            </p>
          </div>

          <div>
            <h4 className="font-black text-slate-900">
              12. Contact and Support
            </h4>

            <p className="mt-1">
              For questions regarding a vehicle, booking, documents, rental
              charges or other conditions, customers should contact Orange
              Drive Rentals using the phone, email or WhatsApp details
              displayed on the website.
            </p>
          </div>

          <div className="rounded-xl bg-orange-50 p-3 text-[10px] leading-5 text-orange-800 sm:p-4 sm:text-xs sm:leading-6">
            <strong>Important:</strong> These website terms are intended as a
            general rental-business template. Before using them as legally
            binding terms for an actual rental business, have them reviewed
            and adapted by a qualified legal professional for the applicable
            laws and your exact rental practices.
          </div>
        </LegalModal>
      )}
    </>
  );
}

/* =========================================================
   SOCIAL ICON
========================================================= */
function SocialIcon({ href, label, icon: I, external = false }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={label}
      className="grid h-8 w-8 place-items-center rounded-lg bg-white text-orange-600 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:bg-orange-500 hover:text-white hover:shadow-md sm:h-9 sm:w-9 sm:rounded-xl"
    >
      <I size={15} className="sm:hidden" />
      <I size={17} className="hidden sm:block" />
    </a>
  );
}