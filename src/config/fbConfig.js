import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyC-IfmQKKTu47d-qWbGjG1rPWqc80YD9e4",
    authDomain: "bpt-cryptocurrency.firebaseapp.com",
    projectId: "bpt-cryptocurrency",
    storageBucket: "bpt-cryptocurrency.appspot.com",
    messagingSenderId: "803431191723",
    appId: "1:803431191723:web:2c47ffa1c1311be4ce13ee",
    measurementId: "G-NK7NT1KQ1B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampInSnapshots: true})

  export default firebase