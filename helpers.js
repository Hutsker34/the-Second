function make(tag, mus, object = {}) {
    const element = document.createElement(tag)
    element.classList.add(...mus)
    for (let key in object) {
        element[key] = object[key]
    }
    return element;

}

function arrayRandElement(phrases) {
    const rand = Math.floor(Math.random() * phrases.length);
    return phrases[rand];
}
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function getСurrentTime() {
    const now = new Date();
    const hours = '' + now.getHours();
    const minute = '' + now.getMinutes();
    
    if (hours > 12) {
        return `${(hours - 12 + '').padStart(2, '0')}:${minute.padStart(2, '0')} PM`
    } else {

        return `${(hours - 12 + '').padStart(2, '0')}:${minute.padStart(2, '0')} AM`
    }
}
export  {
    make,
    arrayRandElement,
    getСurrentTime,
    uuidv4
}
