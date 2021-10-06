import { SET_QUIZ_SETTINGS } from "../constants";

export const Settings = {
    setQuizSettings: (data) =>
      Object.assign({
        type: SET_QUIZ_SETTINGS,
        data,
    })
}