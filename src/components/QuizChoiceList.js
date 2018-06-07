import React from 'react'
import Link from 'gatsby-link'

import style from '../styles/QuizChoiceList.module.scss'

const QuizChoiceList = ({ location, choice }) =>
  <ul className={style.choiceList}>
    {choice.map((choice, i) =>
      <QuizChoiceListItem location={location} key={i} num={i + 1}>
        {choice}
      </QuizChoiceListItem>
    )}
  </ul>

const QuizChoiceListItem = ({ location, num, children }) =>
  <Link
    to={location.pathname + '/answer?' + num}
    className={style.choiceListItem}
  >
    <li>{num}. {children}</li>
  </Link>

export default QuizChoiceList
