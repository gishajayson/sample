import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import StaticPage from "./pages/StaticPage.jsx";
import Sermons from "./pages/Sermons.jsx";
import SermonDetail from "./pages/SermonDetail.jsx";
import Events from "./pages/Events.jsx";
import EventDetail from "./pages/EventDetail.jsx";
import Youth from "./pages/Youth.jsx";
import Contact from "./pages/Contact.jsx";
import Resources from "./pages/Resources.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Home */}
        <Route index element={<Home />} />

        {/* Public pages */}
        <Route path="about" element={<About />} />
        <Route path="about/:slug" element={<StaticPage />} />
        <Route path="sermons" element={<Sermons />} />
        <Route path="sermons/:slug" element={<SermonDetail />} />
        <Route path="events" element={<Events />} />
        <Route path="events/:slug" element={<EventDetail />} />
        <Route path="youth" element={<Youth />} />
        <Route path="contact" element={<Contact />} />
        <Route path="resources" element={<Resources />} />

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