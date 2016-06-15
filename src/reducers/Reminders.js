import Immutable from 'immutable';
const initialState = new Immutable.List();

export default function reminders(state = initialState, action) {
  if (action.type === 'SET_REMINDERS') {
    return Immutable.fromJS(action.reminders);
  }
  return state;
}
