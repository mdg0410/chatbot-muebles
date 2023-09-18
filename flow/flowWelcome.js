const { addKeyword, EVENTS } = require('@bot-whatsapp/bot');
const { flowMenu1, flowMenu2, flowMenu3 } = require('./flowMenu.js')
const { setClienteNumber } = require('../logic/setFirebase.js');

const flowPrincipal = addKeyword(['Hola', 'hola', 'Buenos dias', 'Buenas tardes', 'Buenas noches', EVENTS.WELCOME])
  .addAnswer('¡Hola! 👋 Bienvenido a la Tienda de Muebles Bs Muebles y Diseños.',)
  .addAction(async (ctx, { flowDynamic }) => {
    await flowDynamic('Por favor, selecciona una de las siguientes opciones:')
    setClienteNumber(ctx.from)
    })
  .addAnswer(
    [
      '1. Ver catálogo de muebles 🪑',
      '2. Consultar servicios dsponibles 🛍️',
      '3. Si ya tienes un código de producto y deseas hacer tu pedido de inmediato 📦'
    ]
  )  
  .addAnswer('Solo tienes que responder con el número correspondiente a la opción que desees explorar.', {capture: true}, async(ctx, { fallBack }) => {
      const regex = /^[1-3]$/;
      if (!regex.test(ctx.body)){
        return fallBack();
      }
    },
    [flowMenu1, flowMenu2, flowMenu3]
  )

module.exports = flowPrincipal;