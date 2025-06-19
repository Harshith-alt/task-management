require("reflect-metadata");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { AppDataSource } = require("./data-source");
const taskRouter = require("./routes/taskRoutes");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/tasks", taskRouter);

AppDataSource.initialize()
  .then(() => {
    console.log("DB initialized");
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => console.log(`Server at http://localhost:${PORT}`));
  })
  .catch((err) => console.error("Error initializing DB", err));
