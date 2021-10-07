import { SET_QUESTIONS } from "../constants";

const initialState = {
    questions: []
  };
  
const questionsReducer = (state = Object.assign({}, initialState), action) => {
    const { type, data } = action;
    switch (type) {
        case SET_QUESTIONS:
            return Object.assign({}, state, {
                questions: data,
            });
        default:
            return state;
    }
};

export default questionsReducer;