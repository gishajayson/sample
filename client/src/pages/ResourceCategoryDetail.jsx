import Container from "../components/Container.jsx";
import resourcesData from "../data/resources.json";
import { useParams, Link } from "react-router-dom";
import { FileText, Download, ExternalLink, ArrowLeft, Youtube } from "lucide-react";

export default function ResourceCategoryDetail() {
  const { categorySlug } = useParams();
  const categories = resourcesData.categories || [];
  const items = resourcesData.items || [];

  const category = categories.find((c) => c.slug === categorySlug);

  const categoryItems = category
    ? items
        .filter((r) => r.category === category.title)
        .sort(
          (a, b) =>
            new Date(b.date || "1970-01-01") - new Date(a.date || "1970-01-01")
        )
    : [];

  if (!category) {
    return (
      <Container>
        <Link
          to="/resources"
          className="inline-flex items-center gap-2 text-cfc-cta font-semibold hover:underline mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Resources
        </Link>
        <h1 className="text-3xl font-bold">Category not found</h1>
        <p className="mt-2 text-slate-600">
          The resource category you're looking for doesn't exist.
        </p>
      </Container>
    );
  }

  return (
    <Container>
      <Link
        to="/resources"
        className="inline-flex items-center gap-2 text-cfc-cta font-semibold hover:underline mb-4"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Resources
      </Link>

      <h1 className="text-3xl font-bold">{category.title}</h1>
      <p className="mt-2 text-slate-600">{category.description}</p>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {categoryItems.map((x) => {
          const isLink = x.type === "link" || x.file?.startsWith("http");
          const viewHref = isLink
            ? x.file
            : (x.file?.startsWith("/") ? x.file : `/${x.file}`);
          return (
            <div key={x.id} className="rounded-xl border bg-white p-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                  {isLink ? (
                    <a
                      href={viewHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full h-full rounded-lg hover:bg-red-50 transition-colors"
                      aria-label="Open video"
                    >
                      <Youtube className="h-5 w-5 text-red-600" />
                    </a>
                  ) : (
                    <FileText className="h-5 w-5 text-slate-700" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-slate-900">{x.title}</div>
                  <div className="mt-1 text-sm text-slate-600">
                    {x.date ? x.date : ""}
                  </div>
                  <div className="mt-3 flex gap-3">
                    <a
                      href={viewHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cfc-cta font-semibold hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View
                    </a>
                    {!isLink && (
                      <a
                        href={viewHref}
                        download
                        className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:underline"
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {categoryItems.length === 0 && (
          <div className="text-slate-600 col-span-full">
            No resources in this category yet.
          </div>
        )}
      </div>
    </Container>
  );
}