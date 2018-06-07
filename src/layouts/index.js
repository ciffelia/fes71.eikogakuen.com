import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/index.scss'
import style from '../styles/Layouts.module.scss'

const Layouts = ({ children, location }) => {
  const isIndex = location && (location.pathname === '/')
  const classNames = style.wrapper + (isIndex ? ' ' + style.indexWrapper : '')

  return (
    <div className={classNames}>
      <Header isIndex={isIndex} />
      <div className={style.mainWrapper}>
        <main>
          {children()}
        </main>
      </div>
      <Footer location={location} />
    </div>
  )
}

export default Layouts
