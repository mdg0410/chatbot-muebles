const { firestorePromise } = require('../services/firebase/adminsdk.js');
const { doc, getDoc, collection, getDocs } = require('firebase/firestore');

async function getDocument(coleccionNombre, documentoNombre) {
  try {
    const firestore = await firestorePromise;
    const colección = collection(firestore, coleccionNombre);
    const documento = doc(colección, documentoNombre);
    const docSnapshot = await getDoc(documento);

    if (docSnapshot.exists()) {
      return docSnapshot.data();
    } else {
      console.log(`El documento "${documentoNombre}" en la colección "${coleccionNombre}" no existe.`);
      return null;
    }
  } catch (error) {
    console.error(`Error al obtener el documento "${documentoNombre}" en la colección "${coleccionNombre}":`, error);
    throw error; 
    }
}

async function getCollection(coleccionNombre) { 
  try{
    const firestore = await firestorePromise;
    const coleccionRef = collection(firestore, coleccionNombre);
    const consulta = await getDocs(coleccionRef);
    
    const datos = [];

    consulta.forEach((doc) => {
      datos.push({ id: doc.id, ...doc.data() });
    });

    return datos;

  } catch (error) {
    console.error(`Error al obtener la colección "${coleccionNombre}":`, error);
    throw error; 
  }

}

module.exports = { getDocument, getCollection };
