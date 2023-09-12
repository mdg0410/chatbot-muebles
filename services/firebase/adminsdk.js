const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

// Configura tu objeto de configuración de Firebase aquí
const firebaseConfig = {
  apiKey: "AIzaSyAmbHNWUe2LHrb6vCfA39hmjXndZxUJ77Y",

  authDomain: "eventsuio.firebaseapp.com",

  databaseURL: "https://eventsuio-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "eventsuio",

  storageBucket: "eventsuio.appspot.com",

  messagingSenderId: "826625941318",

  appId: "1:826625941318:web:95fd8b6a44e15806138f47"

};

// Inicializa la aplicación de Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

// Exporta la instancia de Firestore como una promesa
const firestorePromise = new Promise((resolve, reject) => {
  if (db) {
    resolve(db);
  } else {
    reject(new Error('Error al inicializar Firestore'));
  }
});

module.exports = { firestorePromise };