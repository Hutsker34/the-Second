class HistorySettings {
  constructor (historyID, history) {
    this._historyID = historyID
    this._history = history
  }

  get history () {
    return this._history
  }

  set history (value) {
    this._history = value
  }

  get historyID () {
    return this._historyID
  }

  set historyID (value) {
    this._historyID = value
  }
}

export default new HistorySettings(0, JSON.parse(localStorage.getItem('history')) || {})
