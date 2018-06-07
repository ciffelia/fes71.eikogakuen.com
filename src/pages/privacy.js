import React from 'react'
import Head from '../components/Head'
import { H1 } from '../components/Heading'
import ExternalLink from '../components/ExternalLink'

import style from '../styles/Privacy.module.scss'

const Privacy = ({ location }) =>
  <div className={style.privacy}>
    <Head title='プライバシーポリシー' description='当サイトの利用に関するプライバシーポリシーを掲載しています。' location={location} />
    <H1>プライバシーポリシー</H1>
    <p>当サイトでは、Google Analyticsを利用してユーザーの属性及び利用状況を収集し、サイトの改善に役立てています。情報の収集にはCookieを使用しています。この情報に個人を特定できる内容は含まれていません。詳しくは、<ExternalLink to='https://www.google.com/intl/ja/policies/privacy/partners/'>ユーザーが Google パートナーのサイトやアプリを使用する際の Google によるデータ使用</ExternalLink>をご覧ください。</p>
    <p>情報の収集を拒否したい場合は、<ExternalLink to='https://adssettings.google.com/authenticated'>広告設定</ExternalLink>や<ExternalLink to='https://tools.google.com/dlpage/gaoptout?hl=ja'>Google アナリティクス オプトアウト アドオン</ExternalLink>をご利用ください。</p>
  </div>

export default Privacy
