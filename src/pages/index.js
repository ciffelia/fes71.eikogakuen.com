import React from 'react'
import Head from '../components/Head'
import BlogLink from '../components/BlogLink'
import ScrollDownButton from '../components/ScrollDownButton'
import NewsList from '../components/NewsList'
import IndexContent from '../components/IndexContent'
import BackgroundAnimation from '../components/BackgroundAnimation'
import { CounterWrapper, Countdown, AccessCounter } from '../components/IndexCounter'
import SNSWidgets from '../components/SNSWidgets'
import title1Img from '../img/title/1.png'
import title2Img from '../img/title/2.png'
import title3Img from '../img/title/3.png'
import title4Img from '../img/title/4.png'
import newsList from '../data/newsList'

import style from '../styles/Index.module.scss'

const Index = ({ location }) =>
  <div>
    <Head location={location} />
    <BackgroundAnimation />
    <div className={style.animationWrapper}>
      <div className={style.title1}><span>71st Eiko Festival 2018.5.12-13</span><span>@栄光学園</span></div>
      <div className={style.title2}>
        <span>「</span>
        <img src={title1Img} alt='百' />
        <img src={title2Img} alt='花' />
        <img src={title3Img} alt='繚' />
        <img src={title4Img} alt='乱' />
        <span>」</span>
      </div>
      <div className={style.blogLinkWrapper}><BlogLink /></div>
      <div className={style.scrollDownButtonWrapper}><ScrollDownButton to='scrollAnchor' /></div>
    </div>
    <div id='scrollAnchor' className={style.opaqueBg}>
      <IndexContent title='最新情報'>
        <NewsList items={newsList} />
      </IndexContent>
    </div>
    <div className={style.transparentBg}>
      <SNSWidgets />
    </div>
    <div className={style.opaqueBg}>
      <IndexContent title='あいさつ'>
        <div>
          今回の第71回栄光祭では、「百花繚乱」をスローガンに掲げ、半年間以上の長きに渡って、栄光生一丸となって準備を進めております。この「百花繚乱」は、様々な種類の花が色とりどりに咲き乱れる様子を表現し、また、そこから転じて、優秀で、独創的な人材が集まるという意味をもつ四字熟語です。<br />
          栄光祭当日の2日間、それぞれ強い個性と、高い独創性を持つ、1000を超える栄光生の花々が咲き乱れ、1つの「栄光祭」と言う大輪を咲かせる様子を、1人でも多くのお客様にご覧いただきたいと思っております。<br />
          栄光生一同、心より皆様のご来場をお待ちしております。<br />
          <div style={{ textAlign: 'right' }}>第71回栄光祭実行委員長 加藤 宗士</div>
        </div>
      </IndexContent>
      <IndexContent title='栄光祭とは'>
        鎌倉市に位置する栄光学園中学高等学校で毎年行われている文化祭です。当初は「創立記念祭」という名前でしたが、のちに名前が変わって「栄光祭」となりました。1948年6月21日には第一回創立記念祭が開かれましたが、諸行事との関連もあって、5月中旬の土日に行うようになりました。はじめは学芸会的な色彩が強く、学年ごとの劇上演なども多く、展示もクラブによるものが中心でした。大船移転後は展示会場も増え、現在のような形となったようです。催し物の中には1960年から伝統的に続いているものもあります。
      </IndexContent>
      <IndexContent title='ロゴについて'>
        <div>
          <div className={style.logoWrapper}>
            <img src='favicon.png' alt='栄光最公式ロゴ' />
          </div>
          今回の栄光祭公式ロゴは、上下左右から桜の花が咲き乱れ、東の地平線から立ち上る陽光が今回の栄光祭スローガンである「百花繚乱」の４文字を一閃しているデザインになっています。和風で、かつ豪華絢爛なイメージである「百花繚乱」にぴったりのロゴとなっています。
        </div>
      </IndexContent>
    </div>
    <div className={style.transparentBg}>
      <CounterWrapper>
        <Countdown />
        <AccessCounter />
      </CounterWrapper>
    </div>
  </div>

export default Index
