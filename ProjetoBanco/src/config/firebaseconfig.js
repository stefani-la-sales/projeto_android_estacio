import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import "firebase/storage";
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCUpzesrqrs1U601FZvDYp181ubp9X1USg",
    authDomain: "projeto-banco-android.firebaseapp.com",
    projectId: "projeto-banco-android",
    storageBucket: "projeto-banco-android.appspot.com",
    messagingSenderId: "709226666821",
    appId: "1:709226666821:web:1f7a8273cc44f2e6b83c2c",
    measurementId: "G-CZ6B3WDEMF"
};
initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database;