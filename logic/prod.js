const { setProductos } = require('./setFirebase.js');
const { queryCode } = require('./getFirebase.js');

const Estantes = [
  {
    name: "Estante Estandar Blanco",
    code: "ETE2S",
    media: "https://firebasestorage.googleapis.com/v0/b/bsmueblesdisenos.appspot.com/o/Estantes%2FETE2S.jpeg?alt=media&token=a21cbdfc-fc24-48f3-8a40-3037b0ea8f6b",
    price: 0,
  },
  {
    name: "Estante Estandar Azul",
    code: "ETEAS",
    media: "https://firebasestorage.googleapis.com/v0/b/bsmueblesdisenos.appspot.com/o/Estantes%2FETEAS.jpeg?alt=media&token=1403f213-addd-4c98-ab32-8da475e69a8c",
    price: 0,
  },
  {
    name: "Estante Estandar Blanco",
    code: "ETEBS",
    media: "https://firebasestorage.googleapis.com/v0/b/bsmueblesdisenos.appspot.com/o/Estantes%2FETEBS.jpeg?alt=media&token=4ed3748a-9031-41d3-b0ed-8493f16da72f",
    price: 0,
  },
  {
    name: "Estante Estandar Gris",
    code: "ETEG1S",
    media: "https://firebasestorage.googleapis.com/v0/b/bsmueblesdisenos.appspot.com/o/Estantes%2FETEG1S.jpeg?alt=media&token=8d92b9fd-aa07-4216-a98e-2b036770ed72",
    price: 0,
  },
  {
    name: "Estante Estandar Gris",
    code: "ETEGRS",
    media: "https://firebasestorage.googleapis.com/v0/b/bsmueblesdisenos.appspot.com/o/Estantes%2FETEGRS.jpeg?alt=media&token=1c24bae1-8497-40b0-8855-8c9dbb8e7c02",
    price: 0,
  },
  {
    name: "Estante Estandar Negro",
    code: "ETEN1S",
    media: "https://firebasestorage.googleapis.com/v0/b/bsmueblesdisenos.appspot.com/o/Estantes%2FETEN1S.jpeg?alt=media&token=bcf697f2-48d7-4f18-8d4a-af182834ffca",
    price: 0,
  },
  {
    name: "Estante Doble Negro y Rojo",
    code: "ETENRS",
    media: "https://firebasestorage.googleapis.com/v0/b/bsmueblesdisenos.appspot.com/o/Estantes%2FETENRS.jpeg?alt=media&token=d4cd6219-ceb9-4458-bf77-b5f24406cc42",
    price: 0,
  },
  {
    name: "Estante Estandar Negro",
    code: "ETENS",
    media: "https://firebasestorage.googleapis.com/v0/b/bsmueblesdisenos.appspot.com/o/Estantes%2FETENS.jpeg?alt=media&token=96a57308-377b-48eb-b6f3-dc04f6478e57",
    price: 0,
  },
  {
    name: "Estante Estandar Rosado",
    code: "ETEPS",
    media: "https://firebasestorage.googleapis.com/v0/b/bsmueblesdisenos.appspot.com/o/Estantes%2FETEPS.jpeg?alt=media&token=462853fa-e8f9-4b88-9119-7203b0df6b8b",
    price: 0,
  },
  {
    name: "Estante Estandar Rojo",
    code: "ETERS",
    media: "https://firebasestorage.googleapis.com/v0/b/bsmueblesdisenos.appspot.com/o/Estantes%2FETERS.jpeg?alt=media&token=b3d9e4cb-c234-4468-84ed-ed47dc006d03",
    price: 0,
  },
  {
    name: "Estante Estandar Celeste",
    code: "ETESL",
    media: "https://firebasestorage.googleapis.com/v0/b/bsmueblesdisenos.appspot.com/o/Estantes%2FETESL.jpeg?alt=media&token=af7c34cf-394e-441a-9c22-65cbb1c18c54",
    price: 0,
  },
  {
    name: "Estante Estandar Violeta",
    code: "ETEVS",
    media: "https://firebasestorage.googleapis.com/v0/b/bsmueblesdisenos.appspot.com/o/Estantes%2FETEVS.jpeg?alt=media&token=d40e5d9d-7d87-4a0c-8a4c-fafd24f9c1fc",
    price: 0,
  },
  {
    name: "Estante Medio Doble",
    code: "ETP2S",
    media: "https://firebasestorage.googleapis.com/v0/b/bsmueblesdisenos.appspot.com/o/Estantes%2FETP2S.jpeg?alt=media&token=954880fb-bb4f-421b-9445-a27b007e842e",
    price: 0,
  },
  {
    name: "Estante Perchero Blanco",
    code: "ETPBPL",
    media: "https://firebasestorage.googleapis.com/v0/b/bsmueblesdisenos.appspot.com/o/Estantes%2FETPBPL.jpeg?alt=media&token=926727d6-818a-4f81-afc0-9b197c3a3b7f",
    price: 0,
  },
  {
    name: "Estante Perchero Verde",
    code: "ETPGPS",
    media: "https://firebasestorage.googleapis.com/v0/b/bsmueblesdisenos.appspot.com/o/Estantes%2FETPGPS.jpeg?alt=media&token=c155a4e5-9423-4b5c-b15e-dc8e4ee68d94",
    price: 0,
  },
  {
    name: "Estante Doble Negro",
    code: "ETPNL",
    media: "https://firebasestorage.googleapis.com/v0/b/bsmueblesdisenos.appspot.com/o/Estantes%2FETPNL.jpeg?alt=media&token=c7e73496-32a0-4adc-b99b-9ed55f75036e",
    price: 0,
  },
  {
    name: "Estante Doble Negro y Rojo",
    code: "ETPNRS",
    media: "https://firebasestorage.googleapis.com/v0/b/bsmueblesdisenos.appspot.com/o/Estantes%2FETPNRS.jpeg?alt=media&token=82a440c2-2482-437f-bb29-02ef93507400",
    price: 0,
  },
  {
    name: "Estante Perchero Doble",
    code: "ETPRDS",
    media: "https://firebasestorage.googleapis.com/v0/b/bsmueblesdisenos.appspot.com/o/Estantes%2FETPRDS.jpeg?alt=media&token=36afff1d-56ba-45f8-a038-95ea60067351",
    price: 0,
  },
  {
    name: "Estante Estandar Doble",
    code: "ETPRNS",
    media: "https://firebasestorage.googleapis.com/v0/b/bsmueblesdisenos.appspot.com/o/Estantes%2FETPRNS.jpeg?alt=media&token=2d7c1352-af62-4fa4-995b-385fb136815d",
    price: 0,
  },
  {
    name: "Estante Perchero Doble",
    code: "ETPRPS",
    media: "https://firebasestorage.googleapis.com/v0/b/bsmueblesdisenos.appspot.com/o/Estantes%2FETPRPS.jpeg?alt=media&token=9a995980-c5dd-418b-9fbc-87238216851b",
    price: 0,
  },
  {
    name: "Estante Estandar Amarilla",
    code: "ETPYS",
    media: "https://firebasestorage.googleapis.com/v0/b/bsmueblesdisenos.appspot.com/o/Estantes%2FETPYS.jpeg?alt=media&token=f031c953-3e1a-433c-bdb1-b90fac6a79aa",
    price: 0,
  },
]
