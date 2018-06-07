import React from 'react'
import Link from 'gatsby-link'
import ShareButtons from './ShareButtons'

import style from '../styles/Footer.module.scss'

const Footer = ({ location }) =>
  <div className={style.footer}>
    <ShareButtons location={location} />
    <div>(c) 2018 71st Eiko Festival Executive Committee</div>
    <div className={style.privacyLink}><Link to='/privacy'>プライバシーポリシー</Link></div>
  </div>

export default Footer
