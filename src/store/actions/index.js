import { 
  SET_QUIZ_SETTINGS, 
  SET_QUESTIONS, 
  SET_ACTIVE_STEP, 
  SET_MODAL_OPEN
} from "../constants";

export const QuizSettings = {
    setQuizSettings: (data) =>
      Object.assign({
        type: SET_QUIZ_SETTINGS,
        data,
    }),
    setModalOpen: (data) =>
      Object.assign({
        type: SET_MODAL_OPEN,
        data,
    })
}

export const QuizQuestions = {
  setQuizQuestions: (data) =>
    Object.assign({
      type: SET_QUESTIONS,
      data,
  }),
  setActiveStep: (data) =>
    Object.assign({
      type: SET_ACTIVE_STEP,
      data,
  })
}