import Immutable from 'immutable';
const initialState = new Immutable.Map({
  hypothesis: '',
  cause: '',
  effect: '',
});

export default function hypothesis(state = initialState, action) {
  if (action.type === 'SET_HYPOTHESIS') {
    return state.set('hypothesis', action.hypothesis);
  }
  if (action.type === 'SET_CAUSE') {
    return state.set('cause', action.cause);
  }
  if (action.type === 'SET_EFFECT') {
    return state.set('effect', action.effect);
  }
  return state;
}
