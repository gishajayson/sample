import Container from "../components/Container.jsx";
import { Construction } from "lucide-react";

export default function UnderConstruction() {
  return (
    <Container>
      <div className="py-16 text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-600 mb-6">
          <Construction className="h-8 w-8" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900">
          Page is under construction
        </h1>
        <p className="mt-3 text-slate-600 max-w-md mx-auto">
          We're working on this page. Please check back soon.
        </p>
      </div>
    </Container>
  );
}
