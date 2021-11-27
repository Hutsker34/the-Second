import {
  make
} from './helpers.js'

const chats = document.querySelector('.dialogues__chats')

function renderDialog (id, append = false) {
  const newDialog = make('div', ['dialogues__chats-diolog'], { id })
  const imgWrapper = make('div', ['dialog__avatars'])
  const img = make('img', [], { src: 'img/dialog__avatar1.png' })
  const img2 = make('img', ['dialog__avatar2'], { src: 'img/dialog1__avatar2.png' })
  imgWrapper.append(img, img2)
  newDialog.append(imgWrapper)
  const text = make('div', ['dialog__text'])
  const textHeader = make('h5', ['dialog__text-header'])
  const textMessage = make('p', ['dialog__text-massage'])
  textMessage.textContent = 'You should have access to all the documents now but. .'
  textHeader.textContent = 'New Team Member'
  text.append(textHeader, textMessage)
  newDialog.append(text)
  const other = make('div', [])
  const time = make('p', ['dialog__time'])
  const ball = make('div', ['dialog__ball'])
  time.textContent = '4:01 PM'
  other.append(time, ball)
  newDialog.append(other)
  if (append) {
    chats.append(newDialog)
  } else {
    chats.prepend(newDialog)
  }
}

function createDialog () {
  fetch('http://localhost:8000/api/dialog', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(function (loc) {
    return loc.json()
  }).then(function (loc) {
    if (loc.data) {
      renderDialog(loc.data._id)
    }
  })
}

function getDialogs () {
  fetch('http://localhost:8000/api/dialog', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(function (loc) {
    return loc.json()
  }).then(function (loc) {
    if (loc.data) {
      for (const key in loc.data) {
        renderDialog(key, true)
      }
    }
  })
}

export {
  getDialogs,
  createDialog
}
