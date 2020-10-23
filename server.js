const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./models");

// middleware
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//importing the workout controller 
const workoutController = require("./controllers/workoutController");
app.use(workoutController);

//mongoose and mongo db middleware
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

// returns the home page 
app.get("/", (req, res) => {
    res.send("index.html")
})

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

//imports the html routes 
require("./routes/htmlRoutes")(app)

// server listening on the port 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  