import { db } from "../lib/firebaseConfig";
import { getAuth } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const auth = getAuth();
