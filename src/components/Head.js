import React from 'react'
import Helmet from 'react-helmet'
import config from '../data/config'

const Head = ({ title = '', description = config.description, image = config.url + '/logo.png', isArticle = false, articleTime, location, noIndex = false }) => {
  const realTitle = title + (title !== '' ? ' - ' : '') + config.name

  const generalMeta = [
    { name: 'description', content: description },
    { name: 'keywords', content: '栄光学園,栄光祭,文化祭,神奈川,中学校,高校,中高一貫校' },
    { name: 'format-detection', content: 'email=no,telephone=no,address=no' }
  ]

  if (noIndex) {
    generalMeta.push({ name: 'robots', content: 'noindex' })
  }

  const ogpMeta = [
    { property: 'og:title', content: realTitle },
    { property: 'og:type', content: isArticle ? 'article' : 'website' },
    { property: 'og:url', content: config.url + location.pathname },
    { property: 'og:image', content: image },
    { property: 'og:description', content: description },
    { property: 'og:locale', content: 'ja_JP' },
    { property: 'og:site_name', content: config.name }
  ]

  if (isArticle) {
    ogpMeta.push({ property: 'og:published_time', content: articleTime.toISOString(true) })
  }

  const twitterMeta = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@EikoFestival' }
  ]

  const link = [
    { rel: 'icon', type: 'image/png', href: 'favicon.png' },
    { rel: 'apple-touch-icon', href: 'favicon.png' }
  ]

  return (
    <Helmet
      title={realTitle}
      meta={[...generalMeta, ...ogpMeta, ...twitterMeta]}
      link={link}
    >
      <html lang='ja' prefix='og: http://ogp.me/ns/website#' />
    </Helmet>
  )
}

export default Head
