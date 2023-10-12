const { addKeyword, EVENTS } = require('@bot-whatsapp/bot');
const { flowMenu1, flowMenu2, flowMenu3 } = require('./flowMenu.js')
const { setClienteNumber } = require('../logic/setFirebase.js');

const flowPrincipal = addKeyword(['Hola', 'hola', 'Buenos dias', 'Buenas tardes', 'Buenas noches', EVENTS.WELCOME])
  .addAnswer('Bienvenido a BS Muebles y Diseños.',)
  .addAnswer('¿Cómo te llamas?')
  .addAction({ capture: true }, async (ctx, { flowDynamic, state }) => {
    await state.update({ nombre: ctx.body });
    const myState = state.getMyState()
    setClienteNumber(ctx.from, { nombre: ctx.body })
    await flowDynamic(`¡Hola ${myState.nombre}! 👋. En que podemos ayudarte hoy?`)
    })
    .addAnswer(
      [
      '--> Menu Principal <--',
      '',
      '1. Ver catálogo de muebles 🪑',
      '2. Servicios disponibles 🛍️',
      '3. Si ya tienes un código de producto y deseas hacer tu pedido de inmediato 📦'
      ]
    )
  .addAnswer( 'Escoje una opcion:', {capture: true}, async(ctx, { fallBack }) => {
      const regex = /^[1-3]$/;
      if (!regex.test(ctx.body)){
        return fallBack();
      }
    },
    [flowMenu1, flowMenu2, flowMenu3]
  )

module.exports = flowPrincipal;