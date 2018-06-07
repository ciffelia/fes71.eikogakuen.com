import React from 'react'
import Head from '../../components/Head'
import { H1 } from '../../components/Heading'
import GalleryImages from '../../components/GalleryImages'

const GalleryMay = ({ location, data }) =>
  <div>
    <Head title='5月 - ギャラリー' description='5月の栄光祭準備期間及び当日に撮影した写真を展示しています。' location={location} />
    <H1>5月 - ギャラリー</H1>
    <p style={{ textAlign: 'center' }}>5月の栄光祭準備期間及び当日に撮影した写真を展示しています。</p>
    <GalleryImages graphqlData={data} />
  </div>

export default GalleryMay

export const query = graphql`
  query GalleryMayQuery {
    allFile(
      sort: { fields: [ name ] }
      filter: { name: { regex: "/^201805/" } }
    ) {
      ...GalleryImageFields
    }
  }
`
