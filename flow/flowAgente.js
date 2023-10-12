const { addKeyword } = require("@bot-whatsapp/bot");
const { queryCode } = require("../logic/getFirebase.js");

const flowPedido = addKeyword("pedir")
  .addAnswer('¡Estamos desviando tu conversación a nuestro agente! 🚀✨')
  .addAction(async (_, {provider, state, flowDynamic}) => {
    const myState = state.getMyState()
    const url = await queryCode(myState.producto, myState.codigo)
    await provider.sendMedia(`593962889699@s.whatsapp.net`, `${url}`, `Hola, soy ${myState.nombre} y quiero comprar el producto ${myState.codigo}`)
    await flowDynamic('En breve un asesor se pondrá en contacto contigo. 🕒')
    await flowDynamic('¡Gracias por visitarnos en la Tienda de Muebles BS! 🛋️✨')
  })  


module.exports = flowPedido;