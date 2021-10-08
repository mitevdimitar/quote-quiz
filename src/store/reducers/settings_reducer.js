import { SET_MODAL_OPEN, SET_QUIZ_SETTINGS } from "../constants";

const initialState = {
    modalOpen: false,
    quizMode: "binary"
  };
  
const settingsReducer = (state = Object.assign({}, initialState), action) => {
    const { type, data } = action;
    switch (type) {
        case SET_QUIZ_SETTINGS:
            return Object.assign({}, state, {
                quizMode: data,
            });
        case SET_MODAL_OPEN:
            return Object.assign({}, state, {
                modalOpen: data,
            });
        default:
            return state;
    }
};

export default settingsReducer;