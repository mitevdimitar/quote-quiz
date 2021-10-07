import { SET_QUIZ_SETTINGS, SET_QUESTIONS } from "../constants";

export const QuizSettings = {
    setQuizSettings: (data) =>
      Object.assign({
        type: SET_QUIZ_SETTINGS,
        data,
    })
}

export const QuizQuestions = {
  setQuizQuestions: (data) =>
    Object.assign({
      type: SET_QUESTIONS,
      data,
  })
}