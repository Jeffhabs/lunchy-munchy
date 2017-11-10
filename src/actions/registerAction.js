import { firebase } from '../firebase/firebase';
export const REGISTER_USER = 'REGISTER_USER';

export function registerUser(email, password) {
  console.log(`EMAIL: ${email}`);
  return {
    type: REGISTER_USER,
    payload: email
  }
}

/*
function register(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
    console.log(`ERROR REGISTERING USER: ${error}`);
  });

  return {
    type: REGISTER_USER,
    payload: request
  };
}
*/