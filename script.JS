import {
  makeMessage,
  helper
} from './createMessage.js'


import {
  renderHistory
} from './history.js'
import historySettings from './historySettings.js';
const chat = document.querySelector('#masage-content')
let isEditeng = false
let thisMessage = null
input.addEventListener("keydown", function (event) {

  if (event.code !== 'Enter') {

    return
  }
  if (this.value === '') {
    this.classList.add('input__red');
    this.placeholder = 'введите хотя бы 1 символ!'


  } else {
    if (!isEditeng) {
      chat.append(makeMessage({ text: this.value }))
      this.value = '';
      this.placeholder = 'type a message ...';
      this.classList.remove('input__red');

      helper(2)

    } else {
      const redactId = thisMessage.closest('.del__message').id
      thisMessage.innerText = this.value
      isEditeng = false
      thisMessage = null


      historySettings.history[historySettings.historyID] = historySettings.history[historySettings.historyID].map((item) => {
        if (item.id == redactId) {
          return { ...item, text: this.value }
        } else {
          return item
        }
      })
      localStorage.setItem('history', JSON.stringify(historySettings.history));
      this.value = ''
    }
  }
})


const activeDialog = document.querySelector('.dialogues__chats')
let dialogues = document.querySelector('.dialogues__chats-diolog');



function highlight(element) {
  if (dialogues) { // убрать существующую подсветку, если есть
    dialogues.classList.remove('dialogues__chats-diolog--active');
  }
  dialogues = element;
  dialogues.classList.add('dialogues__chats-diolog--active'); // подсветить новый td

}

const del = document.querySelector('.chat__masage-content');


del.addEventListener('dblclick', function (e) {
  const target = e.target.closest('.del__message')
  const conf = target && confirm('вы точно хотите удалить сообщение')
  if (conf) {
    target.remove()
    historySettings.history[historySettings.historyID] = historySettings.history[historySettings.historyID].filter(item => item.id != target.id)
    localStorage.setItem('history', JSON.stringify(historySettings.history));
  }
});



del.addEventListener('contextmenu', function (e) {
  const target = e.target.closest('.del__message')
  const conf = target && confirm('вы хотите изменить сообщение')
  if (conf) {
    isEditeng = true
    const redactText = target.querySelector('.redactClass')
    thisMessage = redactText
    input.value = redactText.innerText

  }
});

activeDialog.addEventListener('click', function (event) {
  const target = event.target.closest('.dialogues__chats-diolog');
  if (target) {
    highlight(target);
    historySettings.historyID = dialogues.getAttribute('id')
    renderHistory()
  }
}
)

renderHistory()

