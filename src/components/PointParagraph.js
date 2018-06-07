import React from 'react'

import style from '../styles/PointParagraph.module.scss'

const PointParagraph = ({ children }) =>
  <p className={style.p}>{children}</p>

export default PointParagraph
