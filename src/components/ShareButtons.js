import React from 'react'
import ExternalLink from './ExternalLink'
import config from '../data/config'

import style from '../styles/ShareButtons.module.scss'
import twitterIcon from '../img/Twitter.svg'
import facebookIcon from '../img/Facebook.svg'
import hatebuIcon from '../img/Hatebu.svg'

const ShareButton = ({ color, icon, url, children }) =>
  <div
    className={style.shareButton}
    style={{
      backgroundColor: color
    }}
  >
    <ExternalLink to={url}>
      <img src={icon} alt='' width='20' height='20' />
      {children}
    </ExternalLink>
  </div>

const TwitterShareButton = ({ url }) =>
  <ShareButton
    color='#1da1f2'
    icon={twitterIcon}
    url={`https://twitter.com/intent/tweet?url=${url}&hashtags=栄光祭&related=EikoFestival,EikoPhysicsClub,eikobrass`}
  >
    Tweet
  </ShareButton>

const FacebookShareButton = ({ url }) =>
  <ShareButton
    color='#3B5998'
    icon={facebookIcon}
    url={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
  >
    Share
  </ShareButton>

const HatebuShareButton = ({ url }) =>
  <ShareButton
    color='#00A4DE'
    icon={hatebuIcon}
    url={`http://b.hatena.ne.jp/entry/${url}`}
  >
    Bookmark
  </ShareButton>

const ShareButtons = ({ location }) => {
  const url = encodeURIComponent(config.url + location.pathname)

  return (
    <div>
      <TwitterShareButton url={url} />
      <FacebookShareButton url={url} />
      <HatebuShareButton url={url} />
    </div>
  )
}

export default ShareButtons
