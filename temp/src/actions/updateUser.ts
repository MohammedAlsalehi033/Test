import { db } from "@/lib/firebaseConfig";
import { getAuth } from "firebase/auth";
import { collection, query, where, getDocs, updateDoc, setDoc } from "firebase/firestore";

const auth = getAuth();

export const updateSubscribedSocieties = async (userEmail: string, socityId: string, requestState: string) => {
  try {
    const userCollectionRef = collection(db, "user");
    const q = query(userCollectionRef, where("email", "==", userEmail));

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userDocRef = querySnapshot.docs[0].ref;
      const userData = querySnapshot.docs[0].data();
      const currentSubscribedSocieties = userData.subscribedSocieties || {};

      currentSubscribedSocieties[socityId] = requestState;

      await updateDoc(userDocRef, {
        subscribedSocieties: currentSubscribedSocieties,
      });

      console.log("User's subscribed societies updated successfully");
    } else {
      console.log("No user found with the provided email!");
    }
  } catch (e) {
    console.error("Error updating subscribed societies: ", e);
  }
};
