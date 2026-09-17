import Container from "../components/Container.jsx";
import { useParams, Link } from "react-router-dom";

const SECTIONS = {
  "about-cfc-dubai": {
    title: "CFC Dubai",
    intro:
      "CFC Dubai is a Christ-centered, Bible-believing church family committed to worship, discipleship, and building lives through God’s Word.",
    paragraphs: [
      "CFC Dubai is a Christ-centered, Bible-believing church family where people gather to worship the Lord, grow in His Word, and strengthen one another in faith. We believe the church is not just a place we attend, but a spiritual family God is building—one life at a time.",
      "Our desire is to see believers rooted in Scripture, strengthened through prayer, and equipped to serve. As we grow together, we also seek to impact our community with the love of Christ—reflecting His compassion, truth, and grace.",
    ],
  },
  "about-cfc-india": {
    title: "CFC India",
    intro:
      "CFC India is involved in mission works across India—sharing the Gospel, strengthening believers, and serving communities in Christ’s name.",
    paragraphs: [
      "CFC India carries a strong heart for missions and outreach across India. Through prayer, Gospel sharing, discipleship, and support to local ministries, we seek to serve people and lead them closer to Jesus Christ.",
      "We believe mission work is the heartbeat of the church—obeying Christ’s call to go, preach the Gospel, and make disciples. Our efforts are focused on reaching lives with the hope of salvation and strengthening believers to grow in faith and service.",
    ],
    sections: [
      {
        heading: "Key Focus",
        items: [
          "Mission work and Gospel outreach in different regions",
          "Supporting local ministries and believers",
          "Encouraging discipleship, prayer, and spiritual growth",
          "Reaching more souls for God through service and compassion",
        ],
      },
    ],
  },
  "what-we-believe": {
    title: "What We Believe",
    intro:
      "We believe in Jesus Christ as Lord and Savior, and in the Holy Bible as God’s true Word and our guide for faith and life.",
    paragraphs: [
      "Our faith is centered on the Lord Jesus Christ and the truth of His Word. We believe the Bible is God’s living Word—our foundation for doctrine, direction, and daily life. We exist to glorify God through worship, prayer, obedience, and a life that reflects Christ.",
      "We also believe the church is called to grow in holiness and love, build one another up in faith, and share the Gospel so that more souls may come to know the Lord.",
    ],
    sections: [
      {
        heading: "Our Core Beliefs",
        items: [
          "Jesus Christ is Lord and Savior; salvation is through Him alone",
          "The Holy Bible is God’s Word—true, living, and authoritative",
          "Prayer, worship, and obedience are essential to Christian living",
          "The church is God’s family—called to grow, serve, and disciple",
          "We are called to share the Gospel and win souls for the Lord",
        ],
      },
      {
        heading: "Key Focus",
        items: [
          "Bible-based teaching and discipleship for all age groups",
          "Prayer, worship, and fellowship as a church family",
          "Building the church by building people—spiritually and faithfully",
          "Reaching out with Christ’s love through service and ministry",
        ],
      },
    ],
  },
  "our-vision": {
    title: "Our Vision",
    intro:
      "Journeying together in Christ and His Word—building believers, strengthening families, and reaching souls for the Lord.",
    paragraphs: [
      "Journeying together in Christ and His Word is the heart of our vision. We desire to be a church that is rooted in Scripture, led by prayer, and filled with love—raising a faithful generation and impacting society for Christ.",
      "We believe God strengthens the church by strengthening His people. As we grow in Christ, we also commit ourselves to the Great Commission—reaching out, sharing the Gospel, and bringing more souls to God.",
    ],
    sections: [
      {
        heading: "Vision in Action",
        items: [
          "To build a stronger church by nurturing stronger believers",
          "To guide children, youth, and families closer to God",
          "To grow in Scripture, prayer, worship, and discipleship",
          "To reach more souls for the Lord and serve society with Christ’s love",
        ],
      },
    ],
  },
};

export default function AboutDetail() {
  const { slug } = useParams();
  const data = SECTIONS[slug];

  if (!data) {
    return (
      <Container>
        <div className="py-16">
          <p className="text-slate-600 mb-4">Section not found.</p>
          <Link
            to="/about"
            className="text-cfc-cta font-semibold hover:underline"
          >
            ← Back to About
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Link
        to="/about"
        className="inline-flex items-center gap-2 text-cfc-cta font-semibold hover:underline mb-4 text-sm"
      >
        <span aria-hidden>←</span> Back to About
      </Link>

      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p className="mt-3 text-slate-700 max-w-3xl">{data.intro}</p>

      <div className="mt-6 max-w-3xl space-y-4 text-slate-700 leading-relaxed">
        {data.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {data.sections?.map((section) => (
        <div key={section.heading} className="mt-8 max-w-3xl">
          <h2 className="text-xl font-semibold text-cfc-dark">
            {section.heading}
          </h2>
          <ul className="mt-3 list-disc list-inside space-y-1 text-slate-700 text-sm">
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </Container>
  );
}

