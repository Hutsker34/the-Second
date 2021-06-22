import historySettings from './historySettings.js'
import {
  makeMessage,
  helper
} from './createMessage.js'
const del = document.querySelector('.chat__masage-content')
const input = document.querySelector('#input')
const chat = document.querySelector('#masage-content')
let isEditeng = false
let thisMessage = null

del.addEventListener('contextmenu', function (e) {
  const target = e.target.closest('.del__message')
  const conf = target && confirm('вы хотите изменить сообщение')
  if (conf) {
    isEditeng = true
    const redactText = target.querySelector('.redactClass')
    thisMessage = redactText
    input.value = redactText.innerText
    historySettings.history[historySettings.historyID] = historySettings.history[historySettings.historyID].filter(item => item.id !== target.id)
    localStorage.setItem('history', JSON.stringify(historySettings.history))
  }
})

input.addEventListener('keydown', function (event) {
  if (event.code !== 'Enter') {
    return
  }
  if (this.value === '') {
    this.classList.add('input__red')
    this.placeholder = 'введите хотя бы 1 символ!'
  } else {
    if (!isEditeng) {
      chat.append(makeMessage({ text: this.value }))
      this.value = ''
      this.placeholder = 'type a message ...'
      this.classList.remove('input__red')
      helper(2)
    } else {
      const redactId = thisMessage.closest('.del__message').id
      thisMessage.innerText = this.value
      isEditeng = false
      thisMessage = null
      historySettings.history[historySettings.historyID] = historySettings.history[historySettings.historyID].map((item) => {
        if (item.id === redactId) {
          return { ...item, text: this.value }
        } else {
          return item
        }
      })
      localStorage.setItem('history', JSON.stringify(historySettings.history))
      this.value = ''
    }
  }
})
