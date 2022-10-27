import { makeDom, clearDom } from "./dom";

export async function getLocationData(city, units) {
    const apiKey = "c96c7fb5e20d240b9c753b8516fdbd4d";
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=${units}`, {mode: 'cors'})
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log('success!', response);
            clearDom();
            makeDom(units, response);
        })
        .catch((err) => {
            console.log('error', err)
        });
}