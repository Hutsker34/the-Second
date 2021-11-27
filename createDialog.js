import {
  make
} from './helpers.js'

const chats = document.querySelector('.dialogues__chats')

function all () {
  function renderDialog (id) {
    const newDialog = make('div', ['dialogues__chats-diolog'], { id })
    newDialog.textContent = 1234
    chats.prepend(newDialog)
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
  createDialog()
}
export {
  all
}
