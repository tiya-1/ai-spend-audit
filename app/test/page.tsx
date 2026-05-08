"use client";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db } from "@/lib/firebase";

export default function TestPage() {
  const saveData = async () => {
    try {
      const docRef = await addDoc(collection(db, "test"), {
        status: "working",
        createdAt: serverTimestamp(),
      });

      console.log(docRef.id);

      alert("Saved successfully!");
    } catch (error) {
      console.error(error);

      alert("Firebase error");
    }
  };

  return (
    <main
      style={{
        padding: "40px",
      }}
    >
      <button
        onClick={saveData}
        style={{
          padding: "12px 20px",
          background: "black",
          color: "white",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Save To Firebase
      </button>
    </main>
  );
}