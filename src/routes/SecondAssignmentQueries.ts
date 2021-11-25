import secondAssignment from "../config/SecondAssignmentDb";

export const getAllValues = () => {
  return secondAssignment.execute(
    `select  id, question, userAnswer, userStatus from assignment;`
  );
};

export const getCorrectAnswerByID = (id) => {
  return secondAssignment.execute(`select correctAnswer from assignment
  where id = ${id};`);
};

export const getCheckTable = (userAnswer, correctQuery) => {
  return secondAssignment.execute(
    `(${userAnswer}) union (${correctQuery.replace(";", "")})`
  );
};

export const getCorrectTable = (correctQuerry) => {
  return secondAssignment.execute(correctQuerry);
};

export const updateUserAnswer = (userAnswer, id) => {
  return secondAssignment.execute(
    `update assignment set userAnswer='${userAnswer}' where id= ${id};`
  );
};

export const updateUserStatus = (status, id) => {
  return secondAssignment.execute(
    `update assignment set userStatus='${status}' where id= ${id};`
  );
};

export const getUserStatusByID = (id) => {
  return secondAssignment.execute(
    `select userStatus from assignment where id = ${id}`
  );
};

export const resetUserAnswers = () => {
  return secondAssignment.execute(
    `update assignment set userAnswer=null where userAnswer is not null;`
  );
};

export const resetUserStatus = () => {
  return secondAssignment.execute(
    `update assignment set userStatus='Not Started' where userStatus !='Not Started';`
  );
};
