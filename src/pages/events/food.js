import React from 'react'
import Head from '../../components/Head'
import { H1 } from '../../components/Heading'

import EventList from '../../components/EventCard'
import BackButton from '../../components/BackButton'
import foodEventsData from '../../data/events/food'

const GeneralEvents = ({ location }) =>
  <div>
    <Head title='食品催し物' description='栄光祭で販売する食品の情報を掲載しています。' location={location} />
    <H1>食品催し物</H1>
    <p style={{ textAlign: 'center' }}>栄光祭で販売する食品の情報を掲載しています。</p>
    <EventList data={foodEventsData} color='#b3d6c6' />
    <BackButton to='/events' />
  </div>

export default GeneralEvents
