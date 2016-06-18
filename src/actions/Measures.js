export const setMeasures = (measures) => ({
  type: 'SET_MEASURES',
  measures,
});

export const createMeasure = (measureId) => ({
  type: 'CREATE_MEASURE',
  measureId,
});

export const setKind = (kind, measureId) => ({
  type: 'SET_KIND',
  kind,
  measureId,
});

export const setUnit = (unit, measureId) => ({
  type: 'SET_UNIT',
  unit,
  measureId,
});

export const setScale = (scale, measureId) => ({
  type: 'SET_SCALE',
  scale,
  measureId,
});

export const setScaleDescriptionMin = (description, measureId) => ({
  type: 'SET_SCALE_DESCRIPTION_MIN',
  description,
  measureId,
});

export const setScaleDescriptionMiddle = (description, measureId) => ({
  type: 'SET_SCALE_DESCRIPTION_MIDDLE',
  description,
  measureId,
});

export const setScaleDescriptionMax = (description, measureId) => ({
  type: 'SET_SCALE_DESCRIPTION_MAX',
  description,
  measureId,
});

export const addSample = (sampleId, measureId) => ({
  type: 'ADD_SAMPLE',
  sampleId,
  measureId,
});

export const addListItem = (item, measureId) => ({
  type: 'ADD_LIST_ITEM',
  item,
  measureId,
});

export const removeListItem = (item, measureId) => ({
  type: 'REMOVE_LIST_ITEM',
  item,
  measureId,
});

export const setMeasureName = (name, measureId) => ({
  type: 'SET_MEASURE_NAME',
  name,
  measureId,
});
