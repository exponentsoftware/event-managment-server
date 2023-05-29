const express = require("express");
const app = express();
const cors = require("cors");
const chalk = require("chalk");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
// Mongo DB Connections
mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    console.log("MongoDB Connection Succeeded.");
  })
  .catch((error) => {
    console.log("Error in DB connection: " + error);
  });

// Middleware Connections
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use((req, res, next) => {
  const startTime = new Date();

  res.on("finish", () => {
    const endTime = new Date();
    const responseTime = endTime - startTime;

    // Set the default color for the log
    let logColor = "white";

    // Check the status code and assign the corresponding color
    if (res.statusCode === 200) {
      logColor = "green";
    } else if (res.statusCode >= 400 && res.statusCode <= 599) {
      logColor = "red";
    }else if (res.statusCode >= 300 && res.statusCode <= 399){
      logColor = "yellow"
    }
      // Log the colored API call details, response time, URL, and status code
      console.log(
        chalk[logColor](
          `API Call - URL: ${req.originalUrl}, Method: ${req.method}, Response Time: ${responseTime}ms, Status Code: ${res.statusCode}`
        )
      );
  });

  next();
});

// Error handler 
app.use((err, req, res, next) => {
  // Handle the error
  console.error(err);

  // Set the appropriate status code and error response
  const statusCode = err.statusCode || 500;
  const errorMessage = err.message || "Internal Server Error";
  res.status(statusCode).json({ error: errorMessage });
});

// Routes
const eventRouter = require("./routes/event.routes");
const categoryRouter = require("./routes/category");
const userRouter = require("./routes/user");

app.use("/api", eventRouter);
app.use("/api", categoryRouter);
app.use("/api", userRouter);

// Connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App running in port: " + PORT);
});
