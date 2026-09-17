import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../components/Container.jsx";
import galleryData from "../data/gallery.json";
import { ArrowLeft, Images, X } from "lucide-react";

export default function GalleryAlbumDetail() {
  const { slug } = useParams();
  const albums = galleryData?.albums || [];
  const album = albums.find((a) => a.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!album) {
    return (
      <Container>
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 text-cfc-cta font-semibold hover:underline mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Gallery
        </Link>
        <h1 className="text-3xl font-bold">Album not found</h1>
      </Container>
    );
  }

  const pictures = album.pictures || [];

  return (
    <Container>
      <Link
        to="/gallery"
        className="inline-flex items-center gap-2 text-cfc-cta font-semibold hover:underline mb-4"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Gallery
      </Link>

      <h1 className="text-3xl font-bold">{album.title}</h1>
      {album.description && (
        <p className="mt-2 text-slate-600">{album.description}</p>
      )}
      <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
        <Images className="h-4 w-4" />
        {pictures.length} photo{pictures.length !== 1 ? "s" : ""} • {album.date}
      </div>

      <div
        className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        onContextMenu={(e) => e.preventDefault()}
      >
        {pictures.map((pic, idx) => (
          <button
            key={pic.id}
            onClick={() => setLightboxIndex(idx)}
            className="aspect-square rounded-xl overflow-hidden border border-slate-200 bg-slate-100 hover:ring-2 hover:ring-cfc-cta/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cfc-cta"
          >
            <img
              src={pic.src}
              alt={pic.alt || `${album.title} - ${idx + 1}`}
              className="h-full w-full object-cover select-none"
              loading="lazy"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              style={{ WebkitUserSelect: "none", userSelect: "none", WebkitTouchCallout: "none" }}
              onError={(e) => {
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%2394a3b8'%3E%3Crect width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='12'%3ENo image%3C/text%3E%3C/svg%3E";
              }}
            />
          </button>
        ))}
      </div>

      {pictures.length === 0 && (
        <div className="py-16 text-center text-slate-600 rounded-xl border border-dashed border-slate-300 bg-slate-50">
          <Images className="h-12 w-12 mx-auto mb-2 opacity-50" />
          <p>No photos in this album yet.</p>
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 select-none"
          onClick={() => setLightboxIndex(null)}
          onContextMenu={(e) => e.preventDefault()}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Escape" && setLightboxIndex(null)}
          aria-label="Close lightbox"
          style={{ WebkitUserSelect: "none", userSelect: "none", WebkitTouchCallout: "none" }}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 p-2 text-white hover:bg-white/20 rounded-full"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={pictures[lightboxIndex]?.src}
            alt={pictures[lightboxIndex]?.alt || ""}
            className="max-h-[90vh] max-w-full object-contain pointer-events-none"
            draggable={false}
            style={{ WebkitUserSelect: "none", userSelect: "none", WebkitTouchCallout: "none" }}
          />
        </div>
      )}
    </Container>
  );
}
