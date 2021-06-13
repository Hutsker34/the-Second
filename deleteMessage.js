import historySettings from './historySettings.js'
const del = document.querySelector('.chat__masage-content')

function deleteMessage () {
  del.addEventListener('dblclick', function (e) {
    const target = e.target.closest('.del__message')
    const conf = target && confirm('вы точно хотите удалить сообщение')
    if (conf) {
      target.remove()
      historySettings.history[historySettings.historyID] = historySettings.history[historySettings.historyID].filter(item => item.id !== target.id)
      localStorage.setItem('history', JSON.stringify(historySettings.history))
    }
  })
}
export {
  deleteMessage
}
