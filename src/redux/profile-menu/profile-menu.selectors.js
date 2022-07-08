import { createSelector } from "reselect";

const selectProfileMenu = state => state.profileMenu;

export const selectIsProfileMenuHidden = createSelector(
    [selectProfileMenu], 
    profileMenu => profileMenu.isProfileMenuHidden
);