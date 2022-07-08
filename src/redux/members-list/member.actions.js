import MemberActionTypes from "./member.types";

export const addFamilyMember = (info) => ({
  type: MemberActionTypes.ADD_FAMILY_MEMBER,
  payload: info,
});


export const getFamilyMembers = () => ({
    type: MemberActionTypes.GET_MEMBER_LIST,
   
});

export const getFamilyMembersSuccess = (data) => ({
    type: MemberActionTypes.GET_MEMBER_LIST_SUCCESS,
    payload:data,
})


