import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

dotenv.config();

const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
connectDB();

// API Endpoints
app.use("/api/food", foodRouter);

// Serve uploaded images
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
    res.send("API Working");
});

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});