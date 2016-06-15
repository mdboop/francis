import dependentVariables from './dependentVariables';
import editExperiment from './editExperiment';
import experiments from './experiments';
import hypothesis from './hypothesis';
import independentVariables from './independentVariables';
import measures from './measures';
import newExperiment from './newExperiment';
import samples from './samples';
import user from './user';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Add the reducer to your store on the `routing` key
const rootReducer = combineReducers({
  dependentVariables,
  editExperiment,
  experiments,
  hypothesis,
  independentVariables,
  measures,
  newExperiment,
  samples,
  user,
  routing: routerReducer,
});

export default rootReducer;
