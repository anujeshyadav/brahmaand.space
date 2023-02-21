// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDBkAYPB2sQ3aT2_ITUSpnKiob8WLXD-CY",
  authDomain: "brahmaanand-web.firebaseapp.com",
  projectId: "brahmaanand-web",
  storageBucket: "brahmaanand-web.appspot.com",
  messagingSenderId: "28248245116",
  appId: "1:28248245116:web:1f3c6e9aa907c86d979af9",
  measurementId: "G-S916L836BC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  await signInWithPopup(auth, provider)
    .then((result) => {
      const Firename = result.user.displayName;
      const Fireemail = result.user.email;
      const FirephotoURL = result.user.photoURL;
      const Fireuid = result.user.uid;

      localStorage.setItem("Firename", Firename);
      localStorage.setItem("Fireemail", Fireemail);
      localStorage.setItem("FirephotoURL", FirephotoURL);
      localStorage.setItem("Fireuid", Fireuid);
      // const myPromise = new Promise((resolve, reject) => {
      //   resolve(result);
      // });
      // myPromise.then((res) => {
      //   return res;
      // });
    })
    .catch((err) => {
      console.log(err);
    });
};
