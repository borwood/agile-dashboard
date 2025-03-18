import express, { Request, Response } from "express";
import cors from "cors";
import { connectDB } from "./db.js"; // This is my first time importing a js file (not on disc) in typescript, and I hate it 
const app = express();
app.use(cors());
app.use(express.json());

app.get("/tasks", async (req: Request, res: Response) => {
  try {
    // Sample data
    const db = await connectDB();
    const tasks = await db.all('SELECT * FROM tasks');
    
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// This code sets up a simple Express server that listens on port 5000 or a port specified by the environment variable PORT.    