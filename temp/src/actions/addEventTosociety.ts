import { db } from "@/lib/firebaseConfig";
import { getAuth } from "firebase/auth";
import { collection, query, where, getDocs, updateDoc, arrayUnion } from "firebase/firestore";

const auth = getAuth();

export const addEventToSociety = async (
  userEmail: string,
  newEvent: string
) => {


  try {
    const societyCollectionRef = collection(db, "society");

    const q = query(societyCollectionRef, where("email", "==", userEmail));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      querySnapshot.forEach(async (societyDoc) => {
        await updateDoc(societyDoc.ref, {
          events: arrayUnion(newEvent)
        });
      });
      
      console.log("Event added to the society successfully");
    } else {
      console.log("No society document found for this email!");
    }
  } catch (e) {
    console.error("Error updating society document: ", e);
  }
};
