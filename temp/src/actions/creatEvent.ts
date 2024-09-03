import { db } from "../lib/firebaseConfig";
import { getAuth } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const auth = getAuth();

export const initializeEvents = async (
  title: string,
  eventID: string,
  users: Record<string, string>,
  events: string[],
  description: string,
  img: string[]
) => {

  const time = new Date().getTime();

  const eventDoc = {
    name,
    eventID: time.toString,
    users,
    events,
    description,
    img,
  };

  try {
    const docRef = collection(db, "Applications");
    await addDoc(docRef, eventDoc);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
