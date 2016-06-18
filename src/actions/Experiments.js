export const setExperiments = (exps) => ({
  type: 'SET_EXPERIMENTS',
  experiments: exps,
});

export const createExperiment = (expId) => ({
  type: 'CREATE_EXPERIMENT',
  expId,
});

export const deleteExperiment = (expId) => ({
  type: 'DELETE_EXPERIMENT',
  expId,
});

export const setExperimentKind = (kind, expId) => ({
  type: 'SET_EXPERIMENT_KIND',
  kind,
  expId,
});

export const setName = (name, expId) => ({
  type: 'SET_NAME',
  name,
  expId,
});

export const setActive = (active, expId) => ({
  type: 'SET_ACTIVE',
  active,
  expId,
});

export const setHypothesis = (hypothesis, expId) => ({
  type: 'SET_HYPOTHESIS',
  hypothesis,
  expId,
});

export const setCause = (cause, expId) => ({
  type: 'SET_CAUSE',
  cause,
  expId,
});

export const setEffect = (effect, expId) => ({
  type: 'SET_EFFECT',
  effect,
  expId,
});

export const addDepVar = (depVarId, expId) => ({
  type: 'ADD_DEP_VAR',
  depVarId,
  expId,
});

export const addIndVar = (indVarId, expId) => ({
  type: 'ADD_IND_VAR',
  indVarId,
  expId,
});
