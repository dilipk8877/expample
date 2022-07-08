import { createSelector } from "reselect";

const selectUser = (state) => state.user;
const signInError = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser,
);

export const authErros = createSelector(
  signInError,
  err => err.error
);
