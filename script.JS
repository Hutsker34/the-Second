import {
  dialogesChoice
} from './highlight.js'
import {
  renderHistory
} from './history.js'
import {
  deleteMessage
} from './deleteMessage.js'
import './redactMessage.js'
import historySettings from './historySettings.js'
const del = document.querySelector('.chat__masage-content')
const activeDialog = document.querySelector('.dialogues__chats')

fetch('http://localhost:8000/history', {

  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({})
}).then(function (loc) {
  return loc.json()
}).then(function (loc) {
  historySettings.history = loc
  renderHistory()
})

del.addEventListener('dblclick', deleteMessage)
activeDialog.addEventListener('click', dialogesChoice)
