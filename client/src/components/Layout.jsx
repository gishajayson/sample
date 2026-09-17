import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import WhatsAppFloat from "./WhatsAppFloat.jsx";

export default function Layout() {
  return (
    <div className="min-h-dvh bg-cfc-bg text-cfc-dark">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      {/* ✅ WhatsApp floating button */}
      <WhatsAppFloat />
    </div>
  );
}
