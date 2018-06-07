import React from 'react'

import style from '../styles/IndexContent.module.scss'

const IndexContent = ({ children, id, title }) =>
  <div id={id} className={style.wrapper}>
    <div className={style.title}>
      {title}
    </div>
    <div className={style.description}>
      {children}
    </div>
  </div>

export default IndexContent
