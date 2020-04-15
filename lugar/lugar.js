// importar axios que es un cliente http que maneja las peticiones con Promise
const axios = require('axios');

//funcion para obtener el lugar en base a direccion en argv
getLugarLatLng = async(ciudad) => {
    // usar funcion de java encodeURI para eliminar espacios convirtiendo a URLseura
    const encodedUrl = encodeURI(ciudad);
    // crear instancia de axios con parametros de la peticion http que haremos
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "42417f3942msh409ee8d8c7fc0d8p1a3466jsn901c62eecb4e"
        }
    });

    // implementar peticion http llamando a la instancia con get()
    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ciudad}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}