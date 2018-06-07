import React from 'react'

import style from '../styles/BackButton.module.scss'
import Link from 'gatsby-link'

const BackButton = ({ to }) =>
  <Link to={to}>
    <div className={style.button}>戻る</div>
  </Link>

export default BackButton
