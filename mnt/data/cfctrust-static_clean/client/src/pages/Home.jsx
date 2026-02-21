import { useMemo } from "react";
import Container from "../components/Container.jsx";
import Hero from "../components/Hero.jsx";
import Card from "../components/Card.jsx";
import { formatDate, formatDateTime } from "../lib/date.js";

// ✅ Local JSON data (no API / no MySQL)
import sermonsData from "../data/sermons.json";
import eventsData from "../data/events.json";

// Icons
import { CalendarDays, Clock, MapPin, Play } from "lucide-react";

function RefCard({ title, children }) {
  return (
    <div className="rounded-xl border-2 border-sky-600 bg-white p-6">
      <div className="text-sky-700 font-bold">{title}</div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export default function Home() {
  // Take latest 3 sermons/events (published only)
  const sermons = useMemo(() => {
    return (sermonsData || [])
      .filter((x) => x.is_published !== false)
      .sort((a, b) => new Date(b.sermon_date) - new Date(a.sermon_date))
      .slice(0, 3);
  }, []);

  const events = useMemo(() => {
    return (eventsData || [])
      .filter((x) => x.is_published !== false)
      .sort((a, b) => new Date(b.event_start) - new Date(a.event_start))
      .slice(0, 3);
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <Hero />

      <Container>
        {/* TOP BLOCKS */}
        <section className="grid md:grid-cols-2 gap-6 items-start">
          {/* 1) Meetings (left) */}
          <div className="rounded-xl border-2 border-sky-600 bg-white p-6">
            <div className="flex flex-col items-center text-center">
              <CalendarDays className="h-9 w-9 text-sky-700" />
              <h2 className="mt-2 text-xl font-bold text-sky-700">
                Our Meetings
              </h2>
            </div>

            <div className="mt-6 text-slate-700 space-y-6">
              {/* Main Meeting */}
              <div>
                <div className="font-semibold text-slate-700">
                  Main Meeting (Sharjah):
                </div>

                <div className="mt-2 flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-1 text-slate-500" />
                  <div>
                    <span className="font-semibold text-red-600">Sundays</span>{" "}
                    <span className="text-slate-700">@ 1:30 PM – 3:30 PM,</span>
                  </div>
                </div>

                <div className="mt-2 flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-1 text-slate-500" />
                  <div className="text-sky-700">
                    Hall 2, Sharjah Union Church
                  </div>
                </div>
              </div>

              {/* Bible Study */}
              <div>
                <div className="font-semibold text-slate-700">
                  Online Meeting:
                </div>

                <div className="mt-2 flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-1 text-slate-500" />
                  <div>
                    <span className="font-semibold text-red-600">
                      Thursdays
                    </span>{" "}
                    <span className="text-slate-700">
                      @ 8:00 PM – 10:30 PM,
                    </span>
                  </div>
                </div>

                <div className="mt-2 flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-1 text-slate-500" />
                  <div className="text-slate-600">Online Meeting</div>
                </div>
              </div>

              {/* Scripture Class */}
              <div>
                <div className="font-semibold text-slate-700">
                  Scripture Class:
                </div>

                <div className="mt-2 flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-1 text-slate-500" />
                  <div>
                    <span className="font-semibold text-red-600">Sundays</span>{" "}
                    <span className="text-slate-700">
                      @ 12:30 PM – 1:30 PM,
                    </span>
                  </div>
                </div>

                <div className="mt-2 flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-1 text-slate-500" />
                  <div className="text-slate-600">Online Meeting</div>
                </div>
              </div>

              <div className="text-slate-600">
                Our meetings are in English. All are welcome.
              </div>

              <div className="text-slate-600">
                For any queries, please{" "}
                <a
                  href="/contact"
                  className="text-sky-700 font-semibold hover:underline"
                >
                  contact us
                </a>
                .
              </div>
            </div>
          </div>

          {/* Right column: YouTube + Calendar */}
          <div className="flex flex-col gap-6">
            {/* 2) YouTube */}
            <RefCard title="YouTube">
              <div className="text-slate-700 font-semibold">
                Visit us on YouTube for more messages.
              </div>

              <div className="mt-4 flex justify-center">
                <div className="h-16 w-20 rounded-xl bg-white border flex items-center justify-center shadow-sm">
                  <a
                    href="https://www.youtube.com/@cfctrust"
                    target="_blank"
                    rel="noreferrer"
                    className="h-10 w-10 rounded-full bg-red-600 flex items-center justify-center"
                    title="Open YouTube channel"
                  >
                    <Play className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>
            </RefCard>

            {/* 3) Birthdays & Anniversaries Calendar */}
            <RefCard title="Birthdays & Anniversaries">
              <div className="text-slate-600 text-sm">
                Anniversaries are in{" "}
                <span className="font-semibold text-pink-700">Red</span>.
                Birthdays are in{" "}
                <span className="font-semibold text-purple-700">Purple</span>.
              </div>

              <div className="mt-4 overflow-hidden rounded-lg border bg-white h-[520px]">
                <iframe
                  title="CFC Calendar"
                  // Month view
                  src="https://calendar.google.com/calendar/embed?wkst=1&ctz=Asia%2FDubai&showPrint=0&showCalendars=0&showTz=0&showTitle=0&showTabs=0&showNav=1&mode=MONTH&src=dmkwbGJscXJrYmNhZjI3YzIxdmI3NjRoc2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=c3VwZm92MmpiOXV2bHNibmpscnYwdGZob3NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23d81b60&color=%238e24aa"
                  className="w-full h-full"
                  style={{ border: 0, display: "block" }}
                  frameBorder="0"
                  scrolling="no"
                />
              </div>

              <div className="mt-3 text-xs text-slate-500">
                If the calendar doesn’t load for others, set both calendars to{" "}
                <b>Public</b> in Google Calendar settings.
              </div>
            </RefCard>
          </div>
        </section>

        {/* RECENT SERMONS + RECENT EVENTS (side-by-side on desktop) */}
        <section className="mt-10 grid md:grid-cols-2 gap-8 items-start">
          {/* Sermons */}
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Recent Sermons</h2>
              <a className="text-sm text-slate-600 hover:underline" href="/sermons">
                View all
              </a>
            </div>

            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {sermons.map((x) => (
                <Card
                  key={x.id}
                  title={x.title}
                  subtitle={x.speaker ? `By: ${x.speaker}` : " "}
                  meta={formatDate(x.sermon_date)}
                  href={`/sermons/${x.slug}`}
                />
              ))}
              {sermons.length === 0 && (
                <div className="text-slate-600">No sermons yet.</div>
              )}
            </div>
          </div>

          {/* Events */}
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Recent Events</h2>
              <a className="text-sm text-slate-600 hover:underline" href="/events">
                View all
              </a>
            </div>

            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {events.map((x) => (
                <Card
                  key={x.id}
                  title={x.title}
                  subtitle={x.speaker ? `By: ${x.speaker}` : " "}
                  meta={formatDateTime(x.event_start)}
                  href={`/events/${x.slug}`}
                />
              ))}
              {events.length === 0 && (
                <div className="text-slate-600">No events yet.</div>
              )}
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
