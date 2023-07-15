import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAGJ8dRsjcF4FzawBjtqOhkfFPC-eNF9OU",
  authDomain: "react-expense-tracker-c37ef.firebaseapp.com",
  projectId: "react-expense-tracker-c37ef",
  storageBucket: "react-expense-tracker-c37ef.appspot.com",
  messagingSenderId: "964977419454",
  appId: "1:964977419454:web:a105aabd2a655abbd16aef",
};
 
const fire = firebase.initializeApp(config);
export default fire;