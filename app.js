const express = require ("express");
const morgan = require ("morgan");
const cors =require ("cors");

const authRouter = require('./routes/authRouter.js');
const productRouter = require ("./routes/productRouter.js");
const reviewsRouter = require ('./routes/reviewsRouter.js');
const storenearestRouter = require ('./routes/storesRouter.js')
const cartRouter =require('./routes/CartRout.js');

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const {DB_HOST} = process.env;
mongoose.set('strictQuery', true);

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/user", authRouter);
app.use("/api/products", productRouter);
app.use("/api/customer-reviews", reviewsRouter);
app.use("/api/stores", storenearestRouter);
app.use("/api/cart", cartRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

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