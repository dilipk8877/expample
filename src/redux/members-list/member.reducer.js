import MemberActionTypes from "./member.types";

const INITIAL_STATE = {
  isLoading: false,
  memberList: [],
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case MemberActionTypes.MEMBER_ADDED_SUCCESS:
    //   return {
    //     ...state,
    //     memberList: action.payload,
    //     error: null,
    //   };
    case MemberActionTypes.GET_MEMBER_LIST_SUCCESS:
      return {
        ...state,
        memberList: action.payload,
        error: null,
      };
    case MemberActionTypes.MEMBER_REMOVED_FAILURE:
      return {
        ...state,
        memberList: [],
        error: "Failed to add member",
      };

    default:
      return state;
  }
};

export default userReducer;
