import { db } from "../lib/firebaseConfig";
import { getAuth } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect } from "react";


export const getUserById = async (userEmail: string) => {

  try {
    const userCollection = collection(db, "user");
    const q = query(userCollection, where("email", "==", userEmail));

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("User data:", userData);
      return userData;
    } else {
      console.log("No user found with the provided email!");
      return null;
    }
  } catch (e) {
    console.error("Error fetching user document: ", e);
    throw e;
  }
};
