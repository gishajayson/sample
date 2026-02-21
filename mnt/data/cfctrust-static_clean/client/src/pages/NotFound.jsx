import Container from "../components/Container.jsx";

export default function NotFound() {
  return (
    <Container>
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-slate-700">Go back to <a className="underline" href="/">Home</a>.</p>
    </Container>
  );
}
