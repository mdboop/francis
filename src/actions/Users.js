export const setUser = (username, id) => ({
  type: 'SET_USER',
  username,
  id,
});

export const logout = () => ({
  type: 'LOG_OUT_USER',
});
