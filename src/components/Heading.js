import React from 'react'

import style from '../styles/Heading.module.scss'

const H1 = ({ children }) =>
  <div className={style.h1Wrapper}>
    <h1>{children}</h1>
  </div>

const H2 = ({ children }) =>
  <h2 className={style.h2}>{children}</h2>

const H3 = ({ children }) =>
  <h3 className={style.h3}>{children}</h3>

const H4 = ({ children }) =>
  <h4 className={style.h4}>{children}</h4>

const H5 = ({ children }) =>
  <h5 className={style.h5}>{children}</h5>

const H6 = ({ children }) =>
  <h6 className={style.h6}>{children}</h6>

export { H1, H2, H3, H4, H5, H6 }
