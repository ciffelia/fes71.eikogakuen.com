import React from 'react'
import Head from '../../components/Head'
import { H1, H2 } from '../../components/Heading'
import BackButton from '../../components/BackButton'

import satTimeTable from '../../img/timetable/saturday.svg'
import sunTimeTable from '../../img/timetable/sunday.svg'

const TimeTable = ({ location }) =>
  <div>
    <Head title='タイムテーブル' description='栄光祭で披露する公演催し物のスケジュールを掲載しています。' location={location} />
    <H1>タイムテーブル</H1>
    <p style={{ textAlign: 'center' }}>栄光祭で披露する公演催し物のスケジュールを掲載しています。</p>
    <H2>12日 土曜日</H2>
    <img src={satTimeTable} alt='土曜日タイムテーブル' />
    <H2>13日 日曜日</H2>
    <img src={sunTimeTable} alt='土曜日タイムテーブル' />
    <BackButton to='/events' />
  </div>

export default TimeTable
