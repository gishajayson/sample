import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import Container from "../components/Container.jsx";
import { api } from "../lib/api.js";
import { formatDateTime } from "../lib/date.js";

export default function EventDetail() {
  const { slug } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get(`/api/events/${slug}`);
        setItem(res.data);
      } catch (e) {
        setError(e?.response?.data?.error || "Not found");
      }
    })();
  }, [slug]);

  if (error) return <Container><div className="text-red-600">{error}</div></Container>;
  if (!item) return <Container><div className="text-slate-600">Loading…</div></Container>;

  return (
    <Container>
      <h1 className="text-3xl font-bold">{item.title}</h1>
      <div className="mt-2 text-slate-600">
        {formatDateTime(item.event_start)}
        {item.location ? ` • ${item.location}` : ""}
      </div>

      {item.speaker && <div className="mt-2 text-slate-700">Speaker: <span className="font-semibold">{item.speaker}</span></div>}

      {item.description_html && (
        <div
          className="prose max-w-none mt-6 bg-white rounded-xl border p-6"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.description_html) }}
        />
      )}
    </Container>
  );
}
