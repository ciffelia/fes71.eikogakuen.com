import React from 'react'
import Head from '../components/Head'
import { H1, H2 } from '../components/Heading'

import eikoMap from '../img/map/eiko.svg'
import main1Map from '../img/map/main1.svg'
import main2Map from '../img/map/main2.svg'
import west1Map from '../img/map/west1.svg'
import west2Map from '../img/map/west2.svg'

const Map = ({ location }) =>
  <div>
    <Head title='校内地図' description='栄光祭当日の栄光学園校内の地図を掲載しています。' location={location} />
    <H1>校内地図</H1>
    <p style={{ textAlign: 'center' }}>栄光祭当日の栄光学園校内の地図を掲載しています。</p>
    <H2>全体マップ</H2>
    <img src={eikoMap} alt='全体マップ' />
    <H2>南棟・北棟 一階</H2>
    <img src={main1Map} alt='南棟・北棟 一階' />
    <H2>南棟・北棟 二階</H2>
    <img src={main2Map} alt='南棟・南棟 二階' />
    <H2>西棟 一階</H2>
    <div style={{ textAlign: 'center' }}>
      <img src={west1Map} alt='西棟 一階' style={{ maxWidth: '300px' }} />
    </div>
    <H2>西棟 二階</H2>
    <div style={{ textAlign: 'center' }}>
      <img src={west2Map} alt='西棟 二階' style={{ maxWidth: '300px' }} />
    </div>
  </div>

export default Map
