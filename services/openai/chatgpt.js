require('dotenv').config({ path: './.env'});

const { Configuration, OpenAIApi } = require("openai");


console.log(process.env.OPENAI_API_KEY);
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  async function completion(prompt = ``) {
    try {
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 256,
      });
      const getResponse = response.data.choices[0].text;
      return getResponse;
      
    } catch (error) {
      console.error('Error al generar texto:', error);
    }
  }

module.exports = { completion };