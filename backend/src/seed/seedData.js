import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import Employee from "../models/Employee.js";

// Resolve __dirname in ES module context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error("MONGODB_URI not defined in .env");
  process.exit(1);
}

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    const dataPath = path.resolve(__dirname, "../data/Employees_Dataset.json");
    const raw = fs.readFileSync(dataPath, "utf-8");
    const { employees } = JSON.parse(raw);
    console.log(`Read ${employees.length} employee records from JSON`);

    // Insert many, ignore duplicates (unique index on id)
    const result = await Employee.insertMany(employees, { ordered: false }).catch(err => {
      // Log duplicate errors but continue
      if (err.code === 11000) {
        console.warn("Duplicate key error, some records were already present");
      } else {
        console.error(err);
      }
    });
    console.log(`Inserted ${result?.length || 0} new employee records`);
  } catch (err) {
    console.error("Seeding error:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
    process.exit(0);
  }
}

seed();
