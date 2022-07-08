import ProfileMenuActionTypes from "./profile-menu.types";

const INITIAL_STATE = {
    isProfileMenuHidden: true
}

const profileMenuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProfileMenuActionTypes.TOGGLE_PROFILE_MENU_HIDDEN:
          return {
            ...state,
            isProfileMenuHidden: !state.isProfileMenuHidden
          };
        default:
          return state;
      }
    };
    
export default profileMenuReducer;
    