import { db } from "../lib/firebaseConfig";
import { getAuth } from "firebase/auth";
import { collection, addDoc, getDoc, doc } from "firebase/firestore";

const auth = getAuth();

export const getEventById = async (eventID: string) => {
    const docRef = collection(db, "Applications");

    try {
        
      const docRef = doc(db, "Events", eventID);
      const eventSnapshot = await getDoc(docRef);
  
      if (eventSnapshot.exists()) {
        const eventData = eventSnapshot.data();
        console.log("Event data:", eventData);
        return eventData;
      } else {
        console.log("No such event found!");
        return null;
      }
    } catch (e) {
      console.error("Error fetching event document: ", e);
      throw e;
    }
  };
  