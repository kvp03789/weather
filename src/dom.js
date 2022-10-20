import { createDom, createDomMultiple } from './utils';

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
    const unitsButton = createDom("div", "round-button")

    tempMainTitle.innerText = "40°";
    citySubTitle.innerText = "Jasper, AL";
    weatherMainTitle.innerText = "Clear";
    weatherSubTitle.innerText = "clear sky";
    unitsButton.innerText = "C°";

    leftBlock.append(tempMainTitle, citySubTitle);
    rightBlock.append(weatherMainTitle, weatherSubTitle);
    topBlock.append(leftBlock, rightBlock);
    mainBlock.append(topBlock, bottomBlock, unitsButton);
    document.querySelector(".container").append(mainBlock);
}