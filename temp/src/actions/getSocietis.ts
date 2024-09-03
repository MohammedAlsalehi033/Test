import { string } from './../../node_modules/@types/prop-types/index.d';
import { db } from "../lib/firebaseConfig";
import { getAuth } from "firebase/auth";
import { collection, getDocs,getDoc } from "firebase/firestore";

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


export const getAllSocietiesByID = async (email: string ) => {
    const user = auth.currentUser;
  
  
    try {
      const societiesCollection = collection(db, "society");
      const societiesSnapshot = await getDoc(societiesCollection,);

  
      return societiesSnapshot;
    } catch (e) {
      console.error("Error fetching societies: ", e);
      throw e;
    }
  };
  