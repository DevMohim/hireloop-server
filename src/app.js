import express from 'express'


const app = express()


app.use(express.json())


app.get('/', (req, res)=> {
   res.send({message: 'Server running successfully'})
})

app.use((req, res) => {
  res.status(404).json({ message: "Route পাওয়া যায়নি" });
});

// যেকোনো error ধরার জন্য
app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Server error" });
});

export default app