import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDaJ_QUqKgN-5LgAuP9sZGtNnBTSZo_unE",
  authDomain: "admin-dashboard-be89b.firebaseapp.com",
  projectId: "admin-dashboard-be89b",
  storageBucket: "admin-dashboard-be89b.appspot.com",
  messagingSenderId: "818814837168",
  appId: "1:818814837168:web:57f7c3333e40944fa2f675",
  measurementId: "G-0FGB3HQH3R"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


export { auth, googleProvider };
