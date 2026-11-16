// dotenv সবার আগে load হতে হবে, নাহলে env.js undefined URI পাবে
import 'dotenv/config';
import app from "./app.js";
import { connectDB } from "./config/db.js";

const port = process.env.PORT || 5000;

try {
   await connectDB();

   app.listen(port, () => {
     console.log(`Server running on port ${port}`);
   });
} catch (error) {
   console.error("Database connect হয়নি:", error.message);
   process.exit(1);
}
