import React from 'react'
import { Timeline } from 'react-twitter-widgets'

import style from '../styles/SNSWidgets.module.scss'

class SNSWidgets extends React.Component {
  constructor (props) {
    super(props)

    this.timeout = null
    this.state = { fbWidth: null }

    this.onResize = this.onResize.bind(this)
  }

  resizeFb () {
    this.setState({ fbWidth: this.fbContainer.clientWidth })
  }

  onResize () {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }

    this.timeout = setTimeout(() => {
      this.resizeFb()
      this.timeout = null
    }, 100)
  }

  componentDidMount () {
    window && window.addEventListener('resize', this.onResize)
    this.resizeFb()
  }

  componentWillUnmount () {
    window && window.removeEventListener('resize', this.onResize)
  }

  render () {
    return (
      <div className={style.widgets}>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'EikoFestival'
          }}
          options={{
            height: '500'
          }}
        />
        <div ref={ref => { this.fbContainer = ref }}>
          <iframe
            src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Feiko.fes&tabs=timeline&width=${this.state.fbWidth}`}
            height='500'
            style={{ border: 'none', overflow: 'hidden', width: '100%' }}
            scrolling='no'
            frameBorder='0'
            allowtransparency='true'
          />
        </div>
      </div>
    )
  }
}

export default SNSWidgets
