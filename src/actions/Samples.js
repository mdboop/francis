export const setSamples = (samples) => ({
  type: 'SET_SAMPLES',
  samples,
});

export const setIndVarOptionOnSample = (sampleId, indVarId, optionValue) => ({
  type: 'SET_IND_VAR_OPTION_ON_SAMPLE',
  sampleId,
  indVarId,
  optionValue,
});

export const insertSample = (sample) => ({
  type: 'INSERT_SAMPLE',
  sample,
});

export const createSample = (sampleId) => ({
  type: 'CREATE_SAMPLE',
  sampleId,
});
