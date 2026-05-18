import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todo.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/todo", todoRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
