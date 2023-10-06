const { firestorePromise } = require('../services/firebase/adminsdk.js');
const { doc, getDoc, collection, getDocs, query, where } = require('firebase/firestore');

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

async function queryCode(documentoNombre, codigo) {
  try {
    const firestore = await firestorePromise;
    const colección = collection(firestore, 'productos');
    const documento = doc(colección, documentoNombre);
    const docSnapshot = await getDoc(documento);

    if(docSnapshot.exists()){
      const estantes = docSnapshot.data().datos;
      const estanteEncontrado = estantes.find(estante => estante.code === codigo);
      if (estanteEncontrado) {
        return estanteEncontrado.media;
      } else {
        console.log(`No se encontró un estante con el código "${codigo}"`);
        return null;
      }
    } else {
      console.log('No se encontró el documento "Estantes" en la colección "productos"');
      return null;
    }
  } catch (error) {
    console.error(`Error al buscar el estante con el código "${codigo}":`, error);
    throw error;
  }
}

module.exports = { getDocument, getCollection, queryCode };
