import { useMemo, useState } from "react";
import Container from "../components/Container.jsx";
import Card from "../components/Card.jsx";
import { formatDateTime } from "../lib/date.js";
import eventsData from "../data/events.json";

export default function Events() {
  const limit = 12;
  const [offset, setOffset] = useState(0);

  const published = useMemo(() => {
    return (eventsData || [])
      .filter((e) => e.is_published !== false)
      .sort((a, b) => new Date(b.event_start) - new Date(a.event_start));
  }, []);

  const items = published.slice(offset, offset + limit);
  const total = published.length;

  const nextOffset = offset + limit;
  const prevOffset = Math.max(offset - limit, 0);

  return (
    <Container>
      <h1 className="text-3xl font-bold">Events</h1>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {items.map((x) => (
          <Card
            key={x.id}
            title={x.title}
            subtitle={x.speaker ? `By: ${x.speaker}` : " "}
            meta={formatDateTime(x.event_start)}
            href={`/events/${x.slug}`}
          />
        ))}
        {items.length === 0 && (
          <div className="text-slate-600">No events yet.</div>
        )}
      </div>

      <div className="mt-8 flex gap-2">
        <button
          className="px-4 py-2 rounded border hover:bg-slate-100 disabled:opacity-50"
          onClick={() => setOffset(prevOffset)}
          disabled={offset === 0}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 rounded border hover:bg-slate-100 disabled:opacity-50"
          onClick={() => setOffset(nextOffset)}
          disabled={nextOffset >= total}
        >
          Next
        </button>
      </div>
    </Container>
  );
}
