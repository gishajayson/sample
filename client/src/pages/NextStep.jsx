import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Sparkles, Users, HeartHandshake, ChevronDown } from "lucide-react";

// ✅ Best: put the image in src/assets and import it
// Place file here: client/src/assets/nextstep.jpg
//import nextStepImg from "../assets/nextstep.jpg";

const items = [
  {
    title: "I WANT TO VISIT",
    icon: MapPin,
    content: [
      "We’re excited to meet you. Join us for one of our meetings:",
      "• Main Meeting (Sharjah): Sundays 1:30 PM – 3:30 PM",
      "• Online Meeting: Thursdays 8:00 PM – 10:30 PM",
      "• Scripture Class: Sundays 12:30 PM – 1:30 PM",
      "",
      "For any queries, please contact us.",
    ],
  },
  {
    title: "I'M NEW",
    icon: Sparkles,
    content: [
      "Welcome to Christ Followers Church Dubai.",
      "You are loved and valued here — come as you are.",
      "",
      "We focus on:",
      "• Worship • Prayer • Fellowship • God’s Word",
    ],
  },
  {
    title: "JOIN A MINISTRY",
    icon: Users,
    content: [
      "Want to serve? You can get involved in:",
      "• Worship Team",
      "• Media / Tech Team",
      "• Prayer Team",
      "• Youth Ministry",
      "",
      "Message us and we’ll help you get started.",
    ],
  },
  {
    title: "NEED PRAYER?",
    icon: HeartHandshake,
    content: [
      "We believe in the power of prayer.",
      "Share your prayer request and our team will pray with you.",
    ],
  },
];

export default function NextStep() {
  // ✅ All collapsed initially
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-cfc-bg">
      <Container>
        <div className="py-10 md:py-14">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-cfc-accent/20 text-cfc-navy px-3 py-1 text-sm font-semibold">
                <Sparkles size={16} />
                Next Steps
              </div>

              <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-cfc-navy leading-tight">
                Interested in Christ Followers Church?
                <span className="block text-cfc-navy/80">
                  Check out these next steps
                </span>
              </h1>

              <p className="mt-4 text-cfc-dark/80 max-w-xl">
                Tap a section to expand. These are simple ways to visit, connect,
                and grow with us.
              </p>

              <div className="mt-8 rounded-2xl border border-cfc-callout/40 bg-white/50 overflow-hidden">
                {items.map((it, idx) => {
                  const Icon = it.icon;
                  const isOpen = openIndex === idx;

                  return (
                    <div
                      key={it.title}
                      className="border-b last:border-b-0 border-cfc-callout/30"
                    >
                      <button
                        type="button"
                        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-white/60 transition"
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-xl bg-cfc-accent/25 flex items-center justify-center text-cfc-navy">
                            <Icon size={18} />
                          </div>
                          <div className="font-bold text-cfc-navy tracking-wide">
                            {it.title}
                          </div>
                        </div>

                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-cfc-navy/70"
                        >
                          <ChevronDown />
                        </motion.div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="px-5 overflow-hidden"
                          >
                            <div className="pb-5 text-cfc-dark/85 whitespace-pre-line leading-relaxed">
                              {it.content.join("\n")}
                            </div>

                            <div className="pb-5 flex flex-wrap gap-3">
                              <Link
                                to="/contact"
                                className="px-4 py-2 rounded-lg bg-cfc-cta text-white font-semibold hover:opacity-90 transition"
                              >
                                Contact Us
                              </Link>
                              <Link
                                to="/"
                                className="px-4 py-2 rounded-lg bg-white/70 border border-cfc-callout/30 text-cfc-navy font-semibold hover:bg-cfc-card/60 transition"
                              >
                                Back to Home
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:sticky lg:top-6">
              <div className="rounded-2xl overflow-hidden border border-cfc-callout/40 bg-cfc-card/40 shadow-sm">
                <div className="aspect-[4/3]">
                  <img
                    src="./nextstep.jpg"
                    alt="Next steps"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-5">
                  <div className="font-bold text-cfc-navy">You are welcome.</div>
                  <div className="mt-2 text-cfc-dark/80">
                    Whether you’re visiting for the first time or returning after
                    a while, we’re glad you’re here.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
}