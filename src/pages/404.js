import React from 'react'
import Head from '../components/Head'
import { H1 } from '../components/Heading'

const NotFound = ({ location }) =>
  <div>
    <Head title='404 Not Found' location={location} noIndex />
    <H1>404 Not Found</H1>
    <p>お探しのページは見つかりませんでした。URLに誤りがあるか、削除された可能性があります。</p>
    <p>上のメニューから目的のページをお探しください。</p>
  </div>

export default NotFound
