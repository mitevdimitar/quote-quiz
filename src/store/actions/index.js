import { SET_QUIZ_SETTINGS } from "../constants";

export const QuizSettings = {
    setQuizSettings: (data) =>
      Object.assign({
        type: SET_QUIZ_SETTINGS,
        data,
    })
}