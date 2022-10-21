import { createDom, createDomMultiple } from './utils';
import Sunrise from './images/icons8-sun-50.png'

export function makeDom() {
    const mainBlock = createDom("div", "main-block");
    
    const leftBlock = createDom("div", "left-block");
    const rightBlock = createDom("div", "right-block");
    const topBlock = createDom("div", "top-block");
    const bottomBlock = createDom("div", "bottom-block");

    const tempMainTitle = createDom("h1", "title");
    const weatherMainTitle = createDom("h1", "title");
    const citySubTitle = createDom("h3", "sub-title");
    const weatherSubTitle = createDom("h3", "sub-title");
    const infoDivs = createDomMultiple("div", 6, bottomBlock, "info");
    const unitsButton = createDom("div", "round-button");
    const weatherIcon = new Image();
    weatherIcon.classList.add("weather-icon");

    weatherIcon.src = Sunrise;
    tempMainTitle.innerText = "40°";
    citySubTitle.innerText = "Jasper, AL";
    weatherMainTitle.innerText = "Clear";
    weatherSubTitle.innerText = "clear sky";
    unitsButton.innerText = "C°";

    leftBlock.append(tempMainTitle, citySubTitle);
    rightBlock.append(weatherMainTitle, weatherSubTitle);
    topBlock.append(leftBlock, rightBlock);
    mainBlock.append(topBlock, bottomBlock, unitsButton, weatherIcon);
    document.querySelector(".container").append(mainBlock);
}

export function makeDay() {

}

export function makeTable() {
    const table = createDom("div", "table");
    const tableHeader = createDom("div", "table-header");
    const dayHeader = createDom("div", "header-item");
    const chanceOfRainHeader = createDom("div", "header-item");
    const humidityHeader = createDom("div", "header-item");
    const temperature = createDom("div", "header-item");
    
    const dayText = createDom("p", "table-header-text");
    const rainText = createDom("p", "table-header-text");
    const humidityText = createDom("p", "table-header-text");
    const temperatureText = createDom("p", "table-header-text");

    dayText.innerText = "Day";
    rainText.innerText = "Chance of Rain";
    humidityText.innerText = "Humidity";
    temperatureText.innerText = "Temperature";

    dayHeader.append(dayText);
    chanceOfRainHeader.append(rainText);
    humidityHeader.append(humidityText);
    temperature.append(temperatureText);

    tableHeader.append(dayHeader, chanceOfRainHeader, humidityHeader, temperature);
    table.append(tableHeader);
    document.querySelector(".container").append(table);
}