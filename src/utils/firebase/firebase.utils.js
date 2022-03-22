import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBbi--9g1c92oXO5mKu-XWIrUq8tG58aDc',
  authDomain: 'crwn-clothing-db-7985b.firebaseapp.com',
  projectId: 'crwn-clothing-db-7985b',
  storageBucket: 'crwn-clothing-db-7985b.appspot.com',
  messagingSenderId: '162594292410',
  appId: '1:162594292410:web:836a31f6073f019062f883',
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
