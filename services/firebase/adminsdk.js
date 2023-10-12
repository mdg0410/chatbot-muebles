const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

// Configura tu objeto de configuración de Firebase aquí
const firebaseConfig = {
  apiKey: "AIzaSyDItbot7pcWRX4vySWzmIJvEN6jLP6JRuA",
  authDomain: "bsmueblesdisenos.firebaseapp.com",
  projectId: "bsmueblesdisenos",
  storageBucket: "bsmueblesdisenos.appspot.com",
  messagingSenderId: "996385877439",
  appId: "1:996385877439:web:460751ef014f10bd7b050a",
  measurementId: "G-C3SQPG9VHP"
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