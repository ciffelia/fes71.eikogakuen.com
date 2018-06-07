import React from 'react'
import Head from '../../components/Head'
import { H1 } from '../../components/Heading'
import GalleryImages from '../../components/GalleryImages'

const GalleryMarch = ({ location, data }) =>
  <div>
    <Head title='3月 - ギャラリー' description='3月の栄光祭の準備期間に撮影した写真を展示しています。' location={location} />
    <H1>3月 - ギャラリー</H1>
    <p style={{ textAlign: 'center' }}>3月の栄光祭の準備期間に撮影した写真を展示しています。</p>
    <GalleryImages graphqlData={data} />
  </div>

export default GalleryMarch

export const query = graphql`
  query GalleryMarchQuery {
    allFile(
      sort: { fields: [ name ] }
      filter: { name: { regex: "/^201803/" } }
    ) {
      ...GalleryImageFields
    }
  }
`
