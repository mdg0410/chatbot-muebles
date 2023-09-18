const { addKeyword } = require('@bot-whatsapp/bot');
const { getDocument, getCollection } = require('../logic/getFirebase.js');

//Flows

const flowAgent = require('./flowAgente.js');
const {flowContacto, flowCotizacion, flowSugerencias} = require('./flowChat.js');

//--------------------MENU DE PRODUCTOS--------------------

const flowMenu1 = addKeyword('1', {sensitive: true})
  .addAnswer('Categoría de productos:')
  
  //Menu de productos

  .addAction(async (_, { flowDynamic }) => {
    const response = await getCollection('productos');
    for (let i = 0; i < response.length; i++) {
      await flowDynamic({
        body: `${i+1}. ${response[i].id}`
      })
    }
  })
  .addAnswer(['Por favor, selecciona la categoría que te interesa explorar.', '¡Estamos aquí para ayudarte a encontrar el mueble perfecto! 😊'])

  //Seleccion del producto
  .addAction({ capture: true }, async(ctx, { fallBack ,flowDynamic, state }) => {
    const regex = /^[1-7]$/;
    if (regex.test(ctx.body)) {
    await flowDynamic('Productos disponibles:')

      switch (ctx.body) {
        case '1':
          state.update({ producto: 'Estantes' });
          const response = await getDocument('productos', 'Estantes')
          for (let i = 0; i < response.Estantes.length - 1; i++) {
            await flowDynamic({
              body: `${response.Estantes[i].codigo}`
            })
          }
          break;
      }

    flowDynamic('Introduce el código del producto.')
    flowDynamic('Recuerda digitar el codigo tal cual como aparece en la lista de productos.')
  }
  else {
    flowDynamic('El valor ingresado no es válido, por favor inténtalo de nuevo.')
    return fallBack();
  }
  })

  .addAction({ capture: true }, async (ctx, { fallBack , flowDynamic, state }) => {
 
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
    } else {
      state.update({ codigo: ctx.body });
    }
    await flowDynamic('Excelente elección, estás a un paso de hacer realidad tus ideas de decoración! 😊')

  })

  //Inicio chatGPT en rol de ventas o hacer pedido
  .addAnswer(['A continuacion:',
  'Si deseas realizar una compra, escribe [Pedir].',
  'Si prefieres volver al menú de inicio, simplemente escribe [Home].'],
   null, null, [flowAgent])
  

  //--------------------MENU DE SERVICIOS--------------------


  //Menu servicios
  const flowMenu2 = addKeyword('2', {sensitive: true})
  .addAnswer('Servicios disponibles:')
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

  //--------------------PEDIDO DIRECTO--------------------

  const flowMenu3 = addKeyword('3', {sensitive: true})
  .addAnswer('Introduce el código del producto que deseas comprar:')
  .addAction({ capture: true }, async (ctx, { state }) => {
    state.update({ pedido: ctx.body });
  })
  .addAnswer('Excelente elección')
  .addAnswer('¡Estamos desviando tu conversación a nuestro agente! 🚀✨')
  .addAction(async (ctx, {provider, state, flowDynamic}) => {
    const myState = state.getMyState()
    await provider.sendText(`593962889699@s.whatsapp.net`, `Hola, soy ${ctx.from} y quiero comprar el producto ${myState.pedido}`)
    await flowDynamic('En breve un asesor se pondrá en contacto contigo. 🕒')
    await flowDynamic('¡Gracias por visitarnos en la Tienda de Muebles BS! 🛋️✨')
  })  

module.exports = {flowMenu1, flowMenu2, flowMenu3};