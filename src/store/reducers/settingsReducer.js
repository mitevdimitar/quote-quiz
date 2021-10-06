import { SET_QUIZ_SETTINGS } from "../constants";

const initialState = {
    quizType: 'binary'
  };
  
const settingsReducer = (state = Object.assign({}, initialState), action) => {
    const { type, data } = action;
    switch (type) {
        case SET_QUIZ_SETTINGS:
            return Object.assign({}, state, {
                quizType: data,
            });
        default:
            return state;
    }
};

export default settingsReducer;