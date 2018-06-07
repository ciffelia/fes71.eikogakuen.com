import React from 'react'
import Head from '../../components/Head'
import { H1 } from '../../components/Heading'

import EventList from '../../components/EventCard'
import BackButton from '../../components/BackButton'
import generalEventsData from '../../data/events/general'

const GeneralEvents = ({ location }) =>
  <div>
    <Head title='一般催し物' description='栄光祭で展示を行う一般催し物の情報を掲載しています。' location={location} />
    <H1>一般催し物</H1>
    <p style={{ textAlign: 'center' }}>栄光祭で展示を行う一般催し物の情報を掲載しています。</p>
    <EventList data={generalEventsData} color='#eac5d8' />
    <BackButton to='/events' />
  </div>

export default GeneralEvents
