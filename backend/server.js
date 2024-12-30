import express from "express";
import connectDB from "./database/db.js";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
connectDB();

const port = process.env.PORT;
const app = express();

//Middleware
app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(port, () =>
  console.log(`Server is listening to http://localhost:${port}`)
);
