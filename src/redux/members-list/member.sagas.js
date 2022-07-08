import { takeLatest, put, all, call } from "redux-saga/effects";
import MemberActionTypes from "./member.types";
import { addFamilyMember, getFamilyMembersSuccess } from "./member.actions";
import { getUsers } from "../../Auth/userAuth";

export function* familyMembersList() {
  try {
    const membersList = yield getUsers();
    console.log({membersList});
    yield put(getFamilyMembersSuccess(membersList));
  } catch (err) {console.log(err)}
}

export function* getFamilyMemberList() {
  yield takeLatest(MemberActionTypes.GET_MEMBER_LIST, familyMembersList);
}

export function* membersSagas() {
  yield all([call(getFamilyMemberList)]);
}
