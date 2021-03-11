import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCeuCi6srYlb6Odyv20iFSdZ7Cw3B-ejag",
  authDomain: "wireless-buzzer-a0099.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-a0099-default-rtdb.firebaseio.com",
  projectId: "wireless-buzzer-a0099",
  storageBucket: "wireless-buzzer-a0099.appspot.com",
  messagingSenderId: "615877091640",
  appId: "1:615877091640:web:f99ce87e558aec5695e1cd"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
