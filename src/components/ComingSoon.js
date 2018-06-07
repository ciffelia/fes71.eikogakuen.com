import React from 'react'
import underConstructionImage from '../img/under-construction.png'

import style from '../styles/ComingSoon.module.scss'

const ComingSoon = () =>
  <div className={style.wrapper}>
    <h2 className={style.text}>Coming soon!</h2>
    <img src={underConstructionImage} alt='Under construction...' className={style.image} />
  </div>

export default ComingSoon
