import React from 'react'
import AccessMap from '../components/AccessMap'
import Head from '../components/Head'
import PointParagraph from '../components/PointParagraph'
import { H1, H2, H3 } from '../components/Heading'
import UnderLine from '../components/UnderLine'
import ExternalLink from '../components/ExternalLink'

import style from '../styles/Access.module.scss'

const Access = ({ location }) =>
  <div className={style.access}>
    <Head title='アクセス' description='大船駅から徒歩20分の場所に位置している、栄光学園までの道順や地図を掲載しています。' location={location} />
    <H1>アクセス</H1>
    <p style={{ textAlign: 'center' }}>大船駅から徒歩20分の場所に位置している、栄光学園までの道順や地図を掲載しています。</p>
    <H2>最寄り駅</H2>
    <PointParagraph>
      最寄り駅は<UnderLine>大船駅</UnderLine>です。JR東海道線、横須賀線・京浜東北根岸線・上野東京ライン・湘南新宿ラインまたは湘南モノレールでお越しください。
    </PointParagraph>
    <PointParagraph>
      大船駅では<UnderLine>南改札西口(大船観音側)</UnderLine>を出て、歩行者デッキをお進みください。
    </PointParagraph>
    <H2>駅から栄光学園まで</H2>
    <PointParagraph>駅からは<UnderLine>徒歩またはバス</UnderLine>となります。</PointParagraph>
    <PointParagraph>どちらの場合でも、駅を出た後はまず<UnderLine>バス停(3番のりば)に向かいます</UnderLine>。</PointParagraph>
    <H3>バス停まで</H3>
    <PointParagraph>西口を出て<UnderLine>歩行者デッキ</UnderLine>を進みます。</PointParagraph>
    <PointParagraph>駐輪場の前を右に曲がり、川を渡った先にトイレがあります。</PointParagraph>
    <PointParagraph>トイレの横には<UnderLine>階段がありますが</UnderLine>、ここを下ると狭い道に進んでしまいます。混雑を避けるため<UnderLine>この階段では降りず</UnderLine>、そのままデッキをお進みください。</PointParagraph>
    <PointParagraph>デッキを最後まで進むと、<UnderLine>広い下りの階段</UnderLine>が見えます。これを下ると<UnderLine>すぐ右側</UnderLine>にバス停(3番のりば)があります。</PointParagraph>
    <H3>バスの場合</H3>
    <PointParagraph>バス停(3番のりば)から<UnderLine>「神奈川中央交通 船35 栄光学園経由 清泉女学院行」</UnderLine>にご乗車ください。</PointParagraph>
    <PointParagraph>2つ目の<UnderLine>「栄光学園前」</UnderLine>のバス停でお降りください。所要時間は<UnderLine>およそ5分</UnderLine>です。</PointParagraph>
    <PointParagraph>運賃は後払いで、現金では大人180円・小人90円、交通系ICカードでは大人175円・小人88円となります。</PointParagraph>
    <PointParagraph>
      バスの時刻表は
      <ExternalLink to='http://www.kanachu.co.jp/dia/diagram/timetable/cs:0000801142-1/nid:00126855/dts:1517616000'>こちら</ExternalLink>
      です。※栄光祭当日はバスのダイヤが変更となることがあります。その場合は公式サイトでお知らせする予定です。
    </PointParagraph>
    <H3>徒歩の場合</H3>
    <PointParagraph>大船駅西口バス停からから栄光学園までは<UnderLine>徒歩20分</UnderLine>です。<UnderLine>急坂(通称栄光坂)</UnderLine>がありますのでご注意ください。</PointParagraph>
    <PointParagraph>バス停(3番のりば)を通り過ぎて、バスターミナルの端まで進み<UnderLine>左に</UnderLine>曲がります。</PointParagraph>
    <PointParagraph>400メートルほど進むと、<UnderLine>左手にセブンイレブン</UnderLine>が見えます。</PointParagraph>
    <PointParagraph>この先の<UnderLine>信号を直進します</UnderLine>。信号は<UnderLine>押しボタン式</UnderLine>ですのでご注意ください。</PointParagraph>
    <PointParagraph>「玉縄出張所前」(消防署)のバス停を通り過ぎ、<UnderLine>400メートルほど坂を登ると</UnderLine>、左手に栄光学園が見えます。</PointParagraph>
    <H2>地図</H2>
    <AccessMap />
  </div>

export default Access
