import * as express from "express";
import {
  getAllValues,
  getCorrectAnswerByID,
  getCheckTable,
  getCorrectTable,
  updateUserAnswer,
  updateUserStatus,
  getUserStatusByID,
  resetUserAnswers,
  resetUserStatus,
} from "./SecondAssignmentQueries";

const router = express.Router();
const replaceAll = (str: string) => {
  for (let index = 0; index < str.length; index++) {
    str = str.replace(`'`, `"`);
  }

  return str;
};

router.get("/questions", async (req, res) => {
  try {
    const [result, _] = await getAllValues();
    res.json(result);
  } catch (err) {
    throw err;
  }
});

router.post("/checkAnswer", async (req, res) => {
  let { id, userAnswer } = req.body;
  userAnswer = replaceAll(userAnswer);
  try {
    await updateUserAnswer(userAnswer, id);

    const [querry, _] = await getCorrectAnswerByID(id);

    userAnswer = userAnswer.replace(";", "");

    const correctQuerry = querry[0].correctAnswer;
    const [checkTable] = await getCheckTable(userAnswer, correctQuerry);

    const [correctTable] = await getCorrectTable(correctQuerry);

    if (checkTable.length === correctTable.length) {
      await updateUserStatus("APPROVED", id);
      const [result, _] = await getUserStatusByID(id);
      res.json({ status: result });
    } else {
      await updateUserStatus("REJECTED", id);
      const [result, _] = await getUserStatusByID(id);
      res.json({ status: result });
    }
  } catch (err) {
    if (err) {
      await updateUserStatus("ERROR", id);
      await updateUserAnswer(userAnswer, id);
      const [result, _] = await getUserStatusByID(id);
      res.json({ status: result, error: err });
    }
  }
});

router.post("/reset", async (req, res) => {
  try {
    await resetUserAnswers();
    await resetUserStatus();
    res.send("Reset Successfull!!");
  } catch (err) {
    throw err;
  }
});

export default router;
