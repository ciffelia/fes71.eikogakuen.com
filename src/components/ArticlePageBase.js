import React from 'react'
import Head from '../components/Head'
import { H1 } from '../components/Heading'
import BackButton from '../components/BackButton'

const ArticlePageBase = ({ articleInfo, children, location }) =>
  <div>
    <Head
      title={`${articleInfo.number} ${articleInfo.title} - Fesnow`}
      description={articleInfo.description}
      image={articleInfo.thumb}
      isArticle
      articleTime={articleInfo.date}
      location={location}
    />

    <H1>{articleInfo.number} {articleInfo.title} - Fesnow</H1>

    {children}

    <BackButton to='/blog' />
  </div>

export default ArticlePageBase
