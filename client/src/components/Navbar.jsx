import { NavLink } from "react-router-dom";
import Container from "./Container.jsx";
import { ArrowRight } from "lucide-react";
// Put these files here:
// client/src/assets/logo.png
// client/src/assets/header-bg.jpeg
import logo from "../assets/logo.png";
import headerBg from "../assets/header-bg.jpeg";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/sermons", label: "Sermons" },
  { to: "/gallery", label: "Gallery" },
  // { to: "/qa", label: "Q&A" },
  { to: "/resources", label: "Resources" },
  { to: "/youth", label: "Scripture Class" },
  { to: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  return (
    <header className="bg-cfc-bg">
      {/* ===== Top Banner ===== */}
      <div
        className="border-b"
        style={{
          backgroundImage: `url(${headerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="bg-cfc-dark/40">
          <Container>
            <div className="py-8 md:py-10 flex items-center gap-4">
              {/* Logo */}
              <img
                src={logo}
                alt="Church logo"
                className="h-12 w-12 md:h-14 md:w-14 rounded-full object-contain bg-white/70 p-1"
              />

              {/* Title */}
              <div className="flex-1">
                <div className="text-xl md:text-2xl font-bold text-white drop-shadow">
                  Christ Followers Church
                </div>
              </div>

              {/* Verse moved to Home hero */}
            </div>
          </Container>
        </div>
      </div>

      {/* ===== Navigation Bar ===== */}
      <div className="bg-cfc-dark">
        <Container>
          <div className="flex items-center justify-between py-2">
            {/* LEFT: normal tabs */}
            <nav className="flex flex-wrap items-center gap-2">
              {navItems.map((x) => (
                <NavLink
                  key={x.to}
                  to={x.to}
                  className={({ isActive }) =>
                    [
                      "px-4 py-2 rounded text-white text-sm font-semibold transition",
                      "hover:bg-cfc-callout/40",
                      isActive ? "bg-cfc-callout/60 ring-2 ring-white/30" : "",
                    ].join(" ")
                  }
                >
                  {x.label}
                </NavLink>
              ))}
            </nav>

            {/* RIGHT: distinct CTA 
            <NavLink
              to="/next-steps"
              className={({ isActive }) =>
                [
                  "px-5 py-2 rounded-full font-extrabold text-sm transition",
                  "bg-cfc-cta text-white shadow",
                  "hover:opacity-90",
                  "border border-white/30",
                  isActive ? "ring-2 ring-white/40" : "",
                ].join(" ")
              }
            >
              Next Step
            </NavLink>*/}

      <NavLink
        to="/next-steps"
        className={({ isActive }) =>
          [
            "group ml-4 px-5 py-2 rounded-full transition",
            "bg-cfc-cta text-white shadow",
            "hover:opacity-95 hover:shadow-md",
            "border border-white/30",
            isActive ? "ring-2 ring-white/40" : "",
            "flex items-center gap-3",
            "cfc-cta-pulse",  
          ].join(" ")
        }
      >
        <div className="leading-tight">
          <div className="font-extrabold text-sm">Next Steps</div>
          <div className="text-[11px] text-white/85">New here?</div>
        </div>

        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </NavLink>



            
          </div>
        </Container>
      </div>
    </header>
  );
}