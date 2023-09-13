const { addKeyword } = require("@bot-whatsapp/bot");

const flowContacto = addKeyword(['1', 'contacto'])
.addAnswer('En breve seras redirigido con un asesor')

const flowCotizacion = addKeyword(['2', 'cotizacion'])
.addAnswer('En breve seras redirigido con un asesor')

const flowSugerencias = addKeyword(['3', 'sugerencias'])
.addAnswer('En breve seras redirigido con un asesor')

module.exports = {flowContacto, flowCotizacion, flowSugerencias};