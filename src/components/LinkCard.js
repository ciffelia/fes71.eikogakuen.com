import React from 'react'

import style from '../styles/LinkCard.module.scss'
import ExternalLink from './ExternalLink'

const LinkList = ({ children }) =>
  <ul className={style.list}>{children}</ul>

const LinkCard = ({ to, title, image, children }) =>
  <li className={style.wrapper}>
    <ExternalLink to={to}>
      <div className={style.card} style={{ backgroundImage: `url(${image})` }}>
        <div className={style.contents}>
          <div className={style.title}>
            {title}
          </div>
          <div className={style.description}>
            {children}
          </div>
        </div>
      </div>
    </ExternalLink>
  </li>

export { LinkList, LinkCard }
