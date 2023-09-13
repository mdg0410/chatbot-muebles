const { addKeyword } = require("@bot-whatsapp/bot");

const flowPedido = addKeyword("pedir")
.addAnswer("Estamos desviando tu conversacion a nuestro agente")
// .addAction(async (ctx, {provider}) => {
//   const nanoid = await import('nanoid')
//   const ID_GROUP = nanoid.nanoid(5)
//   const refProvider = await provider.getInstance()
//   await refProvider.groupCreate(`Media Tech Support (${ID_GROUP})`,[
//       `${ctx.from}@s.whatsapp.net`
//   ])
// })
.addAnswer('Te hemos agregado a un grupo con un asesor! Gracias')

module.exports = flowPedido;