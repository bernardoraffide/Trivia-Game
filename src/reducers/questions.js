import { GET_QUESTIONS, TIME_IS_OVER } from '../actions';

const INITIAL_STATE = {
  questions: [],
  timeIsOver: false,
  loading: true,
};

function questionsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_QUESTIONS:
    return {
      ...state,
      questions: action.payload,
      loading: false,
    };
  case TIME_IS_OVER:
    return {
      ...state,
      timeIsOver: action.payload,
    };
  default:
    return state;
  }
}

export default questionsReducer;
