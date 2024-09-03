import { db } from "@/lib/firebaseConfig";
import { getAuth } from "firebase/auth";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

const auth = getAuth();

export const initializeUser = async (type: string, email: string) => {

  try {
    const usersCollection = collection(db, "Users");

    const q = query(usersCollection, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      console.log("User already exists in the database");
    }

    const userDoc = {
      email,
      type,
      createdAt: new Date(),
    };

    const docRef = await addDoc(usersCollection, userDoc);
    console.log("Document written with ID: ", docRef.id);

  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
