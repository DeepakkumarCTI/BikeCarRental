import { seedVehicles, seedBookings } from "./data";

export const getStored = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch { return fallback; }
};

export const setStored = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const initStorage = () => {
  if (!localStorage.getItem("od_vehicles")) setStored("od_vehicles", seedVehicles);
  if (!localStorage.getItem("od_bookings")) setStored("od_bookings", seedBookings);
  if (!localStorage.getItem("od_admin")) {
    setStored("od_admin", { username: "admin", password: "Admin@123", name: "Orange Drive Admin" });
  }
};

export const money = (n) => `₹${Number(n || 0).toLocaleString("en-IN")}`;

export const makeId = (prefix = "id") => `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

export const whatsappUrl = (phone, message) =>
  `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
