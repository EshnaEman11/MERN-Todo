const express = require("express");
const dotenvFlow = require("dotenv-flow");
const todoRoutes = require("./routes/todoRoutes");
const cors = require("cors");
const { baseRoot } = require("./controllers/todoController");

// Initialize environment variables
dotenvFlow.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// -------------------------------------------------------------
// ⚠️ MOCK MODE ACTIVATED: DATABASE CONNECTION BYPASSED
// -------------------------------------------------------------
const mongoose = require("mongoose");

// We tell mongoose to globally turn off buffering so hidden models 
// do not hang your frontend requests!
mongoose.set("bufferCommands", false); 

console.log("⚠️ Mock Mode: Database connection fully disabled. Buffering stopped.");
// -------------------------------------------------------------

// Routes
app.get("/", baseRoot);
app.use("/api", todoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server is running in MOCK MODE on port ${PORT}`);
});