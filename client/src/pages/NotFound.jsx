import Container from "../components/Container.jsx";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Container>
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-cfc-dark/80">
        Go back to <Link className="underline text-cfc-cta" to="/">Home</Link>.
      </p>
    </Container>
  );
}
