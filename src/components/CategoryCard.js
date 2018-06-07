import React from 'react'
import Link from 'gatsby-link'

import style from '../styles/EventCard.module.scss'

const CategoryList = ({ children }) =>
  <ul className={style.list}>{children}</ul>

const CategoryCard = ({ to, title, color, image }) =>
  <li className={style.wrapper}>
    <Link to={to}>
      <div className={style.card} style={{ backgroundColor: color }}>
        <div className={style.imageWrapper}>
          <img src={image} alt='' />
        </div>
        <div className={style.titleWrapper}>
          <div>{title}</div>
        </div>
      </div>
    </Link>
  </li>

export { CategoryList, CategoryCard }
