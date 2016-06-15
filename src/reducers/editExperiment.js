import Immutable from 'immutable';
const initialState = new Immutable.Map({});

export default function editExperiment(state = initialState, action) {
  if (action.type === 'CREATE_EXPERIMENT') {
    return state.set('newExperiment', action.newExperiment);
  }
  return state;
}