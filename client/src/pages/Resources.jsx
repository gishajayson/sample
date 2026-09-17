import Container from "../components/Container.jsx";
import resourcesData from "../data/resources.json";
import { Link } from "react-router-dom";
import { FolderOpen, ChevronRight } from "lucide-react";

export default function Resources() {
  const categories = resourcesData.categories || [];

  return (
    <Container>
      <h1 className="text-3xl font-bold">Resources</h1>
      <p className="mt-2 text-slate-600">
        Newsletters, documents, and useful downloads. Choose a category to browse.
      </p>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/resources/category/${cat.slug}`}
            className="group rounded-xl border bg-white p-5 hover:border-cfc-cta hover:shadow-md transition-all flex items-start gap-4"
          >
            <div className="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-cfc-cta/10 transition-colors">
              <FolderOpen className="h-6 w-6 text-slate-700 group-hover:text-cfc-cta" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-slate-900 group-hover:text-cfc-cta transition-colors">
                {cat.title}
              </div>
              <p className="mt-1 text-sm text-slate-600 line-clamp-2">
                {cat.description}
              </p>
              <span className="mt-2 inline-flex items-center gap-1 text-sm text-cfc-cta font-semibold">
                View resources
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        ))}

        {categories.length === 0 && (
          <div className="text-slate-600">No resource categories available.</div>
        )}
      </div>
    </Container>
  );
}
