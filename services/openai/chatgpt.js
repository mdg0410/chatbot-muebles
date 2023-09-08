const { Configuration, OpenAIApi } = require("openai");
const conf = 'Texto plano, coloquial y dirigido a  clientes'

  async function completion(role = ``, context = ``, state=``) {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
      const prompt = `${role}\n${context}\n${state}\n${conf}`;
      console.log(`Promp: ${prompt}`)
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 256,
      });
      const getResponse = response.data.choices[0].text
      .trim()
        .replace("\n", "")
        .replace(".", "")
        .replace(" ", "");
      console.log(`Response: ${getResponse}`)
      return getResponse;
  }

module.exports = completion;