import { 
    ADD_ANSWER, 
    SET_ACTIVE_STEP, 
    SET_ALL_QUESTIONS_ANSWERED, 
    SET_QUESTIONS 
} from "../constants";

const initialState = {
    questions: [],
    activeStep: 0,
    answers: [],
    allQuestionsAnswered: false
  };
  
const questionsReducer = (state = Object.assign({}, initialState), action) => {
    const { type, data } = action;
    switch (type) {
        case SET_QUESTIONS:
            return Object.assign({}, state, {
                questions: data,
            });
        case SET_ACTIVE_STEP:
            return Object.assign({}, state, {
                activeStep: data,
            });
        case ADD_ANSWER:
            const updatedAnswers = [...state.answers];
            updatedAnswers.push(data);
            return Object.assign({}, state, {
                answers: updatedAnswers,
            });
        case SET_ALL_QUESTIONS_ANSWERED:
            return Object.assign({}, state, {
                allQuestionsAnswered: data,
            });
        default:
            return state;
    }
};

export default questionsReducer;