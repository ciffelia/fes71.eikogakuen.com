import React from 'react'
import Head from '../../components/Head'
import { H1 } from '../../components/Heading'

import EventList from '../../components/EventCard'
import BackButton from '../../components/BackButton'
import performanceEventsData from '../../data/events/performance'

const PerformanceEvents = ({ location }) =>
  <div>
    <Head title='公演催し物' description='栄光祭で披露する公演催し物の情報を掲載しています。' location={location} />
    <H1>公演催し物</H1>
    <p style={{ textAlign: 'center' }}>栄光祭で披露する公演催し物の情報を掲載しています。</p>
    <EventList data={performanceEventsData} color='#7fbeeb' />
    <BackButton to='/events' />
  </div>

export default PerformanceEvents
