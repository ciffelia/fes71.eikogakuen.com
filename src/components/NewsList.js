import React from 'react'
import Link from 'gatsby-link'

import style from '../styles/NewsList.module.scss'

class NewsList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showMore: false,
      moreListHeight: '0'
    }

    this.toggle = this.toggle.bind(this)
  }

  calcHeight (open) {
    if (!open) {
      return '0'
    }

    let height

    const parent = this.moreListElm.parentNode
    const clone = this.moreListElm.cloneNode(true)
    clone.style.height = 'auto'
    parent.appendChild(clone)

    height = clone.offsetHeight + 'px'

    parent.removeChild(clone)

    return height
  }

  open () {
    this.setState({
      showMore: true,
      moreListHeight: this.calcHeight(true)
    })

    setTimeout(() => {
      this.setState({
        moreListHeight: null
      })
    }, 300)
  }

  close () {
    this.setState({
      showMore: false,
      moreListHeight: this.calcHeight(true)
    })
  }

  toggle () {
    if (this.state.showMore) {
      this.close()
    } else {
      this.open()
    }
  }

  componentDidUpdate (prevProps, prevState, prevContext) {
    // this.close() was called before the update
    if (prevState.moreListHeight === null && this.state.moreListHeight !== null) {
      setTimeout(() => {
        this.setState({
          moreListHeight: this.calcHeight(false)
        })
      }, 0)
    }
  }

  render () {
    const listItems = this.props.items.map(({ date, content, to }, i) => (
      <NewsListItem key={i} date={date} to={to}>{content}</NewsListItem>
    ))

    let moreElm = null
    if (listItems.length > 5) {
      moreElm =
        <React.Fragment>
          <ul
            className={style.list}
            ref={ref => { this.moreListElm = ref }}
            style={{ height: this.state.moreListHeight }}
          >
            {listItems.slice(5)}
          </ul>
          <span className={style.toggle} onClick={this.toggle}>
            { this.state.showMore ? '閉じる' : '続きを見る' }
          </span>
        </React.Fragment>
    }

    return (
      <div className={style.wrapper}>
        <ul className={style.list}>
          {listItems.slice(0, 5)}
        </ul>
        {moreElm}
      </div>
    )
  }
}

const NewsListItem = ({ date, to, children }) => {
  let link
  if (typeof to === 'string') {
    if (to.endsWith('.pdf')) {
      link = <a href={to} target='_blank'>{children}</a>
    } else {
      link = <Link to={to}>{children}</Link>
    }
  } else {
    link = children
  }

  return (
    <li className={style.item}>
      <div className={style.date}>{date}</div>
      <div className={style.contents}>
        {link}
      </div>
    </li>
  )
}

export default NewsList
