import { db } from "../lib/firebaseConfig";
import { getAuth } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const auth = getAuth();

export const initializeSocity = async (
  name: string,
  users: Record<string, string>,
  events: string[],
  description: string,
  tags: string[],
  img: string[]
) => {
  const user = auth.currentUser;
  if (!user) {
    throw new Error("User not authenticated");
  }

  const socityDoc = {
    name,
    email: user.email,
    users,
    events,
    description,
    tags,
    img,
  };

  try {
    const docRef = collection(db, "Applications");
    await addDoc(docRef, socityDoc);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
