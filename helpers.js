function make (tag, mus, object = {}) {
  const element = document.createElement(tag)
  element.classList.add(...mus)
  for (const key in object) {
    element[key] = object[key]
  }
  return element
}

function arrayRandElement (phrases) {
  const rand = Math.floor(Math.random() * phrases.length)
  return phrases[rand]
}

function getСurrentTime () {
  const now = new Date()
  const hours = '' + now.getHours()
  const minute = '' + now.getMinutes()

  if (hours > 12) {
    return `${(hours - 12 + '').padStart(2, '0')}:${minute.padStart(2, '0')} PM`
  } else {
    return `${(hours - 12 + '').padStart(2, '0')}:${minute.padStart(2, '0')} AM`
  }
}
export {
  make,
  arrayRandElement,
  getСurrentTime
}
