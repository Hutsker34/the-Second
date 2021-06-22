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

fetch('http://localhost:8000/user', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'alex' })
})

renderHistory()
dialogesChoice()
deleteMessage()
