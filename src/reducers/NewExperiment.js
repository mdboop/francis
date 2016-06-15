import Immutable from 'immutable';
const initialState = new Immutable.Map({
  question: 0,
  valid: false,
});

export default function newExperiment(state = initialState, action) {
  if (action.type === 'GO_TO_NEXT_QUESTION') {
    let question = state.get('question');
    if (question < 5) {
      question++;
      return state.set('question', question);
    }
  }
  if (action.type === 'GO_TO_PREV_QUESTION') {
    let question = state.get('question');
    if (question > 0) {
      question--;
      return state.set('question', question);
    }
  }
  if (action.type === 'RESET_QUESTION_INDEX') {
    return state.set('question', 0);
  }
  if (action.type === 'SET_VALIDITY') {
    return state.set('valid', action.valid);
  }
  return state;
}
