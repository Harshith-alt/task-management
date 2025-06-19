const { DataSource } = require("typeorm");
const Task = require("./entity/Task");

require("dotenv").config();

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  entities: [Task],
});

module.exports = { AppDataSource };
