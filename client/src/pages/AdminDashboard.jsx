import { useEffect, useState } from "react";
import Container from "../components/Container.jsx";
import { api, setAuthToken } from "../lib/api.js";

function Section({ title, endpoint, fields }) {
  const empty = Object.fromEntries(fields.map(f => [f, ""]));
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ ...empty });
  const [status, setStatus] = useState("");

  async function load() {
    const res = await api.get(endpoint);
    setItems(Array.isArray(res.data) ? res.data : res.data.items || []);
  }

  useEffect(() => { load(); }, []);

  async function save(e) {
    e.preventDefault();
    setStatus("Saving…");
    try {
      await api.post(endpoint, form);
      setStatus("Saved.");
      setForm({ ...empty });
      await load();
    } catch (err) {
      setStatus(err?.response?.data?.error || "Save failed");
    }
  }

  async function del(id) {
    if (!confirm("Delete?")) return;
    await api.delete(`${endpoint}/${id}`);
    await load();
  }

  return (
    <div className="rounded-xl border bg-white p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{title}</h2>
        <button className="text-sm text-slate-600 hover:underline" onClick={load}>Refresh</button>
      </div>

      <form onSubmit={save} className="mt-4 grid md:grid-cols-2 gap-3">
        {fields.map((k) => (
          <input key={k} className="border rounded px-3 py-2" placeholder={k}
                 value={form[k] ?? ""} onChange={(e) => setForm({ ...form, [k]: e.target.value })} />
        ))}
        <button className="md:col-span-2 px-4 py-2 rounded bg-slate-900 text-white hover:opacity-90">Save</button>
      </form>

      {status && <div className="mt-2 text-sm text-slate-600">{status}</div>}

      <div className="mt-6 text-sm text-slate-600">Existing</div>
      <div className="mt-2 flex flex-col gap-2">
        {items.map((x) => (
          <div key={x.id} className="flex items-center justify-between border rounded px-3 py-2">
            <div className="truncate">
              <div className="font-semibold truncate">{x.title}</div>
              {x.slug && <div className="text-xs text-slate-500">{x.slug}</div>}
            </div>
            <button className="text-sm text-red-600 hover:underline" onClick={() => del(x.id)}>Delete</button>
          </div>
        ))}
        {items.length === 0 && <div className="text-slate-600">No items.</div>}
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setAuthToken(token);
    setReady(true);
  }, []);

  function logout() {
    localStorage.removeItem("token");
    setAuthToken(null);
    location.href = "/admin";
  }

  if (!ready) return null;

  return (
    <Container>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button className="px-3 py-2 rounded border hover:bg-slate-100" onClick={logout}>Logout</button>
      </div>

      <div className="mt-6 grid gap-6">
        <Section title="Pages" endpoint="/api/pages"
          fields={["title", "slug", "content_html", "is_published"]} />
        <Section title="Sermons" endpoint="/api/sermons"
          fields={["title", "slug", "speaker", "sermon_date", "summary", "youtube_url", "audio_url", "image_url", "is_published"]} />
        <Section title="Events" endpoint="/api/events"
          fields={["title", "slug", "speaker", "event_start", "event_end", "location", "description_html", "image_url", "is_published"]} />
      </div>
    </Container>
  );
}
