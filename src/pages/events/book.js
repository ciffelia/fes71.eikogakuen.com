import React from 'react'
import Head from '../../components/Head'
import { H1 } from '../../components/Heading'

import EventList from '../../components/EventCard'
import BackButton from '../../components/BackButton'
import bookEventsData from '../../data/events/book'

const BookEvents = ({ location }) =>
  <div>
    <Head title='出版物' description='栄光祭で頒布する出版物の情報を掲載しています。' location={location} />
    <H1>出版物</H1>
    <p style={{ textAlign: 'center' }}>栄光祭で頒布する出版物の情報を掲載しています。</p>
    <EventList data={bookEventsData} color='#eaefbd' />
    <BackButton to='/events' />
  </div>

export default BookEvents
