import {
  makeMessage,
  helper
} from './createMessage.js'
import historySettings from './historySettings.js'

let thisMessage = null
let isEditeng = false
const chat = document.querySelector('#masage-content')
const input = document.querySelector('#input')

function oneSimbol () {
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
}

export {
  oneSimbol
}
