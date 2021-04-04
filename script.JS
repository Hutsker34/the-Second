
const chat = document.querySelector('#masage-content')
const inputMy = document.getElementById("input");
const chatMy = document.querySelector('#masage-content')

const PHRASES = ['привет!', 'как дела?', 'чем занят?', 'хорошая погода сегодня!', 'какие планы на вечер?',]
const IMAGES = ['img/dialog2__avatar1.png', 'img/dialog1__avatar2.png', 'img/dialog2__avatar2.png', 'img/dialog3__avatar1.png', 'img/dialog3__avatar2.png', 'img/dialog4__avatar1.png']
const NAMES = ['victor Roberts', 'Terry Griffin', 'Angela Lopez', 'Piter Williams', 'Olivia Smith', 'jessica Harris']






function make(tag, mus, object = {}) {
  const element = document.createElement(tag)
  element.classList.add(...mus)
  for (let key in object) {
    element[key] = object[key]
  }
  return element;

}


function makeMessage(text, isMe, time = getСurrentTime()) {
  const holder = isMe ? 'message__holder' : 'chat__masage-blue-masege1'
  const timeMasage = isMe ? 'chat__masage-time2' : 'chat__masage-time'
  const words = isMe ? 'chat__masage-grey' : 'chat__masage-blue_masage'
  const messageElement = make('div', [holder])
  const masageTime = make('p', [timeMasage])
  masageTime.textContent = time
  const blueMasage = make('div', [words])
  blueMasage.textContent = text
  if (!isMe) {
    const avatarsHolderElement = make('div', ['chat__masage-avatars'])
    const masageAvatar1 = make('img', ['chat__masage-avatar1'], { src: arrayRandElement(IMAGES) })
    const masageName = make('h5', ['chat__masage-name'])
    masageName.textContent = arrayRandElement(NAMES)
    avatarsHolderElement.append(masageAvatar1, masageName, masageTime)
    messageElement.append(avatarsHolderElement, blueMasage)
  } else { messageElement.append(masageTime, blueMasage) }
  return messageElement
}



input.addEventListener("keydown", function (event) {
  if (event.code !== 'Enter') {
    return
  }
  chat.append(makeMessage(input.value, getСurrentTime()))
  input.value = '';
  setTimeout(function () {
    chat.append(makeMessage(arrayRandElement(PHRASES), false))
  }, 2000)
  setTimeout(function () {
    chat.append(makeMessage(arrayRandElement(PHRASES), false))
  }, 5000)
});

function arrayRandElement(phrases) {
  var rand = Math.floor(Math.random() * phrases.length);
  return phrases[rand];
}
function arrayRandElement(img) {
  var rand = Math.floor(Math.random() * img.length);
  return img[rand];
}
function arrayRandElement(name) {
  var rand = Math.floor(Math.random() * name.length);
  return name[rand];
}



function getСurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minute = now.getMinutes();
  if (hours > 12) {
    return `${hours - 12}:${minute} PM`
  } else {
    return `${hours}:${minute} AM`
  }
}






