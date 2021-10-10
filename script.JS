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

fetch('http://localhost:8000/api/message/61621be73763cd0d3bb886d9', {

  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}).then(function (loc) {
  return loc.json()
})

fetch('http://localhost:8000/api/dialog/61621a3d5a25531479ff11b0', {

  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

fetch('http://localhost:8000/api/dialog', {

  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}).then(function (loc) {
  return loc.json()
}).then(function (loc) {
  console.log('log', loc)
  historySettings.history = loc.data
  renderHistory()
})

del.addEventListener('dblclick', deleteMessage)
activeDialog.addEventListener('click', dialogesChoice)
