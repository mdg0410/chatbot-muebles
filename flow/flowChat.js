const { addKeyword } = require("@bot-whatsapp/bot");

const flowContacto = addKeyword('1', { sensitive: true })
.addAnswer('¡Estamos desviando tu conversación a nuestro agente! 🚀✨')
  .addAction(async (ctx, {provider, state, flowDynamic}) => {
    const myState = state.getMyState()
    await provider.sendText(`593962889699@s.whatsapp.net`, `Hola, soy ${ctx.from} y quiero ponerme en contacto con usted`)
    await flowDynamic('En breve un asesor se pondrá en contacto contigo. 🕒')
    await flowDynamic('¡Gracias por visitarnos en la Tienda de Muebles BS! 🛋️✨')
  }) 
const flowCotizacion = addKeyword('2', { sensitive: true })
.addAnswer('¡Estamos desviando tu conversación a nuestro agente! 🚀✨')
  .addAction(async (ctx, {provider, state, flowDynamic}) => {
    const myState = state.getMyState()
    await provider.sendText(`593962889699@s.whatsapp.net`, `Hola, soy ${ctx.from} y quiero ayuda con una cotizacion`)
    await flowDynamic('En breve un asesor se pondrá en contacto contigo. 🕒')
    await flowDynamic('¡Gracias por visitarnos en la Tienda de Muebles BS! 🛋️✨')
  }) 
const flowSugerencias = addKeyword('3', { sensitive: true })
.addAnswer('Gracias por tu sugerencia, la tendremos en cuenta para mejorar nuestro servicio.')
.addAnswer('¡Gracias por visitarnos en la Tienda de Muebles BS! 🛋️✨')

module.exports = {flowContacto, flowCotizacion, flowSugerencias};