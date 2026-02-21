import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container.jsx";
import { api } from "../lib/api.js";
import { formatDate } from "../lib/date.js";

function embedUrl(youtubeUrl) {
  if (!youtubeUrl) return null;
  // supports normal watch?v= and youtu.be links
  const m1 = youtubeUrl.match(/v=([a-zA-Z0-9_-]+)/);
  const m2 = youtubeUrl.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  const id = (m1 && m1[1]) || (m2 && m2[1]);
  return id ? `https://www.youtube.com/embed/${id}` : null;
}

export default function SermonDetail() {
  const { slug } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get(`/api/sermons/${slug}`);
        setItem(res.data);
      } catch (e) {
        setError(e?.response?.data?.error || "Not found");
      }
    })();
  }, [slug]);

  if (error) return <Container><div className="text-red-600">{error}</div></Container>;
  if (!item) return <Container><div className="text-slate-600">Loading…</div></Container>;

  const yt = embedUrl(item.youtube_url);

  return (
    <Container>
      <h1 className="text-3xl font-bold">{item.title}</h1>
      <div className="mt-2 text-slate-600">
        By <span className="font-semibold text-slate-800">{item.speaker}</span> • {formatDate(item.sermon_date)}
      </div>

      {item.summary && <p className="mt-6 text-slate-700">{item.summary}</p>}

      {yt && (
        <div className="mt-6 rounded-xl overflow-hidden border bg-white aspect-video">
          <iframe className="w-full h-full" src={yt} title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
        </div>
      )}

      {item.audio_url && (
        <div className="mt-6 rounded-xl border bg-white p-4">
          <div className="font-semibold">Audio</div>
          <audio className="mt-3 w-full" controls src={item.audio_url} />
        </div>
      )}
    </Container>
  );
}
