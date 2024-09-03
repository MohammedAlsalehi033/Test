import { db } from "@/lib/firebaseConfig";
import { getAuth } from "firebase/auth";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

const auth = getAuth();

export const updateSubscribedSocieties = async (socityId: string, requestState: string) => {

  try {
    const userDocRef = doc(collection(db, "Users"), user.uid);

    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();
      const currentSubscribedSocieties = userData.subscribedSocieties || {};

      currentSubscribedSocieties[socityId] = requestState;

      await updateDoc(userDocRef, {
        subscribedSocieties: currentSubscribedSocieties
      });

      console.log("User's subscribed societies updated successfully");
    } else {
      const newSubscribedSocieties = {
        [socityId]: requestState
      };

      await setDoc(userDocRef, {
        subscribedSocieties: newSubscribedSocieties
      });

      console.log("User document created and subscribed societies updated");
    }
  } catch (e) {
    console.error("Error updating subscribed societies: ", e);
  }
};
