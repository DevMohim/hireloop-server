import express from "express";
import cors from 'cors'
import jobRoutes from "./routes/jobs.route.js";

const app = express();

app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Server running successfully" });
});

// Route mount: 404 ar error handler er AGE
app.use("/jobs", jobRoutes);

// সব route এর পরে
app.use((req, res) => {
  res.status(404).json({ message: "Route পাওয়া যায়নি" });
});

// Error handler সবার শেষে, ৪টা parameter সহ
app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Server error" });
});

export default app;
