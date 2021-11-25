import * as express from "express";
import * as cors from "cors";
import firstAssignmentRouter from "./routes/FirstAssignmentRoute";
import secondAssignmentRouter from "./routes/SecondAssignmnetRoute";

const app: express.Application = express();
app.use(express.json());
app.use(cors());

app.use("/firstAssignment", firstAssignmentRouter);
app.use("/secondAssignment", secondAssignmentRouter);

const PORT: number = 3001;
app.listen(PORT, () => {
  console.log(`Server started at port number: ${PORT}`);
});
