import React from 'react'
import moment from 'moment'
import 'whatwg-fetch'

import style from '../styles/IndexCounter.module.scss'

const CounterWrapper = ({ children }) =>
  <div className={style.wrapper}>{children}</div>

const Counter = ({ prefix = '', suffix = '', children }) =>
  <div className={style.counter}>
    <div>{prefix}</div>
    <div>
      {children}
    </div>
    <div>{suffix}</div>
  </div>

class Countdown extends React.Component {
  constructor (props) {
    super(props)

    this.state = { now: moment() }

    this.fesStart = moment([2018, 4, 12, 9])
    this.fesEnd = moment([2018, 4, 13, 16, 30])

    this.updateTime = this.updateTime.bind(this)

    this.interval = setInterval(this.updateTime, 100)
  }

  updateTime () {
    this.setState({ now: moment() })
  }

  durationTo (time) {
    const diff = time.diff(this.state.now)
    const duration = moment.duration(diff)

    return (
      <span>
        <span className={style.count}>{Math.floor(duration.asDays())}</span>日
        <span className={style.count}>{duration.hours()}</span>時間
        <span className={style.count}>{duration.minutes()}</span>分
        <span className={style.count}>{(duration.seconds() + Math.floor(duration.milliseconds() / 100) / 10).toFixed(1)}</span>秒
      </span>
    )
  }

  render () {
    if (this.state.now.isBefore(this.fesStart)) {
      return (
        <Counter prefix='栄光祭まであと'>
          {this.durationTo(this.fesStart)}
        </Counter>
      )
    } else if (this.state.now.isBefore(this.fesEnd)) {
      return (
        <Counter prefix='栄光祭終了まであと'>
          {this.durationTo(this.fesEnd)}
        </Counter>
      )
    } else {
      return (
        <Counter suffix='ご来場ありがとうございました'>
          栄光祭は<span className={style.count}>終了</span>しました
        </Counter>
      )
    }
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }
}

class AccessCounter extends React.Component {
  constructor (props) {
    super(props)

    this.state = { text: '-' }

    typeof window !== 'undefined' && window.fetch('https://us-central1-eiko-fes-71-access-counter.cloudfunctions.net/getAccessCount')
      .then(res => {
        if (res.ok) {
          return res.text()
        } else {
          return Promise.reject(res)
        }
      })
      .then(text => {
        this.setState({ text })
      })
      .catch(err => {
        console.log('Warning: Failed to get access count', err)
      })
  }

  render () {
    return (
      <Counter prefix='このサイトの閲覧数は'>
        <span className={style.count}>{this.state.text}</span>回
      </Counter>
    )
  }
}

export { CounterWrapper, Countdown, AccessCounter }
