import { useState } from "react";
import Container from "../components/Container.jsx";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  async function submit(e) {
    e.preventDefault();
    setStatus("Sending…");
    try {
      // ✅ Works for a static site (no Node backend needed)
      // Uses FormSubmit (not Formspree). First time, you may need to confirm
      // the receiver email via a verification email from FormSubmit.
      const res = await fetch("https://formsubmit.co/ajax/gishajayson@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          _subject: "CFC Website - Contact Form",
          _captcha: "false",
        }),
      });

      if (!res.ok) {
        const t = await res.text();
        throw new Error(t || "Failed to send");
      }

      setStatus("Sent! We will get back to you soon.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus(err?.message || "Failed to send. Please try again.");
    }
  }

  return (
    <Container>
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-3 text-slate-700">Use this form or add phone/WhatsApp details below.</p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <form onSubmit={submit} className="rounded-xl border bg-white p-6 flex flex-col gap-3">
          <input className="border rounded px-3 py-2" placeholder="Name" value={form.name}
                 onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          <input className="border rounded px-3 py-2" placeholder="Email" type="email" value={form.email}
                 onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          <input className="border rounded px-3 py-2" placeholder="Phone (optional)" value={form.phone}
                 onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <textarea className="border rounded px-3 py-2 min-h-32" placeholder="Message" value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })} required />
          <button className="px-4 py-2 rounded bg-slate-900 text-white hover:opacity-90">Send</button>
          {status && <div className="text-sm text-slate-600">{status}</div>}
        </form>

        <div className="rounded-xl border bg-white p-6">
          <div className="font-semibold">Meeting Location</div>
          <div className="mt-2 text-slate-700">
            Add the full address and a Google Maps embed.
          </div>
          <div className="mt-4 aspect-video bg-slate-100 border rounded flex items-center justify-center text-slate-500">
            Maps embed placeholder
          </div>
        </div>
      </div>
    </Container>
  );
}
