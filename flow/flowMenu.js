const { addKeyword } = require("@bot-whatsapp/bot");
const {listProducts} = require('../logic/Productos.js')
const {listServicios} = require('../logic/Servicios.js')
const {Estantes} = require('../logic/Productos.js');
const {flowAgent} = require('./flowAgente.js');

//--------------------MENU DE PRODUCTOS--------------------

const flowMenu1 = addKeyword('1')
  .addAnswer('Elige una categoría de productos:')
  
  //Menu de productos
  .addAction(async (_, { flowDynamic }) => {
    const list = listProducts
    .map(
      (product, index) => `${index + 1}. ${product.name}`
    )
    .join("\n");
    await flowDynamic(list);
  }
  )
  .addAnswer('Por favor, selecciona el número correspondiente al estante que deseas explorar.')

  //Seleccion del producto
  .addAction({ capture: true }, async(ctx, { fallBack ,flowDynamic, state }) => {
    const regex = /^[1-7]$/;
    if (regex.test(ctx.body)) {
    state.update({ producto: listProducts[ctx.body - 1].name });
    const product = state.getMyState();
    flowDynamic(`*${product.producto}* disponibles:`)
    if (ctx.body.includes('1')){
    for (let i = 0; i < Estantes.length - 1; i++) {
      await flowDynamic({
        body: `${Estantes[i].name}`, media: Estantes[i].media}
      )
    }
  }
    else if (ctx.body.includes('2')){
      await flowDynamic('opcion 2')
      // for (let i = 1; i < Estantes.length - 1; i++) {
      //   await flowDynamic({
      //     body: `${Estantes[i].name}`, media: Estantes[i].media}
      //   )
      // }
    }
    else if (ctx.body.includes('3')){
      await flowDynamic('opcion 3')
      // for (let i = 1; i < Estantes.length - 1; i++) {
      //   await flowDynamic({
      //     body: `${Estantes[i].name}`, media: Estantes[i].media}
      //   )
      // }
    }
    else if (ctx.body.includes('4')){
      await flowDynamic('opcion 4')
      // for (let i = 1; i < Estantes.length - 1; i++) {
      //   await flowDynamic({
      //     body: `${Estantes[i].name}`, media: Estantes[i].media}
      //   )
      // }
    }
    else if (ctx.body.includes('5')){
      await flowDynamic('opcion 5')
      // for (let i = 1; i < Estantes.length - 1; i++) {
      //   await flowDynamic({
      //     body: `${Estantes[i].name}`, media: Estantes[i].media}
      //   )
      // }
    }
    else if (ctx.body.includes('6')){
      await flowDynamic('opcion 6')
      // for (let i = 1; i < Estantes.length - 1; i++) {
      //   await flowDynamic({
      //     body: `${Estantes[i].name}`, media: Estantes[i].media}
      //   )
      // }
    }
    else if (ctx.body.includes('7')){
      await flowDynamic('opcion 7')
      // for (let i = 1; i < Estantes.length - 1; i++) {
      //   await flowDynamic({
      //     body: `${Estantes[i].name}`, media: Estantes[i].media}
      //   )
      // }
    }
    flowDynamic('Por favor, digita el codigo correspondiente al producto que deseas explorar.')
  }
  else {
    flowDynamic('El valor ingresado no es valido, por favor intenta de nuevo.')
    return fallBack();
  }
  })

  .addAction({ capture: true }, async (ctx, { fallBack , flowDynamic, state }) => {
    state.update({ codigo: ctx.body });
    const Codigos = Estantes.map((product) => product.codigo);
    if (!Codigos.includes(ctx.body)){
      flowDynamic('El codigo ingresado no es valido, por favor intenta de nuevo.')
      return fallBack();
    }
    await flowDynamic('Excelente elección!')

  })

  //Inicio chatGPT en rol de ventas o hacer pedido
  .addAnswer(['A continuacion:',
  'Digita [*Asistente*] si deseas personalizar el producto',
  'Digita [*Pedir*] si deseas hacer la compra'],
   null, null, [flowAgent])
  

  //--------------------MENU DE SERVICIOS--------------------


  //Menu servicios
  const flowMenu2 = addKeyword('2')
  .addAnswer('Los servicios disponibles son:')
  .addAction(async (_, { flowDynamic }) => {
    const list = listServicios
    .map(
      (service, index) => `${index + 1}. ${service.name}`
    )
    .join("\n");
    await flowDynamic(list);
  }
  )
  .addAnswer('Por favor, selecciona el número correspondiente al servicio que deseas explorar.')

module.exports = {flowMenu1, flowMenu2};