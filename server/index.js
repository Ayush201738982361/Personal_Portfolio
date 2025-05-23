const express = require("express");
const cors = require("cors");
const { connectDB } = require("./connection");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();
const port = process.env.PORT;
const url = process.env.MONGO_URL;
const FRONT_END = process.env.FRONT_END;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: `${FRONT_END}`,
  })
);
app.use("/", userRoutes);

connectDB(url)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Error in Connecting DB", err);
  });

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
