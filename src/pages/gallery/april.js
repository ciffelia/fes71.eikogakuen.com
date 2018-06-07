import React from 'react'
import Head from '../../components/Head'
import { H1 } from '../../components/Heading'
import GalleryImages from '../../components/GalleryImages'

const GalleryMay = ({ location, data }) =>
  <div>
    <Head title='4月 - ギャラリー' description='4月の栄光祭の準備期間に撮影した写真を展示しています。' location={location} />
    <H1>4月 - ギャラリー</H1>
    <p style={{ textAlign: 'center' }}>4月の栄光祭の準備期間に撮影した写真を展示しています。</p>
    <GalleryImages graphqlData={data} />
  </div>

export default GalleryMay

export const query = graphql`
  query GalleryAprilQuery {
    allFile(
      sort: { fields: [ name ] }
      filter: { name: { regex: "/^201804/" } }
    ) {
      ...GalleryImageFields
    }
  }
`
