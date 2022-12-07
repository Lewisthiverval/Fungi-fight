import React from "react";

// import { useEffect, useState } from "react";
// import { db } from "./config";
// import {
//   doc,
//   collection,
//   getDocs,
//   addDoc,
//   updateDoc,
//   deleteDoc,
// } from "@firebase/firestore";

// const [users, setUsers] = useState([]);
// const [exhibitVotes, setExhibitVotes] = useState([]);

// const userCollection = collection(db, "users");
// const exhibitCollection = collection(db, "exhibits");

// export const getUsers = async () => {
//   const data = await getDocs(userCollection);
//   setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//   console.log(users);
// };

// export const getExhibits = async () => {
//   const data = await getDocs(exhibitCollection);
//   setExhibitVotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//   console.log(exhibitVotes);
// };

// export const updateExhibitVote = async (
//   id: string,
//   mod: string,
//   votes: number
// ) => {
//   const exhibitDoc = doc(db, "exhibits", id);

//   let newFields: object;
//   if (mod === "increment") {
//     newFields = { votes: votes + 1 };
//   } else {
//     newFields = { votes: votes - 1 };
//   }
//   await updateDoc(exhibitDoc, newFields);
//   const data = await getDocs(exhibitCollection);
//   setExhibitVotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//   setTimeout(() => {
//     console.log(exhibitVotes);
//   }, 5000);
// };

// export const updateUserVote = async (
//   id: string,
//   name: string,
//   newVote: string
// ) => {
//   const userDoc = doc(db, "users", id);
//   const newFields = { vote: newVote };
//   await updateDoc(userDoc, newFields);
// };
// export const addUser = async (value: any) => {
//   await addDoc(userCollection, { name: value, vote: "" });
// };

// export const deleteUser = async (id: string) => {
//   const userDoc = doc(db, "users", id);
//   await deleteDoc(userDoc);
// };
