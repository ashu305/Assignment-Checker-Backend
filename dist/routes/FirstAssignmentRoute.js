"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const FirstAssignmentQueries_1 = require("./FirstAssignmentQueries");
const router = express.Router();
const replaceAll = (str) => {
    for (let index = 0; index < str.length; index++) {
        str = str.replace(`'`, `"`);
    }
    return str;
};
router.get("/questions", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [result, _] = yield (0, FirstAssignmentQueries_1.getAllValues)();
        res.json(result);
    }
    catch (err) {
        throw err;
    }
}));
router.post("/checkAnswer", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id, userAnswer } = req.body;
    userAnswer = replaceAll(userAnswer);
    try {
        yield (0, FirstAssignmentQueries_1.updateUserAnswer)(userAnswer, id);
        const [querry, _] = yield (0, FirstAssignmentQueries_1.getCorrectAnswerByID)(id);
        userAnswer = userAnswer.replace(";", "");
        const correctQuerry = querry[0].correctAnswer;
        const [checkTable] = yield (0, FirstAssignmentQueries_1.getCheckTable)(userAnswer, correctQuerry);
        const [correctTable] = yield (0, FirstAssignmentQueries_1.getCorrectTable)(correctQuerry);
        if (checkTable.length === correctTable.length) {
            yield (0, FirstAssignmentQueries_1.updateUserStatus)("APPROVED", id);
            const [result, _] = yield (0, FirstAssignmentQueries_1.getUserStatusByID)(id);
            res.json({ status: result });
        }
        else {
            yield (0, FirstAssignmentQueries_1.updateUserStatus)("REJECTED", id);
            const [result, _] = yield (0, FirstAssignmentQueries_1.getUserStatusByID)(id);
            res.json({ status: result });
        }
    }
    catch (err) {
        if (err) {
            yield (0, FirstAssignmentQueries_1.updateUserStatus)("ERROR", id);
            yield (0, FirstAssignmentQueries_1.updateUserAnswer)(userAnswer, id);
            const [result, _] = yield (0, FirstAssignmentQueries_1.getUserStatusByID)(id);
            res.json({ status: result, error: err });
        }
    }
}));
router.post("/reset", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, FirstAssignmentQueries_1.resetUserAnswers)();
        yield (0, FirstAssignmentQueries_1.resetUserStatus)();
        res.send("Reset Successfull!!");
    }
    catch (err) {
        throw err;
    }
}));
exports.default = router;
