import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import Container from "../components/Container.jsx";
import { api } from "../lib/api.js";

export default function StaticPage() {
  const { slug } = useParams();
  const [page, setPage] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get(`/api/pages/${slug}`);
        setPage(res.data);
      } catch (e) {
        setError(e?.response?.data?.error || "Not found");
      }
    })();
  }, [slug]);

  return (
    <Container>
      {error && <div className="text-red-600">{error}</div>}
      {!page && !error && <div className="text-slate-600">Loading…</div>}
      {page && (
        <>
          <h1 className="text-3xl font-bold">{page.title}</h1>
          <div
            className="prose max-w-none mt-6 bg-white rounded-xl border p-6"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(page.content_html) }}
          />
        </>
      )}
    </Container>
  );
}
