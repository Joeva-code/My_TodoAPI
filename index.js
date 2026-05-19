import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todo.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/todo", todoRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
