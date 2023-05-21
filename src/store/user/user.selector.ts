import { createSelector } from "reselect";
import { USERSTATE } from "./user.reducer";

export const selectUserReducer = (state) : USERSTATE => state.user;

export const selectCurrentUser = createSelector(
    selectUserReducer,
    (user) => user.currentUser,
)