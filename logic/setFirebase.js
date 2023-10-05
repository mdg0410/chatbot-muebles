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

async function setProductos(documentoNombre, arrayDatos) {
  try {
    const firestore = await firestorePromise;
    const coleccion = collection(firestore, 'productos');
    const documentoRef = doc(coleccion, documentoNombre)
    const datos = arrayDatos
    await setDoc(documentoRef, { datos: datos });
  } catch (error) {
    console.error(`Error al guardar el documento productos en la colección Estantes:`, error);
    throw error;
  }
}

module.exports = { setClienteNumber, setProductos };