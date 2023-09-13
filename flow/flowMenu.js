const { addKeyword } = require("@bot-whatsapp/bot");
const flowAgent = require('./flowAgente.js');
const { getDocument, getCollection } = require("../logic/getFirebase.js");
const {flowContacto, flowCotizacion, flowSugerencias} = require('./flowChatGPT.js');


//--------------------MENU DE PRODUCTOS--------------------

const flowMenu1 = addKeyword('1')
  .addAnswer('Elige una categoría de productos:')
  
  //Menu de productos

  .addAction(async (_, { flowDynamic }) => {

    // Objeto para almacenar los datos
    const response = await getCollection('productos');

    for (let i = 0; i < response.length; i++) {
      await flowDynamic({
        body: `${i+1}. ${response[i].id}`
      }
      )
    }
    })

  .addAnswer('Por favor, selecciona el número correspondiente al estante que deseas explorar.')

  //Seleccion del producto
  .addAction({ capture: true }, async(ctx, { fallBack ,flowDynamic, state }) => {
    const regex = /^[1-7]$/;
    if (regex.test(ctx.body)) {

    // state.update({ producto: listProducts[ctx.body - 1].description });
    flowDynamic(`Productos disponibles:`)

    if (ctx.body.includes('1')){
      state.update({ producto: 'Estantes' });
      const response = await getDocument('productos', 'Estantes')
      
    for (let i = 0; i < response.Estantes.length - 1; i++) {
      await flowDynamic({
        body: `${response.Estantes[i].name}`//, media: Estantes[i].media
      }
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
    // state.update({ codigo: ctx.body });

    const myState = state.getMyState()
    const Codigos = []

    switch (myState.producto) {
      case 'Estantes':
        const response = await getDocument('productos', 'Estantes')
        for (let i = 0; i < response.Estantes.length - 1; i++) {
          Codigos.push(response.Estantes[i].codigo);
        }
        
        break;
    }

    if (!Codigos.includes(ctx.body)){
      flowDynamic('Recuerda digitar el codigo tal cual como aparece en la lista de productos.')
      flowDynamic('El codigo ingresado no es valido, por favor intenta de nuevo.')
      return fallBack();
    }
    await flowDynamic('Excelente elección!')

  })

  //Inicio chatGPT en rol de ventas o hacer pedido
  .addAnswer(['A continuacion:',
  'Digita *[Pedir]* para hacer la compra',
  'Digita [*Home*] si deseas volver al menu de inicio'],
   null, null, [flowAgent])
  

  //--------------------MENU DE SERVICIOS--------------------


  //Menu servicios
  const flowMenu2 = addKeyword('2')
  .addAnswer('Los servicios disponibles son:')
  .addAction(async (_, { flowDynamic }) => {
    const response = await getCollection('servicios');

    for (let i = 0; i < response.length; i++) {
  
      await flowDynamic({
        body: `${i+1}. ${response[i].id}`
      }
      )
    }
  }
  )
  .addAnswer('Por favor, selecciona el número correspondiente al servicio que deseas explorar.', null, null, [flowContacto, flowCotizacion, flowSugerencias])

module.exports = {flowMenu1, flowMenu2};