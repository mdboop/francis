export const renameDepVar = (depVar, index) => ({
  type: 'RENAME_DEP_VAR',
  changeDepVar: depVar,
  key: index,
});

export const viewExperiments = () => ({
  type: 'VIEW_EXPERIMENTS',
});
