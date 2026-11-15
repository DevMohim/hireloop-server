import app from "./app.js"
import 'dotenv/config'
import { connectToMongoDB } from "./config/db.js";


const port =  5000

try {

   const connectedClient = await connectToMongoDB()






   app.listen(port, () => {
     console.log("server running in port 5000");
   });
} catch (error) {
   console.error("Database connect হয়নি:", err.message);
   process.exit(1);
}