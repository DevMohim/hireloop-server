import { MongoClient } from "mongodb";
import { env } from "../env.js";

const uri = env.MONGODB_URI
const client = new MongoClient(uri);

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}
