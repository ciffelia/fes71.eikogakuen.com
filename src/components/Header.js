import React from 'react'
import Link from 'gatsby-link'
import ExternalLink from './ExternalLink'

import style from '../styles/Header.module.scss'

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.state = { smpNavOpen: false }

    this.openSmpNav = this.openSmpNav.bind(this)
    this.closeSmpNav = this.closeSmpNav.bind(this)
    this.toggleSmpNav = this.toggleSmpNav.bind(this)
  }

  openSmpNav () {
    this.setState({ smpNavOpen: true })
  }

  closeSmpNav () {
    this.setState({ smpNavOpen: false })
  }

  toggleSmpNav () {
    this.setState({ smpNavOpen: !this.state.smpNavOpen })
  }

  render () {
    const headerClassNames =
      style.header +
      (this.props.isIndex ? ' ' + style.indexHeader : '') +
      (this.state.smpNavOpen ? ' ' + style.headerSmpNavActive : '')
    const smpNavClassNames =
      style.smpNav + (this.state.smpNavOpen ? ' ' + style.smpNavActive : '') +
      (this.props.isIndex ? ' ' + style.indexSmpNav : '')

    const nav =
      <ul>
        <Link to='/blog' onClick={this.closeSmpNav}><li>Fesnow</li></Link>
        <Link to='/events' onClick={this.closeSmpNav}><li>催し物</li></Link>
        <Link to='/gallery' onClick={this.closeSmpNav}><li>ギャラリー</li></Link>
        <Link to='/map' onClick={this.closeSmpNav}><li>校内地図</li></Link>
        <Link to='/access' onClick={this.closeSmpNav}><li>アクセス</li></Link>
        <Link to='/link' onClick={this.closeSmpNav}><li>リンク</li></Link>
        <ExternalLink to='https://twitter.com/EikoFestival' onClick={this.closeSmpNav}>
          <li>Twitter</li>
        </ExternalLink>
        <ExternalLink to='https://www.facebook.com/eiko.fes' onClick={this.closeSmpNav}>
          <li>Facebook</li>
        </ExternalLink>
      </ul>

    const pcNav = React.cloneElement(nav, { className: style.pcNav })
    const smpNav = React.cloneElement(nav, { className: smpNavClassNames })

    return (
      <header className={headerClassNames}>
        {smpNav}
        <div className={style.navWrapper}>
          <div className={style.smpNavToggleWrapper} onClick={this.toggleSmpNav}>
            <div className={style.smpNavToggle}>
              <span /><span /><span />
            </div>
          </div>
          <Link to='/' onClick={this.closeSmpNav}>
            <img
              src='/favicon.png'
              alt='第71回栄光祭'
              width='80'
              height='80'
            />
          </Link>
          {pcNav}
          <div className={style.smpNavToggleDummy} />
        </div>
      </header>
    )
  }
}

export default Header
