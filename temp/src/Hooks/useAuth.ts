import { Auth } from "firebase/auth";
// check if the user is logged in then return the user object otherwise return null
import { useEffect, useState } from "react";
export const useAuth = (auth: Auth) => {
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, [auth]);

  return user;
};
