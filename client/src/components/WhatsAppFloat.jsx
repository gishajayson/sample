export default function WhatsAppFloat() {
  // ✅ Put your WhatsApp number here in international format (no +, no spaces)
  // UAE example: 9715XXXXXXXX
  const phone = "9715XXXXXXXX";
  const message = encodeURIComponent("Hi, I would like to know more about CFC Trust.");

  const link = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-green-600 px-4 py-3 text-white shadow-lg hover:bg-green-700 transition"
      title="Chat with us on WhatsApp"
    >
      <span className="text-lg">💬</span>
      <span className="font-semibold hidden sm:inline">WhatsApp</span>
    </a>
  );
}