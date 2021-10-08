import { SET_ACTIVE_STEP, SET_QUESTIONS } from "../constants";

const initialState = {
    questions: [],
    activeStep: 0,
    answers: []
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
        default:
            return state;
    }
};

export default questionsReducer;