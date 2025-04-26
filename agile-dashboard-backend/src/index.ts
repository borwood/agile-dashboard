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

app.post("/tasks", async (req: Request , res:Response) => {
  try {
    const { title, description, status } = req.body;
    if (!title) {
      res.status(400).send("Title is required");
      return;
    }

    const db = await connectDB();
    const result = await db.run(
      `INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)`,
      [title, description || '', status || 'Uncategorized']
    );
    res.status(201).json({ id: result.lastID, title, description, status });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding task");
  }
});

app.put("/tasks/:id", async (req: Request, res: Response) => {
  try {
    const {id} = req.params; //extract id from params
    const { title, description, status } = req.body;
    if (!title) {
      res.status(400).send("Title is required");
      return;
    }

    const db = await connectDB();
    await db.run(
      `UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?`,
      [title, description || '', status || 'Uncategorized', id]
    );
    res.status(200).send("Task updated successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating task");
  }
});

app.delete("/tasks/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const db = await connectDB();
    await db.run(`DELETE FROM tasks WHERE id = ?`, [id]);
    res.status(200).send("Task deleted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting task");
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// This code sets up a simple Express server that listens on port 5000 or a port specified by the environment variable PORT.    