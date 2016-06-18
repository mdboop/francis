export const goToPrevQuestion = () => ({
  type: 'GO_TO_PREV_QUESTION',
});

export const goToNextQuestion = () => ({
  type: 'GO_TO_NEXT_QUESTION',
});

export const resetQuestionIndex = () => ({
  type: 'RESET_QUESTION_INDEX',
});

export const setValidity = (valid) => ({
  type: 'SET_VALIDITY',
  valid,
});
