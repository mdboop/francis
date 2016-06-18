export const setIndVars = (indVars) => ({
  type: 'SET_IND_VARS',
  indVars,
});
export const createIndVar = (indVarId) => ({
  type: 'CREATE_IND_VAR',
  indVarId,
});

export const setIndVarName = (name, indVarId) => ({
  type: 'SET_INDVAR_NAME',
  name,
  indVarId,
});

export const setActionsPerTrial = (actionsPerTrial, indVarId) => ({
  type: 'SET_INDVAR_ACTIONS_PER_TRIAL',
  actionsPerTrial,
  indVarId,
});

export const setNumTrials = (numTrials, indVarId) => ({
  type: 'SET_INDVAR_NUM_TRIALS',
  numTrials,
  indVarId,
});

export const setRandomized = (randomized, indVarId) => ({
  type: 'SET_INDVAR_RANDOMIZED',
  randomized,
  indVarId,
});

export const addOption = (option, indVarId) => ({
  type: 'ADD_INDVAR_OPTION',
  option,
  indVarId,
});


export const removeOption = (option, indVarId) => ({
  type: 'REMOVE_INDVAR_OPTION',
  option,
  indVarId,
});
