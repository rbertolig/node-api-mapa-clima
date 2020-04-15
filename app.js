// requires
const { argv } = require('./config/yargs.js');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// funcion para conseguir coordenadas desde api de mapa y clima de api openweather
const getInfo = async(direccion) => {
    // hacer los llamados con try y usando await para esperar las respuestas de peticiones http
    try {
        const infolugar = await lugar.getLugarLatLng(direccion);
        const miclima = await clima.getClima(infolugar.lat, infolugar.lng);
        return `El clima de ${infolugar.direccion} es ${miclima} grados.`;
    } catch (e) {
        return `No se encontro informacion para ${direccion}`;
    }
}

// llamar a la funcion que visualiza el clima para ciudad digitada usando llamas a las APIS
getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));