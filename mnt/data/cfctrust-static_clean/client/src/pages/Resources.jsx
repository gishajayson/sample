import Container from "../components/Container.jsx";
import resources from "../data/resources.json";
import { FileText, Download, ExternalLink } from "lucide-react";

export default function Resources() {
  // newest first (optional)
  const items = [...(resources || [])].sort(
    (a, b) =>
      new Date(b.date || "1970-01-01") - new Date(a.date || "1970-01-01"),
  );

  return (
    <Container>
      <h1 className="text-3xl font-bold">Resources</h1>
      <p className="mt-2 text-slate-600">
        Newsletters, documents, and useful downloads.
      </p>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {items.map((x) => (
          <div key={x.id} className="rounded-xl border bg-white p-4">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center">
                <FileText className="h-5 w-5 text-slate-700" />
              </div>

              <div className="flex-1">
                <div className="font-semibold text-slate-900">{x.title}</div>
                <div className="mt-1 text-sm text-slate-600">
                  {x.category ? x.category : "Resource"}
                  {x.date ? ` • ${x.date}` : ""}
                </div>

                <div className="mt-3 flex gap-3">
                  {/* View / Open */}
                  <a
                    href={x.file}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sky-700 font-semibold hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View
                  </a>

                  {/* Download */}
                  <a
                    href={x.file}
                    download
                    className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:underline"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <div className="text-slate-600">No resources uploaded yet.</div>
        )}
      </div>
    </Container>
  );
}
