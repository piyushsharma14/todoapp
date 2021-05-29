import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDKmTSmppmh4BQXkHGULE1AO9-KVM8N1KE",
  authDomain: "todo-list-64f41.firebaseapp.com",
  databaseURL: "https://todo-list-64f41-default-rtdb.firebaseio.com",
  projectId: "todo-list-64f41",
  storageBucket: "todo-list-64f41.appspot.com",
  messagingSenderId: "818887880165",
  appId: "1:818887880165:web:fb724d62cd10731632530c",
};
firebase.initializeApp(firebaseConfig);
export default firebase;

export const storage = firebase.storage();
