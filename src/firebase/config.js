import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCXe5IpPCqSsJI2vRxhzbbuDam4M_jzcmY",
  authDomain: "photogram-6b9ba.firebaseapp.com",
  projectId: "photogram-6b9ba",
  storageBucket: "photogram-6b9ba.appspot.com",
  messagingSenderId: "273430999874",
  appId: "1:273430999874:web:b610d05ec8561fbc000edb",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
