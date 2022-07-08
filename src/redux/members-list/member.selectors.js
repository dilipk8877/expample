import { createSelector } from "reselect";

const selectMembersList = state => state.membersList;

export const selectMembers= createSelector(
    [selectMembersList], 
    membersList => membersList.memberList
);