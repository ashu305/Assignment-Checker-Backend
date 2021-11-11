import * as express from "express";
import * as cors from "cors";
import firstAssignmentRouter from "./routes/FirstAssignmentRoute";

const app: express.Application = express();
app.use(express.json());
app.use(cors());

app.use("/firstAssignment", firstAssignmentRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server started at port number: ${PORT}`);
});
