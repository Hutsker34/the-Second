import historySettings from './historySettings.js'
import {
  renderHistory
} from './history.js'

function deleteMessage (e) {
  const target = e.target.closest('.del__message')
  const conf = target && confirm('вы точно хотите удалить сообщение')
  if (!conf) {
    return
  }

  fetch(`http://localhost:8000/api/message/${target.id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(res => {
      if (res.status === 'success') {
        target.remove()
      } else {
        alert('невозможно удалить сообщение!')
      }
    })

  historySettings.history[historySettings.historyID] = historySettings.history[historySettings.historyID].filter(item => item.id !== target.id)

  fetch('http://localhost:8000/api/dialog', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .then(({ data }) => {
      historySettings.history[historySettings.historyID] = data[historySettings.historyID]
      renderHistory()
    })
}

export {
  deleteMessage
}
