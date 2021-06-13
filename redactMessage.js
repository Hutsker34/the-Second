const del = document.querySelector('.chat__masage-content')
const input = document.querySelector('#input')

function redactMessage () {
  del.addEventListener('contextmenu', function (e) {
    const target = e.target.closest('.del__message')
    const conf = target && confirm('вы хотите изменить сообщение')
    if (conf) {
      isEditeng = true
      const redactText = target.querySelector('.redactClass')
      thisMessage = redactText
      input.value = redactText.innerText
    }
  })
}
export {
  redactMessage
}
