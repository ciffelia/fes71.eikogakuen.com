import React from 'react'
import Link from 'gatsby-link'
import classNames from 'classnames'

import speakerImg from '../img/speaker.svg'
import timeImg from '../img/time-orange.svg'
import style from '../styles/EventPopup.module.scss'

const EventPopup = ({ data: { name, image, description, catchPhrase, schedule }, show, color, onClose }) =>
  <div className={classNames(style.wrapper, { [style.show]: show })} onClick={onClose}>
    <div className={style.card} style={{ backgroundColor: color }}>
      <div className={style.imageWrapper}>
        <img src={image} alt='' />
      </div>
      <div className={style.textWrapper}>
        <div className={style.title}>{name}</div>
        <div className={style.description}>{description.split('\n').map(val => <p>{val}</p>)}</div>
        {(() => {
          if (typeof schedule === 'undefined') {
            return null
          }

          if (schedule === '__LINK_TO_BAND__') {
            return (
              <Link to='/events/band'>
                <div className={style.schedule}>
                  <img src={timeImg} alt='' />
                  詳しくはこちらをクリック！
                </div>
              </Link>
            )
          }

          return (
            <div className={style.schedule}>
              <img src={timeImg} alt='' />
              {schedule}
            </div>
          )
        })()}
        <div className={style.catchPhrase}>
          <img src={speakerImg} alt='' />
          {catchPhrase}
        </div>
      </div>
    </div>
  </div>

export default EventPopup
