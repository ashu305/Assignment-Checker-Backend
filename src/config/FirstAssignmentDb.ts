const firstAssignmentDb = require("mysql2");
import {
  DB_PORT,
  DB_PASSWORD,
  DB_HOST,
  DB_USER,
} from "../constants/DatabaseConstants";

const firstAssignment = firstAssignmentDb.createPool({
  user: DB_USER,
  host: DB_HOST,
  password: DB_PASSWORD,
  database: `employee`,
  port: DB_PORT,
});

export default firstAssignment.promise();
