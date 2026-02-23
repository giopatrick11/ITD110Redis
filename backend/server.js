const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");

dotenv.config();

const app = express();

const requestLogger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  res.setHeader("X-Request-Timestamp", new Date().toISOString());
  next();
};

app.use(cors({
  exposedHeaders: ['X-Request-Timestamp']
}));
app.use(express.json());
app.use(requestLogger);


app.use("/api/students", studentRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Student CRUD API (Redis)" });
});

const PORT = process.env.PORT || 3000;

const start = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();
