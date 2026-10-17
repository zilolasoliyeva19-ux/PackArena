import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import adminHandler from "../api/admin.js";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, "../dist");
const port = process.env.PORT || 3000;

app.disable("x-powered-by");
app.use(express.json({ limit: "10kb" }));
app.post("/api/admin", (req, res) => adminHandler(req, res));
app.use(express.static(distPath));
app.get("*", (_req, res) => res.sendFile(path.join(distPath, "index.html")));
app.listen(port, "0.0.0.0", () => {
  console.log(`PackArena running on port ${port}`);
});
