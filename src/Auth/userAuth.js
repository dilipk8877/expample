import {collection,getDocs} from "firebase/firestore";
import { db } from "../firebase/firebase.utils";

const usersCollectionRef = collection(db, "members");

export const getUsers = async () => {
  const data = await getDocs(usersCollectionRef);
  const userInfo = data.docs.map((doc) => ({ ...doc.data() }));
  return userInfo
};
