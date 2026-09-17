import Container from "../components/Container.jsx";
import { Link } from "react-router-dom";

const sections = [
  {
    slug: "about-cfc-dubai",
    label: "CFC Dubai",
    preview:
      "CFC Dubai is a Christ-centered, Bible-believing church family committed to worship, discipleship, and building lives through God’s Word.",
  },
  {
    slug: "about-cfc-india",
    label: "CFC India",
    preview:
      "CFC India is involved in mission work across India—sharing the Gospel, strengthening believers, and serving communities in Christ’s name.",
  },
  {
    slug: "what-we-believe",
    label: "What We Believe",
    preview:
      "We believe in Jesus Christ as Lord and Savior, and in the Holy Bible as God’s true Word and our guide for faith and life.",
  },
  {
    slug: "our-vision",
    label: "Our Vision",
    preview:
      "Journeying together in Christ and His Word—building believers, strengthening families, and reaching more souls for the Lord.",
  },
];

export default function About() {
  return (
    <Container>
      <h1 className="text-3xl font-bold">About Us</h1>

      <p className="mt-3 text-slate-700 max-w-3xl leading-relaxed">
        We are a Christ-centered, Bible-believing church family with a heart for
        missions. Our desire is to grow together in God’s Word, strengthen
        believers, build the church, and reach more souls for Christ—locally and
        beyond.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-5">
        {sections.map(({ slug, label, preview }) => (
          <Link
            key={slug}
            to={`/about/${slug}`}
            className="group rounded-2xl border border-cfc-callout/50 bg-cfc-card p-5 hover:shadow-md hover:border-cfc-cta/60 transition-colors flex flex-col gap-3"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-sm font-semibold uppercase tracking-wide text-cfc-cta">
                  {label}
                </div>

                <div className="mt-1 h-0.5 w-10 rounded-full bg-cfc-cta/60 group-hover:w-16 group-hover:bg-cfc-cta transition-all" />
              </div>

              <div className="text-[11px] px-3 py-1.5 rounded-full bg-white/70 text-cfc-dark/80 border border-cfc-callout/60 group-hover:bg-white transition-colors">
                Learn more
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">
              {preview}
            </p>
          </Link>
        ))}
      </div>
    </Container>
  );
}