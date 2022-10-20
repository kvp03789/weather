export function createDom(ele, ...className) {
    const newElement = document.createElement(ele);
    newElement.classList.add(className);
    return newElement;
}

export function createDomMultiple(ele, num, element, ...className) {
    for (let i = 0; i < num; i++) {
        const newElement = document.createElement(ele);
        newElement.classList.add(className);
        element.append(newElement);
        const infoWeatherTop = createDom("h3", "info-top");
        const infoWeatherBottom = createDom("h3", "info-bottom");
        newElement.append(infoWeatherTop, infoWeatherBottom);
        infoWeatherTop.innerText = "Humidity";
        infoWeatherBottom.innerText = "36%";
    }
    
}