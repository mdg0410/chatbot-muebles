const { createBot, createProvider, createFlow, addKeyword, EVENTS, addChild } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const JsonFileAdapter = require('@bot-whatsapp/database/json')

const welcomeFlow = require('./flow/flowWelcome.js')

const main = async () => {
 
    const adapterDB = new JsonFileAdapter()
    const adapterFlow = createFlow([welcomeFlow])
    const adapterProvider = createProvider(BaileysProvider)


    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
