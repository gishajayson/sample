import { useMemo } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container.jsx";
import Hero from "../components/Hero.jsx";
import Card from "../components/Card.jsx";
import { formatDate, formatDateTime } from "../lib/date.js";

// ✅ Local JSON data (no API / no MySQL)
import sermonsData from "../data/sermons.json";
import galleryData from "../data/gallery.json";

// Icons
import { 
  CalendarDays, 
  Images,
  Clock, 
  MapPin, 
  Play, 
  ArrowRight, 
  Video,
  Users,
  BookOpen,
  ExternalLink,
  Moon
} from "lucide-react";

const RedUsers = (props) => <Users {...props} className="text-red-500" />;

// Premium Badge Component - with your beige colors
function Badge({ children, variant = "default", className = "" }) {
  const variants = {
    default: "bg-[#e8dfd1] text-[#5c4a3d] border-[#d4c9b8]",
    primary: "bg-[#d4c9b8] text-[#5c4a3d] border-[#c4b8a5]",
    secondary: "bg-[#f5f0e8] text-[#5c4a3d]/80 border-[#e8dfd1]",
    accent: "bg-gradient-to-r from-[#d4c9b8] to-[#e8dfd1] text-[#5c4a3d] border-[#c4b8a5]"
  };

  return (
    <span className={[
      "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold tracking-wide uppercase border backdrop-blur-sm",
      variants[variant],
      className
    ].join(" ")}>
      {children}
    </span>
  );
}

// Modernized Panel with your beige background
function Panel({ title, icon: Icon, children, className = "", variant = "default" }) {
  const variants = {
    default: "bg-[#e8dfd1] border-[#d4c9b8]",
    glass: "bg-[#e8dfd1]/90 backdrop-blur-xl border-[#d4c9b8]/80 shadow-xl shadow-[#5c4a3d]/5",
    elevated: "bg-[#e8dfd1] border-[#d4c9b8] shadow-lg shadow-[#5c4a3d]/5"
  };

  return (
    <div
      className={[
        "rounded-3xl border-2 overflow-hidden transition-all duration-300 hover:shadow-lg",
        variants[variant],
        className
      ].join(" ")}
    >
      <div className="px-6 pt-6">
        <div className="flex items-center gap-3">
          {Icon ? (
            <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-[#f5f0e8] to-[#e8dfd1] border border-[#d4c9b8] flex items-center justify-center shadow-sm">
              <Icon className="h-5 w-5 text-[#8b5a5a]" strokeWidth={2} />
            </div>
          ) : null}
          <div className="text-lg font-bold text-[#5c4a3d] tracking-tight">{title}</div>
        </div>
      </div>
      <div className="px-6 pb-6 pt-4">{children}</div>
    </div>
  );
}

// Modern Section Header
function SectionHeader({ title, to, linkLabel = "View all" }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1.5 rounded-full bg-gradient-to-b from-[#8b5a5a] to-[#d4c9b8]" />
        <h2 className="text-2xl font-bold text-[#5c4a3d] tracking-tight">{title}</h2>
      </div>
      {to ? (
        <Link 
          className="group flex items-center gap-1.5 text-sm font-semibold text-[#8b5a5a] hover:text-[#5c4a3d] transition-colors" 
          to={to}
        >
          {linkLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      ) : null}
    </div>
  );
}

// Meeting Card Component - Premium design with beige background
function MeetingCard({ title, schedule, location, icon: Icon, variant = "default" }) {
  const bgVariants = {
    default: "bg-gradient-to-br from-[#f5f0e8]/90 to-[#e8dfd1]/50 border-[#d4c9b8]",
    featured: "bg-gradient-to-br from-[#f5f0e8] to-[#e8dfd1] border-[#c4b8a5]"
  };

  return (
    <div className={[
      "rounded-2xl border p-5 transition-all duration-300 hover:shadow-md hover:border-[#c4b8a5]",
      bgVariants[variant]
    ].join(" ")}>
      <div className="flex items-start justify-between gap-3 mb-4">
        <Badge variant={variant === "featured" ? "primary" : "default"}>{title}</Badge>
        {Icon && <Icon className="h-5 w-5 text-[#5c4a3d]/30" />}
      </div>
      
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="h-8 w-8 rounded-lg bg-[#f5f0e8] border border-[#d4c9b8] flex items-center justify-center flex-shrink-0">
            <Clock className="h-4 w-4 text-[#8b5a5a]" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-md bg-[#e8dfd1] px-2.5 py-1 text-xs font-bold text-[#8b5a5a] uppercase tracking-wider">
                {schedule.day}
              </span>
              <span className="text-sm font-medium text-[#5c4a3d]/90">{schedule.time}</span>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="h-8 w-8 rounded-lg bg-[#f5f0e8] border border-[#d4c9b8] flex items-center justify-center flex-shrink-0">
            <MapPin className="h-4 w-4 text-[#8b5a5a]" />
          </div>
          <span className="text-sm font-medium text-[#5c4a3d]/80 leading-relaxed pt-1.5">{location}</span>
        </div>
      </div>
    </div>
  );
}

// YouTube Preview Card
function YouTubeCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br bg-[#e8dfd1]  p-6 text-white group cursor-pointer">
      <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-white/10 blur-2xl group-hover:scale-150 transition-transform duration-700" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 rounded-xl bg-you-tube backdrop-blur-sm flex items-center justify-center border .border-bg-you-tube">
            <Play className="h-6 w-6 you_tube fill-red" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-red-600 opacity-80">Subscribe</div>
            <div className="text-lg font-bold text-red-600 ">YouTube Channel</div>
          </div>
        </div>
        
        <p className="text-[#5c4a3d]/80 text-sm leading-relaxed mb-5 opacity-90">
          Watch our latest sermons, worship sessions, and special events.
        </p>
        
        <a
          href="https://www.youtube.com/@cfctrust"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-white text-red-600 px-4 py-2.5 text-sm font-bold hover:bg-red-50 transition-colors shadow-lg shadow-black/10"
        >
          Visit Channel
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}




// Enhanced Calendar Panel - Premium with beige
function CalendarPanel() {
  return (
    <Panel title="Birthdays & Anniversaries" icon={CalendarDays} className="h-full">
      

                 <div className="flex items-center gap-4 mb-4 text-xs font-medium">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-pink-500 shadow-sm shadow-pink-500/30" />
          <span className="text-cfc-dark/70">Anniversaries</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-purple-500 shadow-sm shadow-purple-500/30" />
          <span className="text-cfc-dark/70">Birthdays</span>
        </div>
      </div>

              {/* ✅ Smaller + cleaner calendar */}
              <div className="mt-4 overflow-hidden rounded-xl border border-cfc-callout/60 bg-cfc-bg h-[420px]">
                <iframe
                  title="CFC Calendar"
                  src="https://calendar.google.com/calendar/embed?wkst=1&ctz=Asia%2FDubai&showPrint=0&showCalendars=0&showTz=0&showTitle=0&showTabs=0&showNav=1&mode=MONTH&src=dmkwbGJscXJrYmNhZjI3YzIxdmI3NjRoc2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=c3VwZm92MmpiOXV2bHNibmpscnYwdGZob3NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23d81b60&color=%238e24aa"
                  className="w-full h-full"
                  style={{ border: 0, display: "block" }}
                  frameBorder="0"
                  scrolling="no"
                />
              </div>

              <div className="mt-3 text-xs text-cfc-dark/60">
                If the calendar doesn’t load for others, set both calendars to{" "}
                <b>Public</b> in Google Calendar settings.
              </div>
            </Panel>
  );
}

export default function Home() {
  const sermons = useMemo(() => {
    return (sermonsData || [])
      .filter((x) => x.is_published !== false)
      .sort((a, b) => new Date(b.sermon_date) - new Date(a.sermon_date))
      .slice(0, 4);
  }, []);

  const albums = useMemo(() => {
    return (galleryData?.albums || [])
      .sort((a, b) => new Date(b.date || "1970-01-01") - new Date(a.date || "1970-01-01"))
      .slice(0, 4);
  }, []);

  return (
    <div className="flex flex-col gap-12 bg-[#f5f0e8] min-h-screen pb-20">
      <Hero />

      <Container>
        {/* PREMIUM TOP SECTION - with beige background */}
        <section className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-stretch">
          {/* Left: Meetings - Premium Layout */}
          <Panel title="Service Times" icon={RedUsers} variant="elevated" className="h-full">
     
            <div className="space-y-4">
              <MeetingCard 
                title="Main Meeting (Sharjah)"
                schedule={{ day: "Sundays", time: "1:30 PM – 3:30 PM" }}
                location="Hall 2, Sharjah Union Church"
                variant="featured"
              />
              
              <div className="grid sm:grid-cols-2 gap-4">
                <MeetingCard 
                  title="Online Meeting"
                  schedule={{ day: "Thursdays", time: "8:00 PM – 10:30 PM" }}
                  location="Zoom / Online Platform"
                  icon={Video}
                />
                
                <MeetingCard 
                  title="Kid's Scripture Class"
                  schedule={{ day: "Sundays", time: "12:30 PM – 1:30 PM" }}
                  location="Hall 2, Sharjah Union Church"
                  icon={BookOpen}
                />
              </div>

              {/* Fasting Prayer - NEW */}
              <MeetingCard 
                title="Fasting Prayer"
                schedule={{ day: "Every 4th Saturday", ime: "10:00 AM" }}
                location="Online Meeting"
                icon={Moon}
                variant="featured"
              />

              {/* Info strip - Modernized with beige */}
              <div className="rounded-2xl border border-[#d4c9b8] bg-gradient-to-r from-[#f5f0e8] to-[#e8dfd1] p-5 mt-6">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#e8dfd1] border border-[#d4c9b8] flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-[#8b5a5a]" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-[#5c4a3d]">
                      "How good and how pleasant it is, when brothers dwell together as one" <span className="font-bold text-[#8b5a5a]">God Bless</span>. 
                      <span className="block mt-1 text-[#5c4a3d]/70">Everyone is welcome to join us.</span>
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-sm font-bold text-[#8b5a5a] hover:underline mt-2"
                    >
                      Contact us for queries <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Panel>

          {/* Right: YouTube + Calendar */}
          <div className="flex flex-col gap-6 h-full">
            <YouTubeCard />
            <div className="flex-1 min-h-0">
              <CalendarPanel />
            </div>
          </div>
        </section>

        {/* RECENT SERMONS + EVENTS - Premium Grid with beige */}
        <section className="mt-16 space-y-16">
          {/* Sermons Section */}
          <div>
            <SectionHeader title="Recent Sermons" to="/sermons" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {sermons.map((x, idx) => (
                <div key={x.id} className="group" style={{ animationDelay: `${idx * 100}ms` }}>
                  <Card
                    title={x.title}
                    subtitle={x.speaker ? `By ${x.speaker}` : " "}
                    meta={formatDate(x.sermon_date)}
                    href={`/sermons/${x.slug}`}
                    className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-[#e8dfd1] border-[#d4c9b8]"
                  />
                </div>
              ))}
              {sermons.length === 0 && (
                <div className="col-span-full py-12 text-center text-[#5c4a3d]/50 bg-[#e8dfd1]/50 rounded-2xl border border-dashed border-[#d4c9b8]">
                  <BookOpen className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>No sermons available yet.</p>
                </div>
              )}
            </div>
          </div>

          {/* Gallery Section */}
          <div>
            <SectionHeader title="Gallery" to="/gallery" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {albums.map((album, idx) => (
                <div key={album.id} className="group" style={{ animationDelay: `${idx * 100}ms` }}>
                  <Card
                    title={album.title}
                    subtitle={album.description || " "}
                    meta={album.date}
                    href={`/gallery/${album.slug}`}
                    imageSrc={album.coverImage}
                    imageAlt={album.title}
                    className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-[#e8dfd1] border-[#d4c9b8]"
                  />
                </div>
              ))}
              {albums.length === 0 && (
                <div className="col-span-full py-12 text-center text-[#5c4a3d]/50 bg-[#e8dfd1]/50 rounded-2xl border border-dashed border-[#d4c9b8]">
                  <Images className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>No albums yet.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}