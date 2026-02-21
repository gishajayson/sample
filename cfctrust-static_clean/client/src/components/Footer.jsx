import Container from "./Container.jsx";

export default function Footer() {
  return (
    <footer className="border-t mt-12 bg-white">
      <Container>
        <div className="py-8 text-sm text-slate-600 flex flex-col gap-2">
          <div className="font-semibold text-slate-800">Quick Access</div>
          <div className="flex flex-wrap gap-4">
            <a className="hover:underline" href="/sermons">Sermons</a>
            <a className="hover:underline" href="/events">Events</a>
            <a className="hover:underline" href="/about">About</a>
            <a className="hover:underline" href="/contact">Contact</a>
          </div>
          <div className="pt-4">
            © {new Date().getFullYear()} Christ Followers Church Dubai. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
