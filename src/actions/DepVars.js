export const setDepVars = (depVars) => ({
  type: 'SET_DEP_VARS',
  depVars,
});


export const createDepVar = (depVarId) => ({
  type: 'CREATE_DEP_VAR',
  depVarId,
});


export const setDepVarName = (name, depVarId) => ({
  type: 'SET_DEP_VAR_NAME',
  name,
  depVarId,
});

export const addMeasure = (measureId, depVarId) => ({
  type: 'ADD_MEASURE',
  measureId,
  depVarId,
});
