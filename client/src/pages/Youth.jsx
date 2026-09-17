import Container from "../components/Container.jsx";

export default function Youth() {
  return (
    <Container>
      <h1 className="text-3xl font-bold">Scripture Class</h1>
      <p className="mt-2 text-sm md:text-base font-medium italic tracking-wide text-[#5c4a3d]">
        Journeying together in Christ and His Word.
      </p>
      <p className="mt-4 text-slate-700 max-w-3xl">
        Sunday School is a blessed ministry that helps children receive a strong foundation in Christ—
        shaping their faith, character, and spiritual discipline from an early age. We consider this a vital
        part of church life, because when children grow in the Word of God, they grow into committed disciples
        and faithful soldiers for Christ.
      </p>

      <div className="mt-8 grid lg:grid-cols-[1.6fr,1.1fr] gap-8 items-start">
        {/* Left: Story & Purpose */}
        <div className="space-y-6">
          <section className="rounded-2xl border border-[#d4c9b8] bg-[#f5f0e8] p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#5c4a3d]">A Growing Work of Grace</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#4b3b30]">
              Our Scripture Class began quietly more than three decades ago. What started in a simple and humble
              way has continued by God’s grace as a steady work of nurturing young hearts. Over the years, we have
              remained committed to teaching children the Scriptures in a way they can understand, love, and apply.
              Through Bible lessons, memory verses, worship, prayer, and interactive learning, we help children know
              who God is and why His Word matters in everyday life.
            </p>
          </section>

          <section className="rounded-2xl border border-[#d4c9b8] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#5c4a3d]">Children Close to God&apos;s Heart</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              We believe children are not only the future of the church, but also a precious part of God’s kingdom
              today. Our aim is to guide each child into a personal relationship with Jesus Christ and help them grow
              in obedience, kindness, and godly values. As they mature, we encourage them to live out their faith at
              home, in school, and in society—becoming lights for Christ wherever God places them.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Our prayer is that every child who comes through this ministry will be rooted in biblical truth,
              strengthened in faith, and equipped to stand firm. With God’s help, we continue this mission of bringing
              children closer to the Lord, strengthening families, and winning souls for Christ—one life at a time.
            </p>
          </section>
        </div>

        {/* Right: Vision & Mission */}
        <aside className="space-y-6">
          <section className="rounded-2xl border border-[#d4c9b8] bg-[#f5f0e8] p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[#5c4a3d]">Our Vision</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#4b3b30]">
              To raise a generation of children grounded in Scripture, growing in Christ, and shining as His witnesses.
            </p>
          </section>

          <section className="rounded-2xl border border-[#d4c9b8] bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[#5c4a3d]">Our Mission</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>• To teach the Word of God clearly and faithfully</li>
              <li>• To help children develop a strong prayer life and love for worship</li>
              <li>• To nurture Christ-like character and godly values</li>
              <li>• To encourage children to live their faith in daily life</li>
              <li>• To support families in the spiritual growth of their children</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-[#b88c8c] bg-[#fdf7f5] p-5 shadow-sm">
            <p className="text-sm text-[#5c4a3d]">
              <span className="font-semibold text-[#8b5a5a]">
                “Train up a child in the way he should go, and when he is old he will not depart from it.”
              </span>
              <span className="block mt-2 text-xs text-[#5c4a3d]/80">– Proverbs 22:6</span>
            </p>
          </section>
        </aside>
      </div>
    </Container>
  );
}
