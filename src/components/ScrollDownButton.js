import React from 'react'
import jump from 'jump.js'

import style from '../styles/ScrollDownButton.module.scss'

class ScrollDownButton extends React.Component {
  constructor (props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  onClick (e) {
    const toElm = document.getElementById(this.props.to)
    const toPos = toElm.getBoundingClientRect().top - 80
    jump(toPos)
    e.preventDefault()
  }

  render () {
    return (
      <a className={style.wrapper} href={'#' + this.props.to} onClick={this.onClick}>
        <div className={style.scrollDownButton} aria-label='Scroll down' />
      </a>
    )
  }
}

export default ScrollDownButton
