const { DataSource } = require("typeorm");
const Task = require("./entity/Task");

require("dotenv").config();

const AppDataSource = new DataSource({
  type: "sqlite",
  database: process.env.DATABASE_PATH || "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [Task],
});

module.exports = { AppDataSource };
