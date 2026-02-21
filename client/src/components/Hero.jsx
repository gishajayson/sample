import Container from "./Container.jsx";

export default function Hero() {
  return (
    <div className="bg-white border-y">
      <Container>
        <div className="py-10 md:py-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-sm uppercase tracking-wider text-slate-500">
              Dubai, U.A.E.
            </div>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold leading-tight">
              Followed to make Followers
            </h1>
            <p className="mt-4 text-slate-700">
              We are Pentecostal Christian community in Sharjah where everyone
              is welcome — whether you are new to faith, returning to church, or
              looking for a spiritual home. Our desire is to grow together in
              God’s Word, prayer, and genuine fellowship..
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="/contact"
                className="px-4 py-2 rounded bg-slate-900 text-white hover:opacity-90"
              >
                Visit Us
              </a>
              <a
                href="/sermons"
                className="px-4 py-2 rounded border hover:bg-slate-100"
              >
                Recent Sermons
              </a>
            </div>
          </div>
          <div className="rounded-xl border bg-slate-100 aspect-[16/9] flex items-center justify-center text-slate-500">
            Add a hero image / carousel here
          </div>
        </div>
      </Container>
    </div>
  );
}
