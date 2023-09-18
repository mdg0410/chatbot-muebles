const { firestorePromise } = require('../services/firebase/adminsdk.js');
const { collection, doc, setDoc } = require('firebase/firestore');

async function setClienteNumber(clienteId) {
  try {
    const firestore = await firestorePromise;
    const coleccion = collection(firestore, 'clientes');
    const nombreDocumento = clienteId;
    const documentoRef = doc(coleccion, nombreDocumento)
    await setDoc(documentoRef, {});
  } catch (error) {
    console.error(`Error al guardar el documento "${clienteId}" en la colección "clientes":`, error);
    throw error;
  }
}

module.exports = { setClienteNumber };