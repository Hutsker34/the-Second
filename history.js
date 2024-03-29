import historySettings from './historySettings.js'
import {
  renderMessage
} from './createMessage.js'
const chat = document.querySelector('#masage-content')
export function addToHistory (id, message) {
  const history = historySettings.history
  if (id in history) {
    history[id].push(message)
  } else {
    history[id] = [message]
  }
}

export function renderHistory () {
  chat.innerHTML = ''
  const messages = historySettings.history[historySettings.historyID] || []
  for (let i = 0; i < messages.length; i++) {
    const { text, time, avatar, name, _id } = messages[i]

    chat.append(renderMessage({ text, time, name, avatar, id: _id }))
  }
}
