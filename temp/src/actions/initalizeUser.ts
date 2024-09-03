import { db } from "@/lib/firebaseConfig";
import { getAuth } from "firebase/auth";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

const auth = getAuth();

export const initializeUser = async (type: string) => {
  const user = auth.currentUser;
  if (!user) {
    throw new Error("User not authenticated");
  }

  try {
    // Reference to the collection where users are stored
    const usersCollection = collection(db, "Users");

    // Query to check if the user already exists
    const q = query(usersCollection, where("email", "==", user.email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      console.log("User already exists in the database");
      return; // Exit the function if the user already exists
    }

    // If the user doesn't exist, create a new document
    const userDoc = {
      email: user.email,
      type,
      createdAt: new Date(),
    };

    const docRef = await addDoc(usersCollection, userDoc);
    console.log("Document written with ID: ", docRef.id);
    
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
