
const chat = document.querySelector('#masage-content')
const inputMy = document.querySelector("input");
const chatMy = document.querySelector('#masage-content')

const PHRASES = ['привет!', 'как дела?', 'чем занят?', 'хорошая погода сегодня!', 'какие планы на вечер?',]
const IMAGES = ['img/dialog2__avatar1.png', 'img/dialog1__avatar2.png', 'img/dialog2__avatar2.png', 'img/dialog3__avatar1.png', 'img/dialog3__avatar2.png', 'img/dialog4__avatar1.png']
const NAMES = ['victor Roberts', 'Terry Griffin', 'Angela Lopez', 'Piter Williams', 'Olivia Smith', 'jessica Harris']
let historyID = 0
let isEditeng = false
let thisMessage = null
let history = JSON.parse(localStorage.getItem('history')) || {};

function addToHistory(id, message) {
  if (id in history) {
    console.log(history[id])
    history[id].push(message)
  } else {
    history[id] = [message]
  }

  // Обновление данных
  localStorage.setItem('history', JSON.stringify(history));
}




function make(tag, mus, object = {}) {
  const element = document.createElement(tag)
  element.classList.add(...mus)
  for (let key in object) {
    element[key] = object[key]
  }
  return element;

}

function renderMessage({ text, time, name, avatar, id }) {
  const isMe = name == ''
  const holder = isMe ? 'my__message' : 'friend__message'
  const timeMasage = isMe ? 'grey__message-time' : 'friend__message-time'
  const words = isMe ? 'grey__message-text' : 'friend__message-text'
  const messageElement = make('div', [holder, "del__message"], { id })
  const masageTimeElement = make('p', [timeMasage])
  masageTimeElement.textContent = time
  const blueMasageElement = make('div', [words, 'redactClass'])
  blueMasageElement.textContent = text
  if (!isMe) {
    const avatarsHolderElement = make('div', ['friend__message-content'])
    const masageAvatar1Element = make('img', ['friend__message-img'], { src: avatar })
    const masageNameElement = make('h5', ['friend__message-name'])
    masageNameElement.textContent = name
    avatarsHolderElement.append(masageAvatar1Element, masageNameElement, masageTimeElement)
    messageElement.append(avatarsHolderElement, blueMasageElement)
  } else { messageElement.append(masageTimeElement, blueMasageElement) }

  return messageElement
}



function makeMessage({ text, time = getСurrentTime(), name, avatar }, isMe = true) {
  name = isMe ? '' : arrayRandElement(NAMES)
  avatar = isMe ? '' : arrayRandElement(IMAGES)
  const id = uuidv4()
  const historyPush = {
    avatar,
    text,
    time: getСurrentTime(),
    name,
    id
  }
  addToHistory(historyID, historyPush)



  return renderMessage({ text, time, name, avatar, id })


}



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
      setTimeout(function () {
        chat.append(makeMessage({ text: arrayRandElement(PHRASES) }, false))
      }, 2000)
      setTimeout(function () {
        chat.append(makeMessage({ text: arrayRandElement(PHRASES) }, false))
      }, 5000)

    }else{
      const  redactId =  thisMessage.closest('.del__message').id
      thisMessage.innerText=this.value
      isEditeng = false
      thisMessage = null
      
      
      history[historyID] = history[historyID].map((item) => {if(item.id == redactId){
        return{...item, text: this.value}
      }else{
        return item
      }
    })
      localStorage.setItem('history', JSON.stringify(history));
      this.value = ''
    }
  }
})

function arrayRandElement(phrases) {
  const rand = Math.floor(Math.random() * phrases.length);
  return phrases[rand];
}
function arrayRandElement(img) {
  const rand = Math.floor(Math.random() * img.length);
  return img[rand];
}
function arrayRandElement(name) {
  const rand = Math.floor(Math.random() * name.length);
  return name[rand];
}



function getСurrentTime() {
  const now = new Date();
  const hours = '' + now.getHours();
  const minute = '' + now.getMinutes();
  console.log(hours.padStart(2, '0'))
  if (hours > 12) {
    return `${(hours - 12 + '').padStart(2, '0')}:${minute.padStart(2, '0')} PM`
  } else {

    return `${(hours - 12 + '').padStart(2, '0')}:${minute.padStart(2, '0')} AM`
  }
}

function renderHistory() {
  chat.innerHTML = ''
  let messages = history[historyID] || []
  for (let i = 0; i < messages.length; i++) {
    const { text, time, avatar, name, id } = messages[i]
    chat.append(renderMessage({ text, time, name, avatar, id }))

  }

}


renderHistory()

const activeDialog = document.querySelector('.dialogues__chats')
let dialogues = document.querySelector('.dialogues__chats-diolog');


activeDialog.addEventListener('click', function (event) {
  const target = event.target.closest('.dialogues__chats-diolog');
  if (target) {
    highlight(target);
    historyID = dialogues.getAttribute('id')
    renderHistory()
  }
}
)
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
    console.log(historyID)
    history[historyID] = history[historyID].filter(item => item.id != target.id)
    console.log(history)
    localStorage.setItem('history', JSON.stringify(history));
  }
});
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

console.log(uuidv4());



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