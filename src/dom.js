import { createDom, createDomMultiple } from './utils';
import {getLocationData} from './data';
import Sunrise from './images/icons8-sun-50.png'
import RainIcon from './images/icons8-rain-50.png'
import SearchIcon from './images/search.png'


export function clearDom() {
    while (document.querySelector(".container").firstChild) {
        document.querySelector(".container").firstChild.remove();
    }
}

export function makeDom(units, response) {
    const mainBlock = createDom("div", "main-block");
    
    const leftBlock = createDom("div", "left-block");
    const rightBlock = createDom("div", "right-block");
    const topBlock = createDom("div", "top-block");
    const bottomBlock = createDom("div", "bottom-block");

    const tempMainTitle = createDom("h1", "title");
    const weatherMainTitle = createDom("h1", "title");
    const citySubTitle = createDom("h3", "sub-title");
    const weatherSubTitle = createDom("h3", "sub-title");
    const infoDivs = createDomMultiple(response, bottomBlock);
    const unitsButton = createDom("div", "round-button");
    const weatherIcon = new Image();
    weatherIcon.classList.add("weather-icon");

    weatherIcon.src = Sunrise;
    tempMainTitle.innerText = response.main.temp;
    citySubTitle.innerText = response.name;
    weatherMainTitle.innerText = response.weather[0].main;
    weatherSubTitle.innerText = response.weather[0].description;
    if (units === "imperial") {
        unitsButton.innerText = "F°";
    } else {unitsButton.innerText = "C°"}

    makeHeader();

    leftBlock.append(tempMainTitle, citySubTitle);
    rightBlock.append(weatherMainTitle, weatherSubTitle);
    topBlock.append(leftBlock, rightBlock);
    mainBlock.append(topBlock, bottomBlock, unitsButton, weatherIcon);
    document.querySelector(".container").append(mainBlock);

    unitsButtonEvent(response);
    // makeTable();
    // makeAllDayItems();
}

export function makeDayItem() {
    const table = document.querySelector(".table");
    const dayItem = createDom("div", "day-item");
    const dayDiv = createDom("div", "day-div");
    const iconDiv = createDom("div", "day-div");
    const humidityDiv = createDom("div", "day-div");
    const temperatureDiv = createDom("div", "day-div");
    const dayPara = createDom("div", "day-para");
    const iconPara = createDom("div", "day-para");
    const rainPara = createDom("div", "day-para");
    const humidityPara = createDom("div", "day-para");
    const temperaturePara = createDom("div", "day-para");
    const rainIcon = new Image();
    rainIcon.classList.add("table-weather-icon")
    rainIcon.src = RainIcon;

    dayPara.innerText = "Monday";
    iconPara.append(rainIcon);
    humidityPara.innerText = "75%";
    temperaturePara.innerText = "72° 35°";

    dayDiv.append(dayPara);
    iconDiv.append(iconPara);
    humidityDiv.append(humidityPara);
    temperatureDiv.append(temperaturePara);

    dayItem.append(dayDiv, iconDiv, humidityDiv, temperatureDiv);
    table.append(dayItem);
}

export function makeAllDayItems() {
    makeDayItem();
    makeDayItem();
    makeDayItem();
    makeDayItem();
    makeDayItem();
    makeDayItem();
    makeDayItem();
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
    rainText.innerText = "Outlook";
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

function makeHeader() {
    const header = createDom("div", "header");
    const searchContainer = createDom("div", "search-container");
    const containerDiv = createDom("div", "generic-container");
    const containerDiv2 = createDom("div", "generic-container");
    const input = createDom("input", "search");
    input.setAttribute("type", "search")
    const searchButton = createDom("button", "search-button");
    const searchIcon = new Image();
    searchIcon.src = SearchIcon;
    searchButton.append(searchIcon);

    containerDiv.append(input);
    containerDiv2.append(searchButton);
    searchContainer.append(containerDiv, containerDiv2);
    header.append(searchContainer);
    document.querySelector(".container").append(header);

    headerSearchEvent();
}

//ADD EVENT FUNCTIONS START HERE!

function unitsButtonEvent(response) {
    document.querySelector(".round-button").addEventListener("click", (e) => {
        if(e.target.innerText === "C°") {
            getLocationData(`${response.name}`, "imperial");
            e.target.innerText = "F°"
        } else {
            getLocationData(`${response.name}`, "metric");
            e.target.innerText = "C°"
        };
    })
}

function headerSearchEvent() {
    document.querySelector(".search-button").addEventListener("click", () => {
        getLocationData(document.querySelector(".search").value, "imperial");
        console.log(document.querySelector(".search").value);
    });
}