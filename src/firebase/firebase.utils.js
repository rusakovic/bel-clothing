import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDmpLDd7SFXOoY_epXLJjfmcpm1kxW4NMY",
  authDomain: "bel-clothing-db.firebaseapp.com",
  databaseURL: "https://bel-clothing-db.firebaseio.com",
  projectId: "bel-clothing-db",
  storageBucket: "",
  messagingSenderId: "77499776256",
  appId: "1:77499776256:web:056c2774e9061f554a47e5"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // take the link into the databse
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // check if the user exists in our database
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    // if not exists, we should store the user into DB
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user:', error.message)
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  })

  // return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
     })
     return transformedCollection.reduce((accumulator, collection) => {
       accumulator[collection.title.toLowerCase()] = collection;
       return accumulator;
     }, {})
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;

