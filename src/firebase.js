import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBOSGR9O4_6aRPCJeEFsqUtI9yNaJuP-vw",
    authDomain: "whatsappclone-3352d.firebaseapp.com",
    projectId: "whatsappclone-3352d",
    storageBucket: "whatsappclone-3352d.appspot.com",
    messagingSenderId: "885130813074",
    appId: "1:885130813074:web:805a08df82873ca0ce904b",
    measurementId: "G-7TB0D4CJFM"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebaseApp.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;