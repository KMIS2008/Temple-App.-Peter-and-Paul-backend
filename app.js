const express = require ("express");
const morgan = require ("morgan");
const cors =require ("cors");
const Visit=require ("./model/visits");

const visitsRouter = require ("./routes/visitsRouter.js");

// const authRouter = require('./routes/authRouter.js');


const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const {DB_HOST} = process.env;
mongoose.set('strictQuery', true);

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/visits", visitsRouter);

// app.use("/api/user", authRouter);


app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

// const initializeCounter = async () => {
//   const existing = await Visit.findOne();
//   if (!existing) {
//     await new Visit({ count: 0 }).save();
//   }
// };
// initializeCounter();

mongoose.connect(DB_HOST)
.then(()=>{
  console.log('Database connection successful');
  app.listen(3002, () => {
  console.log("Server is running. Use our API on port: 3002");
})})
.catch(error=>{
  console.log(error.message)
  process.exit(1)
})