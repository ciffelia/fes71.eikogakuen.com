import React from 'react'

import EventPopup from './EventPopup'
import style from '../styles/EventCard.module.scss'

class EventList extends React.Component {
  constructor (props) {
    super(props)

    this.onCardClick = this.onCardClick.bind(this)
    this.onPopupClose = this.onPopupClose.bind(this)

    this.state = {
      showPopup: false,
      selectedIndex: 0
    }
  }

  onCardClick (i) {
    this.setState({
      showPopup: true,
      selectedIndex: i
    })
  }

  onPopupClose () {
    this.setState({
      showPopup: false
    })
  }

  render () {
    const cards = this.props.data.map((event, i) => (
      <EventCard
        key={i}
        data={this.props.data[i]}
        color={this.props.color}
        onClick={() => this.onCardClick(i)}
      />
    ))

    return (
      <div>
        <ul className={style.list}>
          {cards}
        </ul>
        <EventPopup
          data={this.props.data[this.state.selectedIndex]}
          show={this.state.showPopup}
          color={this.props.color}
          onClose={this.onPopupClose}
        />
      </div>
    )
  }
}

const EventCard = ({ data: { name, image, description, catchPhrase }, color, onClick }) =>
  <li className={style.wrapper}>
    <div className={style.card} style={{ backgroundColor: color }} onClick={onClick}>
      <div className={style.imageWrapper}>
        <img src={image} alt='' />
      </div>
      <div className={style.titleWrapper}>
        <div>{name}</div>
      </div>
    </div>
  </li>

export default EventList
