import Immutable from 'immutable';
const initialState = new Immutable.Map({});

export default function requests(state = initialState, action) {
  if (action.type === 'SET_USER') {
    return state.set('username', action.username).set('id', action.id);
  }
  if (action.type === 'LOG_OUT_USER') {
    return new Immutable.Map({});
  }
  return state;
}
