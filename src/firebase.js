import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyABYNn7wJJ7KGmhUbXE77q5olWjTIP75Ng",
  authDomain: "auth-test-f56c9.firebaseapp.com",
  projectId: "auth-test-f56c9",
  storageBucket: "auth-test-f56c9.appspot.com",
  messagingSenderId: "41522319426",
  appId: "1:41522319426:web:9a9253b9e6bc490a22dddb"
}

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}
