import React from 'react'
import Head from '../../components/Head'
import { H1 } from '../../components/Heading'
import { CategoryList, CategoryCard } from '../../components/CategoryCard'

import leafImage from '../../img/leaf.svg'
import sakuraImage from '../../img/sakura.svg'
import festivalImage from '../../img/festival.svg'

const Gallery = ({ location }) =>
  <div>
    <Head title='ギャラリー' description='栄光祭の準備期間及び当日に撮影した写真を展示しています。' location={location} />
    <H1>ギャラリー</H1>
    <p style={{ textAlign: 'center' }}>栄光祭の準備期間及び当日に撮影した写真を展示しています。</p>
    <CategoryList>
      <CategoryCard title='3月' color='#b3d6c6' image={leafImage} to='/gallery/march' />
      <CategoryCard title='4月' color='#eac5d8' image={sakuraImage} to='/gallery/april' />
      <CategoryCard title='5月' color='#7fbeeb' image={festivalImage} to='/gallery/may' />
    </CategoryList>
  </div>

export default Gallery
