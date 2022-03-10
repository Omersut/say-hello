import { collection } from "firebase/firestore";
import db from "./Firebase";

export const movieCollectionRef = collection(db, "sayhello");
