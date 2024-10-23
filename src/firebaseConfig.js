// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCBGYOj6UxBWZ7A3qdScWY8UORx3UvrbiY",
  authDomain: "newsheadlineapp",
  projectId: "newsheadlineapp",
  storageBucket: "gs://newsheadlineapp.appspot.com",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "879672164720"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
