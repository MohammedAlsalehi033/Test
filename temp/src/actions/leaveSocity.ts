import { db } from "@/lib/firebaseConfig";
import { getAuth } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const auth = getAuth();

export const leaveSocity = async (
  socityRequestStates: Record<string, string> 
) => {


  const socityDoc = {
    socityRequestStates  
  };

  try {
    const docRef = collection(db, "user");
    await addDoc(docRef, socityDoc);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
