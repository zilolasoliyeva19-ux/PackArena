import { timingSafeEqual } from "node:crypto";

const attempts = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 8;

function safeEqual(a, b) {
  const left = Buffer.from(String(a || ""));
  const right = Buffer.from(String(b || ""));
  if (left.length !== right.length || left.length === 0) return false;
  return timingSafeEqual(left, right);
}

export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "same-origin");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ authorized: false, error: "Faqat POST so‘rovi ruxsat etiladi." });
  }

  const secret = process.env.ADMIN_SECRET;
  if (!secret || secret.length < 24) {
    return res.status(503).json({
      authorized: false,
      error: "Admin kirishi sozlanmagan. Vercel Environment Variables’da kamida 24 belgili ADMIN_SECRET yarating va qayta deploy qiling."
    });
  }

  const forwarded = req.headers["x-forwarded-for"];
  const ip = String(forwarded || req.socket?.remoteAddress || "unknown").split(",")[0].trim();
  const now = Date.now();
  const record = attempts.get(ip);
  if (record && now - record.startedAt < WINDOW_MS && record.count >= MAX_ATTEMPTS) {
    return res.status(429).json({ authorized: false, error: "Urinishlar vaqtincha cheklangan. 10 daqiqadan keyin urinib ko‘ring." });
  }
  if (!record || now - record.startedAt >= WINDOW_MS) attempts.set(ip, { startedAt: now, count: 1 });
  else attempts.set(ip, { ...record, count: record.count + 1 });

  const authorization = String(req.headers.authorization || "");
  const token = authorization.startsWith("Bearer ") ? authorization.slice(7).trim() : "";
  if (!safeEqual(token, secret)) {
    return res.status(401).json({ authorized: false, error: "Admin kaliti noto‘g‘ri." });
  }

  attempts.delete(ip);
  return res.status(200).json({ authorized: true });
}
