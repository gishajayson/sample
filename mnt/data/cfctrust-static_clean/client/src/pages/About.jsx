import Container from "../components/Container.jsx";

export default function About() {
  return (
    <Container>
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="mt-3 text-slate-700">
        This section can contain a short introduction and links to sub-pages.
      </p>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {[
          ["/about/about-cfc-dubai", "About CFC Dubai"],
          ["/about/about-zac-poonen", "About (Speaker/Founder)"],
          ["/about/what-we-believe", "What We Believe"],
          ["/about/our-vision", "Our Vision"],
          ["/about/financial-policy", "Our Financial Policy"],
        ].map(([to, label]) => (
          <a key={to} href={to} className="rounded-xl border bg-white p-4 hover:shadow-sm">
            <div className="font-semibold">{label}</div>
            <div className="text-sm text-slate-600 mt-1">Editable in Admin → Pages</div>
          </a>
        ))}
      </div>
    </Container>
  );
}
