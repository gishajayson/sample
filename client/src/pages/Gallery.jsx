import Container from "../components/Container.jsx";
import galleryData from "../data/gallery.json";
import { Link } from "react-router-dom";
import { Images } from "lucide-react";

export default function Gallery() {
  const albums = (galleryData?.albums || []).sort(
    (a, b) => new Date(b.date || "1970-01-01") - new Date(a.date || "1970-01-01")
  );

  return (
    <Container>
      <h1 className="text-3xl font-bold">Gallery</h1>
      <p className="mt-2 text-slate-600">
        Browse our photo albums from worship services, events, and gatherings.
      </p>

      <div
        className="mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3"
        onContextMenu={(e) => e.preventDefault()}
      >
        {albums.map((album) => (
          <Link
            key={album.id}
            to={`/gallery/${album.slug}`}
            className="group block rounded-xl border border-cfc-callout/40 bg-cfc-card overflow-hidden transition duration-200 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cfc-callout/70"
          >
            <div className="h-0.5 w-full bg-cfc-callout/60 group-hover:bg-cfc-cta/80 transition" />
            <div className="relative aspect-square bg-slate-100 overflow-hidden">
              {album.coverImage ? (
                <img
                  src={album.coverImage}
                  alt={album.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-300 select-none"
                  loading="lazy"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  style={{ WebkitUserSelect: "none", userSelect: "none", WebkitTouchCallout: "none" }}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Images className="h-8 w-8 text-slate-400" />
                </div>
              )}
              <div className="absolute inset-0 bg-cfc-dark/10" />
              <div className="absolute bottom-1 left-1 right-1 flex items-center gap-1 text-white text-xs font-semibold drop-shadow">
                <Images className="h-3 w-3" />
                {album.pictures?.length || 0} photos
              </div>
            </div>
            <div className="p-2">
              <div className="font-semibold text-cfc-dark text-xs leading-tight line-clamp-2">{album.title}</div>
              <div className="mt-1 inline-flex rounded-full border border-cfc-callout/40 bg-white/60 px-2 py-0.5 text-[10px] font-semibold text-cfc-dark/80">
                {album.date}
              </div>
            </div>
          </Link>
        ))}

        {albums.length === 0 && (
          <div className="col-span-full py-12 text-center text-slate-600">
            No albums yet.
          </div>
        )}
      </div>
    </Container>
  );
}
