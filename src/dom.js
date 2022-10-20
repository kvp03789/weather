import { createDom } from './utils';

export function makeDom() {
    const mainBlock = createDom("div", "main-block");
    
    const leftBlock = createDom("div", "left-block");
    const rightBlock = createDom("div", "right-block");

    const tempMainTitle = createDom("h1", "title");
    const weatherMainTitle = createDom("h1", "title");
    const citySubTitle = createDom("h3", "sub-title");
    const weatherSubTitle = createDom("h3", "sub-title");

    tempMainTitle.innerText = "40";
    citySubTitle.innerText = "Jasper, AL";
    weatherMainTitle.innerText = "Clear";
    weatherSubTitle.innerText = "clear sky";


    leftBlock.append(tempMainTitle, citySubTitle);
    rightBlock.append(weatherMainTitle, weatherSubTitle);
    mainBlock.append(leftBlock, rightBlock);
    document.querySelector(".container").append(mainBlock);
}