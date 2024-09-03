import { db } from "../lib/firebaseConfig";
import { getAuth } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

const auth = getAuth();

export const getAllSocieties = async () => {
  const user = auth.currentUser;


  try {
    const societiesCollection = collection(db, "society");
    const societiesSnapshot = await getDocs(societiesCollection);
    const societiesList = societiesSnapshot.docs.map(doc => ({

        
      ...doc.data()
    }));

    return societiesList;
  } catch (e) {
    console.error("Error fetching societies: ", e);
    throw e;
  }
};
