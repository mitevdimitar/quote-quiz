import { 
  SET_QUIZ_SETTINGS, 
  SET_QUESTIONS, 
  SET_ACTIVE_STEP, 
  SET_MODAL_OPEN,
  ADD_ANSWER,
  SET_ALL_QUESTIONS_ANSWERED,
  ADD_NOTIFICATION
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
  }),
  addAnswer: (data) =>
    Object.assign({
      type: ADD_ANSWER,
      data,
  }),
  addNotification: (data) =>
    Object.assign({
      type: ADD_NOTIFICATION,
      data,
  }),
  setAllQuestionsAnswered: (data) =>
    Object.assign({
      type: SET_ALL_QUESTIONS_ANSWERED,
      data,
  })
}