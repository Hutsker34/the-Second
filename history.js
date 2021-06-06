import historySettings from './historySettings.js'
import {
  renderMessage
} from './createMessage.js'
const chat = document.querySelector('#masage-content')
export function addToHistory(id, message) {
  const history = historySettings.history
  if (id in history) {
    history[id].push(message)
  } else {
    history[id] = [message]
  }

  // Обновление данных
  localStorage.setItem('history', JSON.stringify(history));
}

export function renderHistory() {
  chat.innerHTML = ''
  let messages = historySettings.history[historySettings.historyID] || []
  for (let i = 0; i < messages.length; i++) {
    const { text, time, avatar, name, id } = messages[i]
    chat.append(renderMessage({ text, time, name, avatar, id }))
  }

}
