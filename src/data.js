import { makeDom, clearDom } from "./dom";

export async function getLocationData(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=c96c7fb5e20d240b9c753b8516fdbd4d&units=imperial`, {mode: 'cors'})
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log('success!', response);
            clearDom();
            makeDom("F", response);
        })
        .catch((err) => {
            console.log('error', err)
        });

}