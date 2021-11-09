const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use(
  "/firstAssignment",
  require("./routes/FirstAssignment/FirstAssignmentRoute")
);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started at port number: ${PORT}`);
});
