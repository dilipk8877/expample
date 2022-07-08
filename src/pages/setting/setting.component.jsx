import React, { useEffect, useState } from "react";
import "./setting.style.scss";
import user from "../../assets/user.png";
import Jessy from "../../assets/jessy.png";
import Delete from "../../assets/delete.svg";
import Message from "../../assets/message.svg";
import plus from "../../assets/plus.svg";
import Check from "../../assets/check.svg";
import cross from "../../assets/cross.svg";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectMembers } from "../../redux/members-list/member.selectors";
import { getFamilyMembers } from "../../redux/members-list/member.actions";

const SettingPage = () => {
  let arr = ["any"];
  const [userData, setUserData] = useState(arr);
  const [addUser, setAddUser] = useState(false);
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(false);
  //   const mList = useSelector(selectMembers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFamilyMembers());
  }, [dispatch]);

  const addUserDetail = () => {
    setUserData((p) => [...p, email]);
    setAlert(true);
    setAddUser(false);
    setEmail("");
  };

  const deleteUser = (param) => {
    let deletedAcc = userData.filter((val) => val !== param);
    console.log({ deletedAcc });
    setUserData(deletedAcc);
  };
  return (
    <div>
      <div className="setting_contain">
        <div className="setting_profile">
          <h3>Setting</h3>
          <div className="settings_row flex_row">
            <div className="sidebar_setting">
              <ul>
                <li className="active">My Family</li>
                <li>Food Setting</li>
                <li>Logout</li>
              </ul>
            </div>

            <div className="main_contentsetting">
              <div className="flex_row user_account">
                <h3>My Family</h3>

                {alert && (
                  <div className="successfull_added">
                    <img src={Check} />
                    <span>Apollo Gray was successfully added</span>
                    <img src={cross} onClick={() => setAlert(false)} />
                  </div>
                )}

                {/* {JSON.stringify(mList)} */}
                <button onClick={() => setAddUser(true)}>Add User</button>
              </div>
              <div className="flex_row user_logged border_none">
                <div className="profile_title">
                  <h4>Users</h4>
                </div>
                <div className="profile_title text-center">
                  <h4>Last Logged In</h4>
                </div>
                <div className="profile_title">
                  <h4>Relationship</h4>
                </div>
              </div>
              {userData.map((el) => (
                <div className="flex_row user_logged">
                  <div className="user">
                    <div className="urser_nam flex_row">
                      <div className="user_profile">
                        <img src={user} />
                      </div>
                      <div className="user_text">
                        <h6>{el}</h6>
                        <p>sheridan.gray@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="last_logged">
                    <span>Yesterday</span>
                  </div>
                  <div className="relationship">
                    <select>
                      <option>Account Owner</option>
                    </select>
                  </div>
                  <div className="add_dlt" onClick={() => deleteUser(el)}>
                    <img src={Delete} />
                  </div>
                </div>
              ))}

              {addUser && (
                <div className="flex_row user_logged">
                  <div className="user">
                    <div className="urser_nam">
                      <div className="input_field">
                        <img src={Message} />
                        <input
                          type="text"
                          value={email}
                          placeholder="Enter Gmail Account"
                          onChange={(e) => setEmail(e.target.value)}
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="last_logged"></div>
                  <div className="relationship">
                    <select>
                      <option>Select relationship</option>
                    </select>
                  </div>
                  <div className="add_dlt" onClick={() => addUserDetail()}>
                    <img src={plus} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
