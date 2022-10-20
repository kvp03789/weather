export function createDom(ele, ...className) {
    const newElement = document.createElement(ele);
    newElement.classList.add(className);
    return newElement;
}