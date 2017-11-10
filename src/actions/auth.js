import { firebase } from '../firebase/firebase';

export const registerPage = () => {
  return () => {
    return firebase.auth().signInWithEmailAndPassword()
  }; 
};