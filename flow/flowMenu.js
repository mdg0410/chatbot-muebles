const { addKeyword } = require("@bot-whatsapp/bot");
const listProducts = require('../logic/Productos.js')
const listServicios = require('../logic/Servicios.js')

const flowMenu1 = addKeyword('1')
  .addAnswer('Elige una categoría de productos:')
  .addAction(async (_, { flowDynamic }) => {
    const list = listProducts
    .map(
      (product, index) => `${index + 1}. ${product.name}`
    )
    .join("\n");
    await flowDynamic(list);
  }
  )
  .addAnswer('Por favor, selecciona el número correspondiente a la categoría que deseas explorar.')
  
  const flowMenu2 = addKeyword('2')
  .addAnswer('Los servicios disponibles son:')
  .addAction(async (_, { flowDynamic }) => {
    const list = listServicios
    .map(
      (product, index) => `${index + 1}. ${product.name}`
    )
    .join("\n");
    await flowDynamic(list);
  }
  )
  .addAnswer('Por favor, selecciona el número correspondiente al servicio que deseas explorar.')

module.exports = {flowMenu1, flowMenu2};