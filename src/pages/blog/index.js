import React from 'react'
import Head from '../../components/Head'
import { H1 } from '../../components/Heading'
import ArticleList from '../../components/ArticleList'
import blogArticleList from '../../data/blogArticleList'

const Blog = ({ location }) =>
  <div>
    <Head title='Fesnow' description='栄光祭実行委員や各催し物にインタビューして、栄光祭についての情報、栄光祭の「今」をお届けします！' location={location} />
    <H1>Eiko Fesnow</H1>
    <p style={{ textAlign: 'center' }}>このページでは、栄光祭実行委員や各催し物にインタビューして、栄光祭についての情報、栄光祭の「今」をお届けします！</p>
    <ArticleList list={blogArticleList} />
  </div>

export default Blog
