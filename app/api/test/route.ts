import { db } from "@/lib/firebase";

import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

export async function GET() {
  await addDoc(collection(db, "test"), {
    status: "working",
    createdAt: serverTimestamp(),
  });

  return Response.json({
    success: true,
  });
}