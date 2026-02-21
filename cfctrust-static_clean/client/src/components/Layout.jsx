import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <div className="min-h-dvh bg-slate-50 text-slate-900">
      <Navbar />
      <main className="py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
