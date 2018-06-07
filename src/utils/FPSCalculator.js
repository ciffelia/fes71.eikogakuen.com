export default class FpsCalculator {
  constructor () {
    this._isRunning = false
    this._beginTime = Date.now()
    this._prevTime = this._beginTime
    this._frames = 0
    this._loop = this._loop.bind(this)
  }

  start (listener) {
    if (this._isRunning) {
      return null
    }

    this._beginTime = Date.now()
    this._prevTime = this._beginTime
    this._frames = 0
    this._listener = listener

    this._isRunning = true

    this._loop()
  }

  stop () {
    this._isRunning = false
    this._frames = 0
  }

  _loop () {
    if (!this._isRunning) {
      return
    }

    this._update()

    window.requestAnimationFrame(this._loop)
  }

  _update () {
    this._frames++
    let prevTime = this._prevTime
    let time = Date.now()

    if (time > prevTime + 1000) {
      this._listener && this._listener((this._frames * 1000) / (time - prevTime))
      this._prevTime = time
      this._frames = 0
    }

    this._beginTime = time
  }
}
