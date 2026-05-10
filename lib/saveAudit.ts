
import {
  collection,
  addDoc,
} from "firebase/firestore";

import { db } from "./firebase";

export async function saveAuditToFirebase(
  data: any
) {
  const docRef =
    await addDoc(
      collection(db, "audits"),
      data
    );

  return docRef.id;
}

