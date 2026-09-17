import { Link } from "react-router-dom";
import Container from "./Container.jsx";
import heroImg from "../assets/frontpage_pic1.jpg"; // ✅ change file name if different

export default function Hero() {
  return (
    <div className="bg-cfc-bg border-y border-cfc-callout/40">
      <Container>
        <div className="py-10 md:py-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
          
            <div className="mt-4 inline-flex max-w-xl rounded-xl border border-[#d4c9b8] bg-white/70 px-4 py-3 text-cfc-dark italic text-sm leading-snug shadow-sm">
              <div>
                “And you shall call His name <span className="font-semibold">Jesus</span> for He will save His
                people from their sins”
                <div className="not-italic text-right font-semibold mt-1">
                  – Matthew 1:21
                </div>
              </div>
            </div>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold leading-tight text-cfc-dark">
              Followed to make Followers
            </h1>
            <p className="mt-4 text-cfc-dark/85">
              We are Pentecostal Christian community in Sharjah where everyone
              is welcome — whether you are new to faith, returning to church, or
              looking for a spiritual home. Our desire is to grow together in
              God’s Word, prayer, and genuine fellowship..
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                to="/contact"
                className="px-4 py-2 rounded bg-cfc-cta text-white font-semibold hover:opacity-90"
              >
                Visit Us
              </Link>
              <Link
                to="/sermons"
                className="px-4 py-2 rounded border border-cfc-dark/30 bg-white/70 hover:bg-cfc-card transition font-semibold"
              >
                Recent Sermons
              </Link>
            </div>
          </div>
         
          {/* ✅ HERO IMAGE */}
          <div className="rounded-xl overflow-hidden border border-cfc-callout/40 bg-cfc-card/60 aspect-[16/9]">
            <img
              src={heroImg}
              alt="Christ Followers Church"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
