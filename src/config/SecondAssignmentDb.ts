const secondAssignmentDb = require("mysql2");
import {
  DB_PORT,
  DB_PASSWORD,
  DB_HOST,
  DB_USER,
} from "../constants/DatabaseConstants";

const secondAssignment = secondAssignmentDb.createPool({
  user: DB_USER,
  host: DB_HOST,
  password: DB_PASSWORD,
  database: `coffee_store`,
  port: DB_PORT,
});

export default secondAssignment.promise();
