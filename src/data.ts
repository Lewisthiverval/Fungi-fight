import {
  doc,
  collection,
  serverTimestamp,
  getDoc,
  getDocs,
  orderBy,
  query,
  addDoc,
  updateDoc,
  deleteDoc,
  where,
  limit,
  onSnapshot,
  setDoc,
  Timestamp,
} from "@firebase/firestore";
import { db } from "./config";

export const fighters = {
  fighter1: {
    name: "fighter1",
    strength: 0.5,
    energy: 0.7,
    resistance: 0.2,
    votes: 0,
  },
  fighter2: {
    name: "fighter2",
    strength: 0.5,
    energy: 0.7,
    resistance: 0.2,
    votes: 0,
  },
  fighter3: {
    name: "fighter3",
    strength: 0.5,
    energy: 0.7,
    resistance: 0.2,
    votes: 0,
  },
  fighter4: {
    name: "fighter4",
    strength: 0.5,
    energy: 0.7,
    resistance: 0.2,
    votes: 0,
  },
};

export let users = {
  lewis: {
    name: "lewis",
    email: "",
    vote: "",
  },
  user2: {
    name: "",
    email: "",
    vote: "",
  },
};

export let chat = {};

export type Fighters = typeof fighters;
export type Fighter = Fighters[keyof Fighters];
export type Users = typeof users;
export type User = typeof users;

export const api = {
  updateFighter: (name: string, number: number) => {
    let newNum = fighters[name].votes;

    fighters[name] = { ...fighters[name], votes: newNum + 1 };
  },

  getFighter: (name: string) => Promise.resolve([fighters[name]]),

  updateUserVote: (name: string, vote: string) => {
    users[name] = { ...users[name], vote: vote };
    console.log(users);
  },

  addUser: (name: string, email: string) => {
    users[name] = { name: name, email: "", vote: "" };
    console.log(users);
  },

  addToChat: (name: string, content: string, type: string) => {
    chat[content] = { content: content, name: name, timeStamp: "", type: type };
    console.log(chat);
  },
};

const dbUsers = collection(db, "users");
const dbFighters = collection(db, "fighters");
const dbChat = query(collection(db, "chat"), orderBy("createdAt"), limit(100));

export type Message = {
  id: string;
  content: string;
  name: string;
  type: string;
};

export const fireDb = {
  /////GET//////
  getDbUsers: () => {
    let allUsers = [];
    getDocs(dbUsers).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        allUsers.push({ ...doc.data(), id: doc.id });
      });
    });
    console.log(allUsers);
    return allUsers;
  },

  getDbFighters: () => {
    return getDocs(dbFighters).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        return doc.data();
      });
    });
  },

  getFighterVotes: (name: string) => {
    const docRef = doc(db, "fighters", name);
    return getDoc(docRef)
      .then((doc) => doc.data().vote)
      .then((doc) => {
        return doc;
      });
  },

  getVotes: async () => {
    let totalVotes = 0;
    return await getDocs(dbFighters)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          totalVotes += doc.data().vote;
        });
      })
      .then(() => {
        return totalVotes;
      });
  },

  getDbChat: () =>
    getDocs(dbChat).then((snapshot) => {
      return snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id } as Message;
      });
    }),

  onDbChat: (fn: (messages: Message[]) => void) =>
    onSnapshot(dbChat, (snapshot) => {
      const messages = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id } as Message;
      });
      fn(messages);
    }),

  //////////

  addUser: async (name: string, email: string) => {
    const currentUser = {
      name: name,
      email: email,
      vote: "",
      hasVoted: false,
    };
    await setDoc(doc(db, "users", name), currentUser);
  },

  addToChat: async (content: string, name: string, type: string) => {
    const newMessage = {
      createdAt: serverTimestamp(),
      name: name,
      content: content,
      type: type,
    };
    await addDoc(collection(db, "chat"), newMessage);
  },

  //////////////

  updateUserVote: async (user: string, newVote: string) => {
    const docRef = doc(db, "users", user);

    await updateDoc(docRef, { vote: newVote, hasVoted: true })
      .then((docRef) => {
        console.log("Entire Document has been updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  },

  updateFighterVote: async (name: string, newVote: number) => {
    const docRef = doc(db, "fighters", name);
    const data = { name: name, vote: newVote };
    await setDoc(docRef, data)
      .then((docRef) => {
        console.log("Entire Document has been updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export const getFighter = <K extends keyof Fighters>(name: K) =>
  getDoc(doc(db, `fighters/${name}`))
    .then((x) => x.data())
    .then((x) => ({ ...fighters[name], votes: x?.votes || 0 }));

//////////UPDATE COLLECTIONS/////////////////

/////////ADD DOCUMENTS//////////
// const addUser = async (newUser: any) => {
//   const currentUser = {
//     name: newUser.name,
//     vote: newUser.vote,
//     id: newUser.id,
//   };
//   await addDoc(userCollection, currentUser);
//   setCurrentUser(currentUser);
// };

// const getExhibits = async () => {
//   const data = await getDocs(exhibitCollection);
//   setFighters(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
// };

// const getUsers = async () => {
//   const data = await getDocs(userCollection);
//   setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
// };

// const userCollection = collection(db, "users");
// const exhibitCollection = collection(db, "fighters");

// function getTotalVotes() {
//   let totalVotes: number;
//   fighters.map((fighter) => {
//     totalVotes += fighter.votes;
//   });
//   return totalVotes;
// }

// function getPourcentage(number: number) {
//   let totalVotes = 0;
//   fighters.map((fighter) => {
//     totalVotes += fighter.votes;
//   });

//   return Math.round((100 * number) / totalVotes);
// }
