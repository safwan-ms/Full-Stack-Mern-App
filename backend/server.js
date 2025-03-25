import express from "express";
import connectDB from "./database/db.js";
import dotenv from "dotenv";
import path from "path";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
connectDB();

const port = process.env.PORT;
const app = express();

const __dirname = path.resolve();

//Middleware
app.use(express.json());

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}
app.listen(port, () =>
  console.log(`Server is listening to http://localhost:${port}`)
);
