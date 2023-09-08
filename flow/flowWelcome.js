const { addKeyword } = require("@bot-whatsapp/bot");
const {flowMenu1, flowMenu2} = require('./flowMenu.js')

const flowPrincipal = addKeyword(["hola", "hi", "Hola"])
  .addAnswer([
    "¡Bienvenido a 🏢 [Nombre de la Empresa] 🏢, tu destino exclusivo para muebles de alta calidad.",
  ])
  .addAnswer(
    [
        "¿En qué podemos asistirte hoy? 🤔",
        "",
        "1️⃣ Explora nuestro catálogo de productos 📚.",
        "",
        "2️⃣ Servicio al cliente 🤝📞.",
    ]
  )  
  .addAnswer('Por favor, elige una opción.',
  {capture: true},
  async(ctx, { fallBack }) => {

    if (ctx.body.includes('1') || ctx.body.includes('2')){
    }
    else {
      return fallBack();
    }
  },
  [flowMenu1, flowMenu2]
  )

module.exports = flowPrincipal;