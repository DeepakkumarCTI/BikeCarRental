
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { initStorage } from "./utils";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";

import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import VehicleDetails from "./pages/VehicleDetails";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return null;
}

export default function App() {
  const [boot, setBoot] = useState(true);
  const location = useLocation();

  // Hide Navbar and Footer on all admin pages
  const isAdminPage = location.pathname.startsWith("/admin");

  useEffect(() => {
    initStorage();

    const t = setTimeout(() => {
      setBoot(false);
    }, 1300);

    return () => clearTimeout(t);
  }, []);

  if (boot) return <PageLoader />;

  return (
    <>
      <ScrollToTop />

      {!isAdminPage && <Navbar />}

      <main className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/vehicles" element={<Vehicles />} />

          <Route
            path="/vehicles/:id"
            element={<VehicleDetails />}
          />

          <Route
            path="/booking/:id"
            element={<Booking />}
          />

          <Route path="/contact" element={<Contact />} />

          <Route
            path="/admin/login"
            element={<AdminLogin />}
          />

          <Route
            path="/admin"
            element={<AdminDashboard />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </main>

      {!isAdminPage && <Footer />}
    </>
  );
}
