import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { toggleProfileMenuHidden } from "../../redux/profile-menu/profile-menu.actions"

import "./profile-badge.styles.scss";

const ProfileBadge = () => {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    return (
        <>
        <img src={currentUser.photoURL} className="profile-badge" onClick={() => dispatch(toggleProfileMenuHidden())}/>
        </>
    )
}

export default ProfileBadge;