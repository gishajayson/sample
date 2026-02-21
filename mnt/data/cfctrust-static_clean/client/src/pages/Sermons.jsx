import { useMemo, useState } from "react";
import Container from "../components/Container.jsx";
import { formatDate } from "../lib/date.js";
import sermonsData from "../data/sermons.json";
import { Youtube } from "lucide-react";

export default function Sermons() {
  const limit = 12;
  const [offset, setOffset] = useState(0);

  const published = useMemo(() => {
    return (sermonsData || [])
      .filter((x) => x.is_published !== false)
      .sort((a, b) => new Date(b.sermon_date) - new Date(a.sermon_date));
  }, []);

  const items = published.slice(offset, offset + limit);
  const total = published.length;

  const nextOffset = offset + limit;
  const prevOffset = Math.max(offset - limit, 0);

  return (
    <Container>
      <div className="flex items-end justify-between">
        <h1 className="text-3xl font-bold">Sermons</h1>
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {items.map((x) => (
          <a
            key={x.id}
            href={x.youtube_url || "#"}
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition"
            title="Open on YouTube"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="font-bold text-slate-900 group-hover:underline truncate">
                  {x.title}
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  {x.speaker ? `By: ${x.speaker}` : "\u00A0"}
                </div>
                <div className="mt-2 text-sm text-slate-500">
                  {formatDate(x.sermon_date)}
                </div>
              </div>

              <div className="shrink-0 h-10 w-10 rounded-full bg-red-600 flex items-center justify-center">
                <Youtube className="h-5 w-5 text-white" />
              </div>
            </div>

            {x.summary ? (
              <div className="mt-3 text-sm text-slate-700 line-clamp-2">
                {x.summary}
              </div>
            ) : null}
          </a>
        ))}

        {items.length === 0 && (
          <div className="text-slate-600">No sermons yet.</div>
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
