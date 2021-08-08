import historySettings from './historySettings.js'

function deleteMessage (e) {
  const target = e.target.closest('.del__message')
  const conf = target && confirm('вы точно хотите удалить сообщение')
  if (!conf) {
    return
  }

  fetch('http://localhost:8000/delete-mess', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      history: historySettings.historyID,
      id: target.id
    })
  })
    .then(res => res.json())
    .then(res => {
      if (res.success) {
        target.remove()
      } else {
        alert('невозможно удалить сообщение!')
      }
    })

  historySettings.history[historySettings.historyID] = historySettings.history[historySettings.historyID].filter(item => item.id !== target.id)

  fetch('http://localhost:8000/get-dialogue', {
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

export {
  deleteMessage
}
