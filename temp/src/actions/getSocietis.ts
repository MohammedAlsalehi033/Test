import { string } from './../../node_modules/@types/prop-types/index.d';
import { db } from "../lib/firebaseConfig";
import { getAuth } from "firebase/auth";
import { collection, getDocs,getDoc, query, where } from "firebase/firestore";


interface Club {
  id: string;
  name: string;
  description: string;
  email: string;
  events: string[];
  img: string[];
  tags: string[];
  users: { [key: string]: string };
}


const auth = getAuth();

export const getAllSocieties = async (): Promise<Club[]> => {
  const user = auth.currentUser;
  try {
    const societiesCollection = collection(db, "society");
    const societiesSnapshot = await getDocs(societiesCollection);
    const societiesList = societiesSnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data
      } as Club; // Explicitly cast to Club type
    });
    return societiesList;
  } catch (e) {
    console.error("Error fetching societies: ", e);
    throw e;
  }
};


export const getSocietiesByID = async (email: string) => {
    const user = auth.currentUser;
    if (!user) {
      throw new Error("User not authenticated");
    }
  
    try {
      const societiesCollection = collection(db, "society");
      const q = query(societiesCollection, where("email", "==", email));
      const querySnapshot = await getDocs(q);
  
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (e) {
      console.error("Error fetching societies: ", e);
      throw e;
    }
  };