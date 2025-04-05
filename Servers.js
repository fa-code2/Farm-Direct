import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";
import { connectDB } from "./config/DB.js";
import router from "./Routes/router.js"; 
import Product from "./product.model.js";

config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(json());

app.use(cors());

connectDB();

app.use("/api/products", router);

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is running on port ${PORT}`);
  } else {
    console.log(`Error occurred, server can't start`, error);
  }
})

