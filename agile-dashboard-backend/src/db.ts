import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

export async function connectDB() {
    const db = await open({
        filename: path.join(process.cwd(), 'database', 'database.db'),
        driver: sqlite3.Database
    })

    await db.exec(
        `CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            status TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`
    )
    console.log("Connected to the database and ensured tasks table exists.");
    return db;
}