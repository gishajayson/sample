export default function handler(req, res) {
  const message =
    "Hi Christ Followers Church, I would like to know more.";

  const phone = process.env.WHATSAPP_NUMBER;

  if (!phone) {
    return res.status(500).send("WhatsApp number not configured.");
  }

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return res.redirect(302, whatsappUrl);
}