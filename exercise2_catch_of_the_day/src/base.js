import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCzeSrRYe_8mD_fr2C6N2hlLl51gm5ZSSo",
  authDomain: "catch-of-the-day-ef5c8.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-ef5c8-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
