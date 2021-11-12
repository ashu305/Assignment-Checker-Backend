"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetUserAnswers = exports.resetUserStatus = exports.getUserStatusByID = exports.updateUserStatus = exports.updateUserAnswer = exports.getCorrectTable = exports.getCheckTable = exports.getCorrectAnswerByID = exports.getAllValues = void 0;
const FirstAssignmentDB_1 = require("../config/FirstAssignmentDB");
const getAllValues = () => {
    return FirstAssignmentDB_1.default.execute(`select  id, question, userAnswer, userStatus from assignment;`);
};
exports.getAllValues = getAllValues;
const getCorrectAnswerByID = (id) => {
    return FirstAssignmentDB_1.default.execute(`select correctAnswer from assignment
  where id = ${id};`);
};
exports.getCorrectAnswerByID = getCorrectAnswerByID;
const getCheckTable = (userAnswer, correctQuery) => {
    return FirstAssignmentDB_1.default.execute(`${userAnswer} union ${correctQuery}`);
};
exports.getCheckTable = getCheckTable;
const getCorrectTable = (correctQuerry) => {
    return FirstAssignmentDB_1.default.execute(correctQuerry);
};
exports.getCorrectTable = getCorrectTable;
const updateUserAnswer = (userAnswer, id) => {
    return FirstAssignmentDB_1.default.execute(`update assignment set userAnswer='${userAnswer}' where id= ${id};`);
};
exports.updateUserAnswer = updateUserAnswer;
const updateUserStatus = (status, id) => {
    return FirstAssignmentDB_1.default.execute(`update assignment set userStatus='${status}' where id= ${id};`);
};
exports.updateUserStatus = updateUserStatus;
const getUserStatusByID = (id) => {
    return FirstAssignmentDB_1.default.execute(`select userStatus from assignment where id = ${id}`);
};
exports.getUserStatusByID = getUserStatusByID;
const resetUserAnswers = () => {
    return FirstAssignmentDB_1.default.execute(`update assignment set userAnswer=null where userAnswer is not null;`);
};
exports.resetUserAnswers = resetUserAnswers;
const resetUserStatus = () => {
    return FirstAssignmentDB_1.default.execute(`update assignment set userStatus='Not Started' where userStatus !='Not Started';`);
};
exports.resetUserStatus = resetUserStatus;
