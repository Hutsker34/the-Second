import {
  dialogesChoice
} from './highlight.js'
import {
  createDialog,
  getDialogs
} from './createDialog.js'
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
const plus = document.querySelector('.chat__header-plus')

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
getDialogs()
del.addEventListener('dblclick', deleteMessage)
activeDialog.addEventListener('click', dialogesChoice)
plus.addEventListener('click', createDialog)
