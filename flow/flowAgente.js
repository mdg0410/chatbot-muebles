const { addKeyword } = require("@bot-whatsapp/bot");

const flowPedido = addKeyword("pedir")
  .addAnswer('¡Estamos desviando tu conversación a nuestro agente! 🚀✨')
  .addAction(async (ctx, {provider, state, flowDynamic}) => {
    const myState = state.getMyState()
    await provider.sendText(`593962889699@s.whatsapp.net`, `Hola, soy ${ctx.from} y quiero comprar el producto ${myState.codigo}`)
    await flowDynamic('En breve un asesor se pondrá en contacto contigo. 🕒')
    await flowDynamic('¡Gracias por visitarnos en la Tienda de Muebles BS! 🛋️✨')
  })  


module.exports = flowPedido;