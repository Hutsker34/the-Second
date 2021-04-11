
const chat = document.querySelector('#masage-content')
const inputMy = document.querySelector("input");
const chatMy = document.querySelector('#masage-content')

const PHRASES = ['привет!', 'как дела?', 'чем занят?', 'хорошая погода сегодня!', 'какие планы на вечер?',]
const IMAGES = ['img/dialog2__avatar1.png', 'img/dialog1__avatar2.png', 'img/dialog2__avatar2.png', 'img/dialog3__avatar1.png', 'img/dialog3__avatar2.png', 'img/dialog4__avatar1.png']
const NAMES = ['victor Roberts', 'Terry Griffin', 'Angela Lopez', 'Piter Williams', 'Olivia Smith', 'jessica Harris']
const history = [
  {
    avatar: 'img/dialog2__avatar1.png',
    text: 'We are all excited to have you, we loved the work that you showed us during your interview and you fit well with everyone on our team and company. If you have any questions feel free to ask and someone on the team will help you out.',
    time: '11:08 AM',
    name: 'Victor'
  },
  {
    avatar: 'img/dialog2__avatar1.png',
    text: 'We are all excited to have you, we loved the work that you showed us during your interview and you fit well with everyone on our team and company. If you have any questions feel free to ask and someone on the team will help you out.',
    time: '11:08 AM',
    name: 'Victor'
  }

]





function make(tag, mus, object = {}) {
  const element = document.createElement(tag)
  element.classList.add(...mus)
  for (let key in object) {
    element[key] = object[key]
  }
  return element;

}


function makeMessage(text, isMe, time = getСurrentTime(),name=arrayRandElement(NAMES),avatar=arrayRandElement(IMAGES)) {
  const holder = isMe ? 'message__holder' : 'blue__message'
  const timeMasage = isMe ? 'grey__message-time' : 'blue__message-time'
  const words = isMe ? 'grey__message-text' : 'blue__message-text'
  const messageElement = make('div', [holder])
  const masageTimeElement = make('p', [timeMasage])
  masageTimeElement.textContent = time
  const blueMasageElement = make('div', [words])
  blueMasageElement.textContent = text
  if (!isMe) {
    const avatarsHolderElement = make('div', ['blue__message-content'])
    const masageAvatar1Element = make('img', ['blue__message-img'], { src: avatar })
    const masageNameElement = make('h5', ['blue__message-name'])
    masageNameElement.textContent = name
    avatarsHolderElement.append(masageAvatar1Element, masageNameElement, masageTimeElement)
    messageElement.append(avatarsHolderElement, blueMasageElement)
  } else { messageElement.append(masageTimeElement, blueMasageElement) }
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
  const rand = Math.floor(Math.random() * phrases.length);
  return phrases[rand];
}
function arrayRandElement(img) {
  const rand = Math.floor(Math.random() * img.length);
  return img[rand];
}
function arrayRandElement(name) {
  const rand = Math.floor(Math.random() * name.length);
  return name[rand];
}



function getСurrentTime() {
  const now = new Date();
  const hours = '' + now.getHours();
  const minute = '' + now.getMinutes();
  console.log(hours.padStart(2, '0'))
  if (hours > 12) {
    return `${(hours - 12 + '').padStart(2, '0')}:${minute.padStart(2, '0')} PM`
  } else {

    return `${(hours - 12 + '').padStart(2, '0')}:${minute.padStart(2, '0')} AM`
  }
}

function renderHistory(){
  for(let i = 0;i<history.length;i++){
    const {text,time,avatar,name}=history[i]
    chat.append(makeMessage(text,false,time,name,avatar))
  }

}

renderHistory()



