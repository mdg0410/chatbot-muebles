// const { firestorePromise } = require('../services/firebase/adminsdk.js');
// const { doc, setDoc, collection } = require('firebase/firestore');

// const listProducts = [
//   {
//     name: "Estantes",
//   },
//   {
//     name: "Puertas",
//   },
//   {
//     name: "Ventanas",
//   },
//   {
//     name: "Mesas",
//   },
//   {
//     name: "Sillas",
//   },
//   {
//     name: "Escritorios",
//   },
//   {
//     name: "Camas",
//   },
// ]

// const Estantes = [
//   {
//     name: "Estante 1",
//     media: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YH6tbBzFzYAQrl2ZqflyKAHaEM%26pid%3DApi&f=1&ipt=5fbf092edcdf67f956123dc789f7c9bb29aad7a2c55d177f862ce4ad825dfee5&ipo=images",
//     codigo: 'Est1',
//     description: 'Vitrina, color azul , dimensiones 3x2x1 en metros'
//   },
//   {
//     name: "Estante 2",
//     media: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YH6tbBzFzYAQrl2ZqflyKAHaEM%26pid%3DApi&f=1&ipt=5fbf092edcdf67f956123dc789f7c9bb29aad7a2c55d177f862ce4ad825dfee5&ipo=images",
//     codigo: 'Est2',
//     description: 'Estante de madera, color verde , dimensiones 5x2x1.5 en metros'
//   },
//   {
//     name: "Estante 3",
//     media: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YH6tbBzFzYAQrl2ZqflyKAHaEM%26pid%3DApi&f=1&ipt=5fbf092edcdf67f956123dc789f7c9bb29aad7a2c55d177f862ce4ad825dfee5&ipo=images",
//     codigo: 'Est3',
//     description: 'Estante de madera, color morado , dimensiones 3x2x2 en metros'
//   },
//   {
//     name: "Estante 4",
//     media: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YH6tbBzFzYAQrl2ZqflyKAHaEM%26pid%3DApi&f=1&ipt=5fbf092edcdf67f956123dc789f7c9bb29aad7a2c55d177f862ce4ad825dfee5&ipo=images",
//     codigo: 'Est4',
//     description: 'Estante de madera, color amarillo, dimensiones 3x2x2 en metros'
//   },
//   {
//     name: "Estante 5",
//     media: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YH6tbBzFzYAQrl2ZqflyKAHaEM%26pid%3DApi&f=1&ipt=5fbf092edcdf67f956123dc789f7c9bb29aad7a2c55d177f862ce4ad825dfee5&ipo=images",
//     codigo: 'Est5',
//     description: 'Estante de madera, color negro, dimensiones 3x1x1 en metros'
//   },
// ]

// firestorePromise.then(async (firestore) => {
//   const productosCollection = collection(firestore, 'productos'); // Nombre de la colección
//   const estantesDoc = doc(productosCollection, 'Estantes'); // Nombre del documento

//   try {
//     // Creamos un documento llamado "Estantes" dentro de la colección "productos" con el array "Estantes"
//     await setDoc(estantesDoc, { Estantes });
//     console.log('Documento "Estantes" agregado en la colección "productos"');
//   } catch (error) {
//     console.error('Error al agregar el documento "Estantes":', error);
//   }
// }).catch((error) => {
//   console.error('Error al acceder a Firestore:', error);
// });

