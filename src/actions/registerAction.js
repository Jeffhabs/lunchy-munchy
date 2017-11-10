import { firebase } from '../firebase/firebase';
export const REGISTER_USER = 'REGISTER_USER';

export function registerUser(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
    return {
      type: REGISTER_USER,
      payload: user
    }
  }).catch((error) => {
    console.log(`ERROR REGISTERING USER: ${error}`);
  });
}