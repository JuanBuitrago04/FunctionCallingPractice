# 🌍 DeepSeek Function Calling - API con Node.js

## 📌 Descripción
Este proyecto demuestra cómo usar **Function Calling** en la API de **DeepSeek** con Node.js y Axios. Permite a la IA detectar cuándo llamar funciones externas para obtener información en tiempo real. 

### 🚀 Características
✅ **Uso de Function Calling** para ejecutar funciones automáticamente.  
✅ **Ejemplo práctico** con una API de clima simulada.  
✅ **Uso de `.env`** para mantener segura la API Key.  
✅ **Código optimizado** para futuras integraciones con otras APIs.  

---

## 🛠️ Instalación
### 1️⃣ Clona este repositorio
```sh
mkdir deepseek-function-calling
cd deepseek-function-calling
git clone TU_REPOSITORIO .
```

### 2️⃣ Instala las dependencias
```sh
npm install
```

### 3️⃣ Configura tu API Key en `.env`
Crea un archivo `.env` en la raíz del proyecto y agrega:
```sh
DEEPSEEK_API_KEY=TU_API_KEY_AQUI
```

---

## 🔥 Uso del Proyecto
Ejecuta el script para probar el **Function Calling**:
```sh
node index.js
```

La IA analizará el mensaje y, si es necesario, llamará a la función adecuada, como `getWeather()`.  
Si preguntas "¿Cuál es el clima en Bogotá?", el sistema te responderá con una simulación del clima.  

---

## 📚 Explicación del Código
El código se divide en tres partes principales:

1️⃣ **Conexión con DeepSeek API** usando Axios.  
2️⃣ **Definición de funciones disponibles** (por ejemplo, `getWeather()`).  
3️⃣ **Procesamiento de la respuesta** para decidir si llamar una función o responder directamente.  

```js
const response = await axios.post(endpoint, {
  model: "deepseek-chat",
  messages: [{ role: "user", content: "¿Cuál es el clima en Bogotá?" }],
  functions: [{
    name: "getWeather",
    description: "Obtiene el clima de una ciudad específica",
    parameters: {
      type: "object",
      properties: {
        city: { type: "string", description: "Nombre de la ciudad" },
      },
      required: ["city"],
    },
  }],
  function_call: "auto",
}, { headers: { Authorization: `Bearer ${apiKey}` } });
```

---

## 🌟 Mejoras y Expansión
🔹 Conectar `getWeather()` a una API real de clima.  
🔹 Agregar más funciones, como `convertCurrency()` o `searchWikipedia()`.  
🔹 Crear una interfaz visual con HTML + JavaScript.  

---

## 📜 Licencia
Este proyecto es de código abierto y puedes usarlo libremente.

### 📩 Contacto
Si tienes dudas o mejoras, ¡haz un **Pull Request** o abre un **Issue**! 🚀
