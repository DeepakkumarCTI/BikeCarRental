# Orange Drive — Bike & Car Rental Website

A responsive React + Tailwind rental website prototype for bikes and cars.

## Included

- React + Vite + Tailwind CSS
- Light orange/amber visual system (no dark theme)
- Responsive mobile/tablet/desktop UI
- Animated full-screen loading screen with moving car
- Home page with fleet highlights
- Bike/car vehicle listing
- Search and filters by type, category, location and availability
- Vehicle detail pages
- Rental pricing (hour/day)
- Date/time, pickup/drop selection
- Customer enquiry form
- WhatsApp redirection with a prefilled enquiry message
- Enquiries saved to localStorage
- Admin login and dashboard
- Add / edit / delete vehicles
- Toggle vehicle availability
- Vehicle image URL support
- Enquiry status management
- Attractive footer
- Social links
- Privacy Policy and Terms & Conditions popup
- No backend required for this demo

## Run

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Admin

Demo credentials:

- Username: `admin`
- Password: `Admin@123`

## Important production/security note

This version intentionally uses browser `localStorage` because the project requirement requested local storage for data and image URLs. A browser-only admin login cannot be considered secure authentication because users can inspect or modify localStorage.

For a real production rental business, keep the React frontend but add a backend such as Node/Express + MongoDB/PostgreSQL:

1. Store admin passwords only as server-side hashes (bcrypt/argon2).
2. Use short-lived access tokens and secure, HttpOnly cookies.
3. Authorize every vehicle/booking admin operation on the server.
4. Store customer and booking records in a database.
5. Validate dates, prices, vehicle IDs and customer input server-side.
6. Use a proper image storage service (Cloudinary/S3/etc.) rather than localStorage.
7. Add rate limiting, CSRF protection where applicable, audit logs and HTTPS.
8. Replace the demo WhatsApp number and contact details with the business's real values.

## Main files

- `src/pages/Home.jsx`
- `src/pages/Vehicles.jsx`
- `src/pages/VehicleDetails.jsx`
- `src/pages/Booking.jsx`
- `src/pages/Contact.jsx`
- `src/pages/AdminLogin.jsx`
- `src/pages/AdminDashboard.jsx`
- `src/components/Navbar.jsx`
- `src/components/Footer.jsx`
- `src/components/PageLoader.jsx`
- `src/components/VehicleCard.jsx`
- `src/data.js`
- `src/utils.js`

## Business customisation

Update the following before deployment:

- WhatsApp number in `src/pages/Booking.jsx`
- Phone/email/location in `src/components/Footer.jsx` and `src/pages/Contact.jsx`
- Social profile URLs in `src/components/Footer.jsx`
- Seed vehicles in `src/data.js`
- Brand name/logo and legal text

The current vehicle images use remote image URLs. Admin-added vehicle images are also represented as image URLs and persisted in localStorage.
