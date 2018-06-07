import React from 'react'

import style from '../styles/UnderLine.module.scss'

const UnderLine = ({ children }) =>
  <span className={style.underLine}>{children}</span>

export default UnderLine
