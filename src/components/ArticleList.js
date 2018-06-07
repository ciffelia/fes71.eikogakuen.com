import React from 'react'
import Link from 'gatsby-link'

import style from '../styles/ArticleList.module.scss'

const ArticleList = ({ list }) =>
  <ul className={style.list}>
    {list.map((props, i) => React.createElement(ArticleCard, { key: i, ...props }))}
  </ul>

const ArticleCard = ({ title, number, date, url, thumb }) => {
  const card =
    <div className={style.card} style={{ backgroundImage: `url(${thumb})` }}>
      <div className={style.contents}>
        <div className={style.title}>
          {title}
        </div>
        <div className={style.description}>
          {number} {date.format('M/D')}
        </div>
      </div>
    </div>

  const link =
    url.endsWith('.pdf')
      ? <a href={url} target='_blank'>{card}</a>
      : <Link to={url}>{card}</Link>

  return (
    <li className={style.wrapper}>
      {link}
    </li>
  )
}

export default ArticleList
