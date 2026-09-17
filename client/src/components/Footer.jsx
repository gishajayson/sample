import { Link } from "react-router-dom";
import Container from "./Container.jsx";

export default function Footer() {
  return (
    <footer className="border-t mt-12 bg-cfc-dark text-white">
      <Container>
        <div className="py-8 text-sm text-white/85 flex flex-col gap-2">
          <div className="font-semibold text-white">Quick Access</div>
          <div className="flex flex-wrap gap-4">
            <Link className="hover:underline" to="/sermons">Sermons</Link>
            <Link className="hover:underline" to="/gallery">Gallery</Link>
            <Link className="hover:underline" to="/about">About</Link>
            <Link className="hover:underline" to="/contact">Contact</Link>
          </div>
          <div className="pt-4">
            © {new Date().getFullYear()} Christ Followers Church Dubai. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
