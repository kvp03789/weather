export function createDom(ele, ...className) {
    const newElement = document.createElement(ele);
    newElement.classList.add(className);
    return newElement;
}

export function createDomMultiple(response, ele) {
    // for (let i = 0; i < num; i++) {
    //     const newElement = document.createElement(ele);
    //     newElement.classList.add(className);
    //     element.append(newElement);
    //     const infoWeatherTop = createDom("h3", "info-top");
    //     const infoWeatherBottom = createDom("h3", "info-bottom");
    //     newElement.append(infoWeatherTop, infoWeatherBottom);
    //     infoWeatherTop.innerText = "Humidity";
    //     infoWeatherBottom.innerText = "36%";
    // }
    const genericContainer = createDom("div", "generic-container");
    const infoHumidityTop = createDom("h3", "info-top");
    const infoHumidityBottom = createDom("h3", "info-bottom");
    infoHumidityTop.innerText = "Humidity";
    infoHumidityBottom.innerText = response.main.humidity + "%";
    genericContainer.append(infoHumidityTop, infoHumidityBottom);
    ele.append(genericContainer)

    const genericContainer2 = createDom("div", "generic-container");
    const feelsLikeTop = createDom("h3", "info-top");
    const feelsLikeBottom = createDom("h3", "info-bottom");
    feelsLikeTop.innerText = "Feels Like";
    feelsLikeBottom.innerText = response.main.feels_like + "°";
    genericContainer2.append(feelsLikeTop, feelsLikeBottom);
    ele.append(genericContainer2);

    const genericContainer3 = createDom("div", "generic-container");
    const windTop = createDom("h3", "info-top");
    const windBottom = createDom("h3", "info-bottom");
    windTop.innerText = "Wind Speed";
    windBottom.innerText = response.wind.speed;
    genericContainer3.append(windTop, windBottom);
    ele.append(genericContainer3);

}