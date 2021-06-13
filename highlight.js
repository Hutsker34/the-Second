import {
  renderHistory
} from './history.js'
import historySettings from './historySettings.js'
let dialogues = document.querySelector('.dialogues__chats-diolog')
const activeDialog = document.querySelector('.dialogues__chats')

function highlight (element) {
  if (dialogues) { // убрать существующую подсветку, если есть
    dialogues.classList.remove('dialogues__chats-diolog--active')
  }
  dialogues = element
  dialogues.classList.add('dialogues__chats-diolog--active') // подсветить новый td
}
function dialogesChoice () {
  activeDialog.addEventListener('click', function (event) {
    const target = event.target.closest('.dialogues__chats-diolog')
    if (target) {
      highlight(target)
      historySettings.historyID = dialogues.getAttribute('id')
      renderHistory()
    }
  }
  )
}
export {
  dialogesChoice
}
