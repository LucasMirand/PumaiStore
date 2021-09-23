
import 'firebase/firestore'
import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyDGGBsoGTuVTOhxswOt1jAn2pgEudrKy1Q",
    authDomain: "coderh-react.firebaseapp.com",
    projectId: "coderh-react",
    storageBucket: "coderh-react.appspot.com",
    messagingSenderId: "445423617743",
    appId: "1:445423617743:web:19d61eeb951dcc9d0419ba"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  export function getFirebase() {
    return app
  }

  export function getFirestore(){
    return firebase.firestore(app)
  }

  