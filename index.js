import axios from "axios";
import dotenv from "dotenv";

// Cargar variables de entorno desde .env
dotenv.config();

const apiKey = process.env.DEEPSEEK_API_KEY;
const endpoint = "https://api.deepseek.com/v1/chat/completions";

async function chatWithFunction() {
  const response = await axios.post(
    endpoint,
    {
      model: "deepseek-chat",
      messages: [{ role: "user", content: "¿Cuál es el clima en Bogotá?" }],
      functions: [
        {
          name: "getWeather",
          description: "Obtiene el clima de una ciudad específica",
          parameters: {
            type: "object",
            properties: {
              city: {
                type: "string",
                description: "Nombre de la ciudad",
              },
            },
            required: ["city"],
          },
        },
      ],
      function_call: "auto",
    },
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    }
  );

  const result = response.data;

  if (result.choices[0].message.function_call) {
    const functionName = result.choices[0].message.function_call.name;
    const args = JSON.parse(result.choices[0].message.function_call.arguments);

    if (functionName === "getWeather") {
      const weatherData = await getWeather(args.city);
      console.log(`El clima en ${args.city}:`, weatherData);
    }
  } else {
    console.log(result.choices[0].message.content);
  }
}

// Simulación de la función getWeather
async function getWeather(city) {
  return `🌦️ 20°C con lluvias ligeras en ${city}`;
}

chatWithFunction();
