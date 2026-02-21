import Container from "../components/Container.jsx";

export default function Youth() {
  return (
    <Container>
      <h1 className="text-3xl font-bold">Scripture Class</h1>
      <div className="mt-6 rounded-xl border bg-white p-6 text-slate-700">
        Sunday schooling, helps provide children with a solid start towards
        becoming good soldiers for Christ. Our Scripture class started rather
        inconspicuously more than two decades ago, with about 10 kids & just two
        teachers. It has now grown to about 150 students with more than 30
        teachers actively teaching scriptures to children every week. By the
        grace of God, more than 350 students have grown & passed through our
        hands. We continue to involve in the process of guiding and bringing
        children closer to God; who will contribute to make a stronger society,
        winning souls for the LORD.
      </div>
      <div className="mt-6 rounded-xl border bg-white p-6 text-slate-700">
        Join us in our effort to{" "}
        <span className="font-semibold text-red-600">
          ‘Train up a child in the way he should: and when he is old; he will
          not depart from it.’
        </span>
      </div>
    </Container>
  );
}
