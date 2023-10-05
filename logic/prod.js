const { setProductos } = require('./setFirebase.js');

const Estantes = [
  {
    name: "Estante Estandar Blanco",
    code: "ETE2S",
    media: "https://drive.google.com/file/d/1tICgOi-hM9d2q3clRORDajS1HfIr_zsz/view?usp=drive_link",
    price: 0,
  },
  {
    name: "Estante Estandar Azul",
    code: "ETEAS",
    media: "https://drive.google.com/file/d/1-3C0dTpDl8V6OSI96A9SHi3fyKx_fQMQ/view?usp=drive_link",
    price: 0,
  },
  {
    name: "Estante Estandar Blanco",
    code: "ETEBS",
    media: "https://drive.google.com/file/d/1jqxnQ3UkRTNltvt-H_460iPRIhatYuJj/view?usp=drive_link",
    price: 0,
  },
  {
    name: "Estante Estandar Gris",
    code: "ETEG1S",
    media: "https://drive.google.com/file/d/1HvEMId8ISPdRqDcHm6Afx4A6Ff5FwIdW/view?usp=drive_link",
    price: 0,
  },
  {
    name: "Estante Estandar Gris",
    code: "ETEGRS",
    media: "https://drive.google.com/file/d/1JayOu9gTVq0uScmp0pVVDj1X6dE6KdnW/view?usp=drive_link",
    price: 0,
  },
  {
    name: "Estante Estandar Negro",
    code: "ETEN1S",
    media: "https://drive.google.com/file/d/16CkQOAVVOxY7K5lDsHy6WbPdd0D2aDz4/view?usp=drive_link",
    price: 0,
  },
  {
    name: "Estante Doble Negro y Rojo",
    code: "ETENRS",
    media: "https://drive.google.com/file/d/1aa4_ChjBNTG3nVNl31DNvx2eCK7OBHOH/view?usp=drive_link",
    price: 0,
  },
  {
    name: "Estante Estandar Negro",
    code: "ETENS",
    media: "https://drive.google.com/file/d/1ZP-847go09xUpgB1J22sCBNg2ZJXeVCk/view?usp=drive_link",
    price: 0,
  },
  {
    name: "Estante Estandar Rosado",
    code: "ETEPS",
    media: "https://drive.google.com/file/d/1KJy3eirckcuarJuKyjtttYTFwtWGg1UZ/view?usp=drive_link",
    price: 0,
  },
  {
    name: "Estante Estandar Rojo",
    code: "ETERS",
    media: "https://drive.google.com/file/d/1Nf3Cag39rNIEgcs9DvGYTgeN8FcgAJWC/view?usp=drive_link",
    price: 0,
  },
  {
    name: "Estante Estandar Celeste",
    code: "ETESL",
    media: "https://drive.google.com/file/d/1GbGjjJWuHkkXE8rCXdQKp-Mno9xeAXyY/view?usp=drive_link",
    price: 0,
  },
  {
    name: "Estante Estandar Violeta",
    code: "ETEVS",
    media: "https://drive.google.com/file/d/1REbWM8BTfCrXg5hHZJpFdg6P5zxqT8N2/view?usp=drive_link",
    price: 0,
  },
  {
    name: "Estante Medio Doble",
    code: "ETP2S",
    media: "https://drive.google.com/file/d/1QRbmW1TmNhig4v3mBwLHuG-bl5thi-11/view?usp=drive_link",
    price: 0,
  },
  {
    name: "Estante Estandar",
    code: "",
    media: "",
    price: 0,
  },
  {
    name: "Estante Estandar",
    code: "",
    media: "",
    price: 0,
  },
  {
    name: "Estante Estandar",
    code: "",
    media: "",
    price: 0,
  },
  {
    name: "Estante Estandar",
    code: "",
    media: "",
    price: 0,
  },
  {
    name: "Estante Estandar",
    code: "",
    media: "",
    price: 0,
  },
  {
    name: "Estante Estandar",
    code: "",
    media: "",
    price: 0,
  },
  {
    name: "Estante Estandar",
    code: "",
    media: "",
    price: 0,
  },
  {
    name: "Estante Estandar",
    code: "",
    media: "",
    price: 0,
  },
  {
    name: "Estante Estandar",
    code: "",
    media: "",
    price: 0,
  },
  {
    name: "Estante Estandar",
    code: "",
    media: "",
    price: 0,
  },

]