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

fetch('http://localhost:8000/api/dialog', {

  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}).then(function (loc) {
  return loc.json()
}).then(function (loc) {
  historySettings.history = loc.data
  renderHistory()
})

del.addEventListener('dblclick', deleteMessage)
activeDialog.addEventListener('click', dialogesChoice)
