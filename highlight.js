import {
  renderHistory
} from './history.js'
import historySettings from './historySettings.js'
let dialogues = document.querySelector('.dialogues__chats-diolog')

function highlight (element) {
  if (dialogues) { // убрать существующую подсветку, если есть
    dialogues.classList.remove('dialogues__chats-diolog--active')
  }
  dialogues = element
  dialogues.classList.add('dialogues__chats-diolog--active') // подсветить новый td
}

function dialogesChoice (event) {
  const target = event.target.closest('.dialogues__chats-diolog')
  if (target) {
    highlight(target)
    historySettings.historyID = dialogues.getAttribute('id')
    fetch('http://localhost:8000/get-dialogue', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: historySettings.historyID
      })
    })
      .then(res => res.json())
      .then(messeges => {
        historySettings.history[historySettings.historyID] = messeges
        renderHistory()
      })
  }
}

export {
  dialogesChoice
}
