"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firstAssignmentDb = require("mysql2");
const DatabaseConstants_1 = require("../constants/DatabaseConstants");
const firstAssignment = firstAssignmentDb.createPool({
    user: DatabaseConstants_1.DB_USER,
    host: DatabaseConstants_1.DB_HOST,
    password: DatabaseConstants_1.DB_PASSWORD,
    database: `employee`,
    port: DatabaseConstants_1.DB_PORT,
});
exports.default = firstAssignment.promise();
