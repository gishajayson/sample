import { NavLink, useNavigate } from "react-router-dom";
import Container from "./Container.jsx";

// Put these files here:
// client/src/assets/logo.png
// client/src/assets/header-bg.jpg
import logo from "../assets/logo.png";
import headerBg from "../assets/header-bg.jpg";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/sermons", label: "Sermons" },
  { to: "/events", label: "Events" },
 // { to: "/qa", label: "Q&A" },
  { to: "/resources", label: "Resources" },
  { to: "/youth", label: "Scripture Class" },
  { to: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const navigate = useNavigate();

  // Colors close to your screenshot
  const NAV_BLUE = "#0A6EA8";
  const NAV_BLUE_HOVER = "#095F90";

  return (
    <header className="bg-white">
      {/* ===== Top Banner (cloud background + darker overlay) ===== */}
      <div
        className="border-b"
        style={{
          backgroundImage: `url(${headerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay (increase / decrease opacity to match darkness) */}
        <div className="bg-sky-900/35">
          <Container>
            <div className="py-4 flex items-center gap-4">
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

              {/* Verse badge */}
              <div className="hidden md:block">
                <div className="max-w-[420px] rounded-lg border-2 border-sky-600 bg-white/85 px-4 py-2 text-sky-800 italic text-sm leading-snug shadow-sm">
                  “And you shall call His name <b>Jesus</b> for He will save His
                  people from their sins”
                  <div className="not-italic text-right font-semibold mt-1">
                    – Matthew 1:21
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* ===== Blue Navigation Bar ===== */}
      <div style={{ backgroundColor: NAV_BLUE }}>
        <Container>
          <div className="flex items-center justify-between">
            <nav className="flex flex-wrap items-center gap-2 py-2">
              {navItems.map((x) => (
                <NavLink
                  key={x.to}
                  to={x.to}
                  className={({ isActive }) =>
                    [
                      "px-4 py-2 rounded text-white text-sm font-semibold",
                      "transition",
                      // ✅ Active tab: dark background, readable text
                      isActive
                        ? "bg-sky-900 text-white ring-2 ring-white/40"
                        : "",
                    ].join(" ")
                  }
                  onMouseEnter={(e) => {
                    // hover only if NOT active
                    if (!e.currentTarget.className.includes("bg-sky-900")) {
                      e.currentTarget.style.backgroundColor = NAV_BLUE_HOVER;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!e.currentTarget.className.includes("bg-sky-900")) {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  {x.label}
                </NavLink>
              ))}
            </nav>

            {/* Search icon */}
            <button
              onClick={() => navigate("/search")}
              className="ml-3 h-10 w-10 flex items-center justify-center rounded text-white transition"
              style={{ backgroundColor: "transparent" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = NAV_BLUE_HOVER)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
              title="Search"
              aria-label="Search"
            >
              🔍
            </button>
          </div>
        </Container>
      </div>
    </header>
  );
}
