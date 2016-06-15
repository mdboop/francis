import Immutable from 'immutable';
const initialState = new Immutable.List();

export default function requests(state = initialState, action) {
  if (action.type === 'SET_REQUESTS' && action.requests) {
    return Immutable.fromJS(action.requests);
  }
  return state;
}
