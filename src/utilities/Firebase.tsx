import { type FirebaseApp, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyD6sVFyxCnRXLG268J66J-eN1I-UbdVBMI',
  authDomain: 'coder-4ff72.firebaseapp.com',
  projectId: 'coder-4ff72',
  storageBucket: 'coder-4ff72.appspot.com',
  messagingSenderId: '972266281245',
  appId: '1:972266281245:web:5d1e5fa3014d4a03c5e9f4'
}

// Initialize Firebase
export const FirebaseInit = (): FirebaseApp => {
  return initializeApp(firebaseConfig)
}
export const FirebaseAuth = getAuth(FirebaseInit())
