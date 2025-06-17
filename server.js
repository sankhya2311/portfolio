const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5410;

app.use(cors({
  origin: 'http://localhost:3000', // ganti dengan domain frontend kamu
  credentials: true
}));

app.use(express.json());

app.use("/api/projects", require("./routes/projects"));
app.use("/api/experiences", require("./routes/experiences"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
