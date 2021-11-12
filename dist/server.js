"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const FirstAssignmentRoute_1 = require("./routes/FirstAssignmentRoute");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/firstAssignment", FirstAssignmentRoute_1.default);
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server started at port number: ${PORT}`);
});
