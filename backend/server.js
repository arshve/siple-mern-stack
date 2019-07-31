const express = require("express"),
  cors = require("cors"),
  mongoose = require("mongoose"),
  exerciseRouter = require("./routes/exercise"),
  usersRouter = require("./routes/users");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database established");
});

app.use("/exercises", exerciseRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server Running in ${port}`);
});
