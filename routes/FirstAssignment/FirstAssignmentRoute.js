const express = require("express");
const router = express.Router();
const firstAssignment = require("../../config/FirstAssignmentDb.js");

router.get("/questions", async (req, res) => {
  try {
    const [result, _] = await firstAssignment.execute(
      `select  id, question from assignment;`
    );
    res.json(result);
  } catch (err) {
    console.log("ERRROOORRRR!!!");
    console.log(err);
  }
});

router.get("/checkAnswer", async (req, res) => {
  try {
    let { id, checkAnswer } = req.query;
    const [querry, _] =
      await firstAssignment.execute(`select answer from assignment
    where id = ${id};`);

    checkAnswer = checkAnswer.replace(";", "");
    const correctQuerry = querry[0].answer;
    const [checkTable] = await firstAssignment.execute(
      `${checkAnswer} union ${correctQuerry}`
    );
    const [correctTable] = await firstAssignment.execute(correctQuerry);

    if (checkTable.length === correctTable.length) {
      res.json({
        status: "Approved",
      });
    } else {
      res.json({
        status: "Rejected",
      });
    }
  } catch (err) {
    if (err) {
      res.json({
        status: "Error",
      });
    }
    console.log("ERRROOORRR!!!");
  }
});

module.exports = router;
