import { createSelector } from "reselect";
import { USERSTATE } from "./user.reducer";
import { RootState } from "../store";

export const selectUserReducer = (state: RootState) : USERSTATE => state.user;

export const selectCurrentUser = createSelector(
    selectUserReducer,
    (user) => user.currentUser,
)