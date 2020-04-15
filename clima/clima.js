// importar axios que es un cliente http que maneja las peticiones con Promise
const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9a60de3ff30b6f14b740a1a56f9acf77&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}