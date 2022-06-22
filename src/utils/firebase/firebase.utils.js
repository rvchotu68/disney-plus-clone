import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  writeBatch,
  doc,
  query,
  getDocs,
} from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzzp3_-ovnqMiMNtN85ysnn5qUfE3zuUQ",
  authDomain: "disney-plus-clone-59349.firebaseapp.com",
  projectId: "disney-plus-clone-59349",
  storageBucket: "disney-plus-clone-59349.appspot.com",
  messagingSenderId: "436001115057",
  appId: "1:436001115057:web:123618ba368ff3770c0b90",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

googleProvider.getCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePop = () => signInWithPopup(auth, googleProvider);

export const checkUserDetails = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe();
        if (user) resolve(user);
      },
      reject
    );
  });
};

export const signOutUser = async () => await signOut(auth);

export const addCollectionAndDocuments = async (collName, jsonData) => {
  const collectionRef = await collection(db, collName);
  const batch = writeBatch(db);
  jsonData.forEach((data) => {
    const docRef = doc(collectionRef, data.title.toLowerCase());
    batch.set(docRef, data);
  });
  await batch.commit();
  console.log("done");
};

export const getMoviesAndDocuments = async (movies) => {
  const collectionRef = await collection(db, movies);
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => doc.data());
};
