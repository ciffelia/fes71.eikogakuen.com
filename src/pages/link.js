import React from 'react'
import Head from '../components/Head'
import { H1 } from '../components/Heading'
import { LinkList, LinkCard } from '../components/LinkCard'
import EikoHP from '../styles/LinkImages/EikoHP.jpg'
import EikoFB from '../styles/LinkImages/EikoFB.jpg'
import PhysBlog from '../styles/LinkImages/PhysBlog.jpg'
import PhysTw from '../styles/LinkImages/PhysTw.jpg'
import BrassTw from '../styles/LinkImages/BrassTw.jpg'

const Link = ({ location }) =>
  <div>
    <Head title='リンク' description='栄光祭に関連するウェブサイトへのリンクを掲載しています。' location={location} />
    <H1>リンク</H1>
    <p style={{ textAlign: 'center' }}>栄光祭に関連するウェブサイトへのリンクを掲載しています。</p>
    <LinkList>
      <LinkCard title='栄光学園' image={EikoHP} to='http://ekh.jp'>
        栄光学園の公式サイトです。昨年リニューアルされ、校内の動画などが掲載されています。
      </LinkCard>
      <LinkCard title='栄光学園Facebook' image={EikoFB} to='https://www.facebook.com/eikogakuen/'>
        栄光学園の公式Facebookです。生徒の普段の様子や活動を紹介しています。
      </LinkCard>
      <LinkCard title='ブツリブログ' image={PhysBlog} to='http://blog.livedoor.jp/eikophys'>
        科学の甲子園全国大会に7年連続で出場している物理研究部のブログです。研究や活動の内容を紹介しています。
      </LinkCard>
      <LinkCard title='物理部Twitter' image={PhysTw} to='https://twitter.com/EikoPhysicsClub'>
        物理研究部のTwitterです。ブログに載らない小さな研究などを投稿しています。
      </LinkCard>
      <LinkCard title='ブラスバンド部Twitter' image={BrassTw} to='https://twitter.com/eikobrass'>
        ブラスバンド部のTwitterです。演奏会や、普段の部活の様子を投稿しています。
      </LinkCard>
    </LinkList>
  </div>

export default Link
