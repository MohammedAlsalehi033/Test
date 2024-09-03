import { db } from "@/lib/firebaseConfig";
import { getAuth } from "firebase/auth";
import { collection, query, where, getDocs, updateDoc, setDoc } from "firebase/firestore";

const auth = getAuth();

export const updateSubscribedSocieties = async (userEmail: string, socityEmail: string, requestState: string) => {
  try {
    const userCollectionRef = collection(db, "user");
    const qUser = query(userCollectionRef, where("email", "==", userEmail));


    const societiesCollectionRef = collection(db, "society");
    const qSociety = query(userCollectionRef, where("email", "==", socityEmail));


    const querySnapshotUser = await getDocs(qUser);
    const querySnapshotSociety = await getDocs(qUser);

    if (!querySnapshotUser.empty) {
      const userDocRef = querySnapshotUser.docs[0].ref;
      const userData = querySnapshotUser.docs[0].data();
      const currentSubscribedSocieties = userData.subscribedSocieties || {};

      currentSubscribedSocieties[socityEmail] = requestState;

      await updateDoc(userDocRef, {
        subscribedSocieties: currentSubscribedSocieties,
      });

      console.log("User's subscribed societies updated successfully");
    } else {
      console.log("No user found with the provided email!");
    }


    if (!querySnapshotUser.empty) {
        const userDocRef = querySnapshotUser.docs[0].ref;
        const userData = querySnapshotUser.docs[0].data();
        const currentSubscribedSocieties = userData.subscribedSocieties || {};
  
        currentSubscribedSocieties[socityEmail] = requestState;
  
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
