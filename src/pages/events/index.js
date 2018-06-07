import React from 'react'
import Head from '../../components/Head'
import { H1 } from '../../components/Heading'
import { CategoryList, CategoryCard } from '../../components/CategoryCard'

import generalImage from '../../img/general.svg'
import foodImage from '../../img/food.svg'
import bookImage from '../../img/book.svg'
import performanceImage from '../../img/performance.svg'
import bandImage from '../../img/band.svg'
import timeImage from '../../img/time.svg'

const Events = ({ location }) =>
  <div>
    <Head title='催し物' description='栄光祭で実施する催し物の情報を掲載しています。' location={location} />
    <H1>催し物</H1>
    <p style={{ textAlign: 'center' }}>栄光祭で実施する催し物の情報を掲載しています。</p>
    <CategoryList>
      <CategoryCard title='一般' color='#eac5d8' image={generalImage} to='/events/general' />
      <CategoryCard title='食品' color='#b3d6c6' image={foodImage} to='/events/food' />
      <CategoryCard title='出版物' color='#eaefbd' image={bookImage} to='/events/book' />
      <CategoryCard title='公演' color='#7fbeeb' image={performanceImage} to='/events/performance' />
      <CategoryCard title='バンド' color='#cccccc' image={bandImage} to='/events/band' />
      <CategoryCard title='タイムテーブル' color='#e4b7e5' image={timeImage} to='/events/timetable' />
    </CategoryList>
  </div>

export default Events
