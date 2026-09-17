import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import AboutDetail from "./pages/AboutDetail.jsx";
import Sermons from "./pages/Sermons.jsx";
import SermonDetail from "./pages/SermonDetail.jsx";
import Gallery from "./pages/Gallery.jsx";
import GalleryAlbumDetail from "./pages/GalleryAlbumDetail.jsx";
import Youth from "./pages/Youth.jsx";
import Contact from "./pages/Contact.jsx";
import Resources from "./pages/Resources.jsx";
import ResourceCategoryDetail from "./pages/ResourceCategoryDetail.jsx";
import NextStep from "./pages/NextStep.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Home */}
        <Route index element={<Home />} />

        {/* Public pages */}
        <Route path="about" element={<About />} />
        <Route path="about/:slug" element={<AboutDetail />} />
        <Route path="sermons" element={<Sermons />} />
        <Route path="sermons/:slug" element={<SermonDetail />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="gallery/:slug" element={<GalleryAlbumDetail />} />
        <Route path="youth" element={<Youth />} />
        <Route path="contact" element={<Contact />} />
        <Route path="resources" element={<Resources />} />
        <Route path="resources/category/:categorySlug" element={<ResourceCategoryDetail />} />
        <Route path="next-steps" element={<NextStep />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="py-16 text-center">
              <h1 className="text-3xl font-bold">Page not found</h1>
              <p className="mt-2 text-slate-600">
                The page you are looking for doesn’t exist.
              </p>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}