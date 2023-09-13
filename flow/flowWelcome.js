const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const {flowMenu1, flowMenu2} = require('./flowMenu.js')

const flowPrincipal = addKeyword(['Hola', 'hola', 'Buenos dias', 'Buenas tardes', 'Buenas noches', EVENTS.WELCOME])
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
    const regex = /^[1-2]$/;
    if (!regex.test(ctx.body)){
      return fallBack();
    }
  },
  [flowMenu1, flowMenu2]
  )

module.exports = flowPrincipal;