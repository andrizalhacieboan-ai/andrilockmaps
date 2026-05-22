import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { db } from "./database.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(__dirname));

app.get("/api/health", async (_, res) => {
  try {
    const result = await db.execute("SELECT datetime('now') as now");
    res.json({ status: "ok", time: result.rows[0]?.now || null });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

app.post("/api/login", (req, res) => {
  const { userId, password } = req.body;
  if (userId === "andriyt" && password === "andriyt002") {
    return res.json({ success: true, message: "Login berhasil" });
  }
  return res.status(401).json({ success: false, message: "Login gagal" });
});

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`KasirKu server jalan di port ${PORT}`);
});
