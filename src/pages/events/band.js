import React from 'react'
import Head from '../../components/Head'
import { H1 } from '../../components/Heading'

import EventList from '../../components/EventCard'
import BackButton from '../../components/BackButton'
import bandEventsData from '../../data/events/band'

const BandEvents = ({ location }) =>
  <div>
    <Head title='バンド' description='栄光祭のライブハウスで演奏するバンドの情報を掲載しています。' location={location} />
    <H1>バンド</H1>
    <p style={{ textAlign: 'center' }}>栄光祭のライブハウスで演奏するバンドの情報を掲載しています。</p>
    <EventList data={bandEventsData} color='#cccccc' />
    <BackButton to='/events' />
  </div>

export default BandEvents
