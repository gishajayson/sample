import { useState } from "react";
import Container from "../components/Container.jsx";
import { api, setAuthToken } from "../lib/api.js";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault();
    setError("");
    try {
      const res = await api.post("/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      setAuthToken(res.data.token);
      nav("/admin/dashboard");
    } catch (e2) {
      setError(e2?.response?.data?.error || "Login failed");
    }
  }

  return (
    <Container>
      <h1 className="text-3xl font-bold">Admin</h1>
      <form onSubmit={submit} className="mt-6 max-w-md rounded-xl border bg-white p-6 flex flex-col gap-3">
        <input className="border rounded px-3 py-2" placeholder="Email" value={email}
               onChange={(e) => setEmail(e.target.value)} required />
        <input className="border rounded px-3 py-2" placeholder="Password" type="password" value={password}
               onChange={(e) => setPassword(e.target.value)} required />
        <button className="px-4 py-2 rounded bg-slate-900 text-white hover:opacity-90">Login</button>
        {error && <div className="text-sm text-red-600">{error}</div>}
      </form>
    </Container>
  );
}
