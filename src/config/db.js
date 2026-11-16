import { MongoClient } from "mongodb";
import { env } from "../env.js";

const client = new MongoClient(env.MONGODB_URI);

export const db = client.db(env.DB_NAME);

export const connectDB = async () => {
  await client.connect();
  await client.db("admin").command({ ping: 1 });
  console.log("MongoDB connected");
};
