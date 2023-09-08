const { addKeyword } = require("@bot-whatsapp/bot");
const {vendedor} = require('../Roles/Roles.js')
const {Estantes} = require('../logic/Productos.js')
const flowAgente = require('../flow/flowAgente.js')
const chatGPT = require('../services/openai/chatgpt.js');

const flowSmartVenta = addKeyword('Asistente')
.addAction(async(_, {flowDynamic, state}) => {
  const response = await chatGPT(vendedor, Estantes[0].description);
  flowDynamic(response);
  state.update({ respon: response });
  const myState = state.getMyState();
  console.log(`smart:${myState.respon}`);
})
// .addAction({ capture: true }, async (ctx, { gotoFlow, fallBack, flowDynamic, state}) => {
//   const myState = state.getMyState();
//   if(!ctx.body.includes('Pedir')){
//   const response = await chatGPT(vendedor, ctx.body , myState.estado);
//   flowDynamic(response);
//   console.log('chatGPT')
//   // await state.update({ estado:response });
//   return fallBack();
//   }
//   else{
//     return gotoFlow(flowAgente);
//   }
// }
// )

module.exports = {flowSmartVenta};