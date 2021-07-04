import historySettings from './historySettings.js'
const del = document.querySelector('.chat__masage-content')

function deleteMessage () {
  del.addEventListener('dblclick', function (e) {
    const target = e.target.closest('.del__message')
    const conf = target && confirm('вы точно хотите удалить сообщение')
    if (conf) {
      target.remove()
      historySettings.history[historySettings.historyID] = historySettings.history[historySettings.historyID].filter(item => item.id !== target.id)

      fetch('http://localhost:8000/user', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          history: historySettings.history,
          id: historySettings.historyID
        })
      })
    }
  })
}
export {
  deleteMessage
}
