const admin = require('firebase-admin');

const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

// A partir de este punto, puedes interactuar con Firebase Realtime Database
const db = admin.database();
const estantes = db.ref('productos/estantes');

estantes.once('value')
  .then((snapshot) => {
    const estantesData = snapshot.val();
    console.log('Datos del libro2:', estantesData);
  })
  .catch((error) => {
    console.error('Error al leer datos:', error);
  });

  module.exports = estantes;