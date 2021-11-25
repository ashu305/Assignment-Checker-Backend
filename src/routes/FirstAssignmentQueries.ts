import firstAssignment from "../config/FirstAssignmentDB";

const getAllValues = () => {
  return firstAssignment.execute(
    `select  id, question, userAnswer, userStatus from assignment;`
  );
};

const getCorrectAnswerByID = (id) => {
  return firstAssignment.execute(`select correctAnswer from assignment
  where id = ${id};`);
};

const getCheckTable = (userAnswer, correctQuery) => {
  let correct = correctQuery.replace(";", "");
  return firstAssignment.execute(
    `(${userAnswer}) union (${correctQuery.replace(";", "")});`
  );
};

const getCorrectTable = (correctQuerry) => {
  return firstAssignment.execute(correctQuerry);
};

const updateUserAnswer = (userAnswer, id) => {
  return firstAssignment.execute(
    `update assignment set userAnswer='${userAnswer}' where id= ${id};`
  );
};

const updateUserStatus = (status, id) => {
  return firstAssignment.execute(
    `update assignment set userStatus='${status}' where id= ${id};`
  );
};

const getUserStatusByID = (id) => {
  return firstAssignment.execute(
    `select userStatus from assignment where id = ${id}`
  );
};

const resetUserAnswers = () => {
  return firstAssignment.execute(
    `update assignment set userAnswer=null where userAnswer is not null;`
  );
};

const resetUserStatus = () => {
  return firstAssignment.execute(
    `update assignment set userStatus='Not Started' where userStatus !='Not Started';`
  );
};
export {
  getAllValues,
  getCorrectAnswerByID,
  getCheckTable,
  getCorrectTable,
  updateUserAnswer,
  updateUserStatus,
  getUserStatusByID,
  resetUserStatus,
  resetUserAnswers,
};
