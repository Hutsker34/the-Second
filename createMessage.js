import {
  getСurrentTime,
  uuidv4,
  make,
  arrayRandElement
} from './helpers.js'
import historySettings from './historySettings.js'

const PHRASES = ['привет!', 'как дела?', 'чем занят?', 'хорошая погода сегодня!', 'какие планы на вечер?']
const IMAGES = ['img/dialog2__avatar1.png', 'img/dialog1__avatar2.png', 'img/dialog2__avatar2.png', 'img/dialog3__avatar1.png', 'img/dialog3__avatar2.png', 'img/dialog4__avatar1.png']
const NAMES = ['victor Roberts', 'Terry Griffin', 'Angela Lopez', 'Piter Williams', 'Olivia Smith', 'jessica Harris']
const chat = document.querySelector('#masage-content')

function renderMessage ({ text, time, name, avatar, id }) {
  const isMe = name === ''
  const holder = isMe ? 'my__message' : 'friend__message'
  const timeMasage = isMe ? 'grey__message-time' : 'friend__message-time'
  const words = isMe ? 'grey__message-text' : 'friend__message-text'
  const messageElement = make('div', [holder, 'del__message'], { id })
  const masageTimeElement = make('p', [timeMasage])
  masageTimeElement.textContent = time
  const blueMasageElement = make('div', [words, 'redactClass'])
  blueMasageElement.textContent = text
  if (!isMe) {
    const avatarsHolderElement = make('div', ['friend__message-content'])
    const masageAvatar1Element = make('img', ['friend__message-img'], { src: avatar })
    const masageNameElement = make('h5', ['friend__message-name'])
    masageNameElement.textContent = name
    avatarsHolderElement.append(masageAvatar1Element, masageNameElement, masageTimeElement)
    messageElement.append(avatarsHolderElement, blueMasageElement)
  } else { messageElement.append(masageTimeElement, blueMasageElement) }

  return messageElement
}

function makeMessage ({ text, time = getСurrentTime(), name, avatar }, isMe = true, IDhistory = historySettings.historyID) {
  name = isMe ? '' : arrayRandElement(NAMES)
  avatar = isMe ? '' : arrayRandElement(IMAGES)
  const id = uuidv4()
  const historyPush = {
    avatar,
    text,
    time: getСurrentTime(),
    name,
    id
  }
  fetch('http://localhost:8000/create-mess', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: IDhistory,
      history: historyPush
    })
  })
  if (historySettings.historyID === IDhistory) {
    return renderMessage({ text, time, name, avatar, id })
  }
}

function sendFriendMessage (numberOfMessages) {
  for (let i = 0; i < numberOfMessages; i++) {
    setTimeout(function (idHistory) {
      const result = makeMessage({ text: arrayRandElement(PHRASES) }, false, idHistory)
      result && chat.append(result)
    }, 2000, historySettings.historyID)
  }
}

export {
  renderMessage,
  makeMessage,
  sendFriendMessage

}
