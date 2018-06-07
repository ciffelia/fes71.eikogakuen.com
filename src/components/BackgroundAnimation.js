import React from 'react'
import FPSCalcurator from '../utils/FPSCalculator.js'

import style from '../styles/BackgroundAnimation.module.scss'

class BackgroundAnimation extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      petalCount: this.getPetalCount()
    }

    this.petalUrlPrefix = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="')
    this.petalUrlSuffix = encodeURIComponent('"><path d="M256,0C194.5,82.109,82.125,199.438,82.125,338.094C82.125,434.141,159.969,512,256,512 s173.875-77.859,173.875-173.906C429.875,199.438,317.469,82.109,256,0z" /></svg>')

    this.coefficient = 0.5
    this.petalUrls = []
    this.keyFrames = []
    this.keyFrameElms = []
    this.durations = []

    this.fpsListener = this.fpsListener.bind(this)
    this.onWindowResize = this.onWindowResize.bind(this)

    if (typeof window !== 'undefined') {
      this.fpsCalcurator = new FPSCalcurator()
      this.fpsCalcurator.start(this.fpsListener)
      window.addEventListener('resize', this.onWindowResize)
    }
  }

  fpsListener (fps) {
    const clamp = (val, min, max) => Math.max(min, Math.min(max, val))

    const oldCoefficient = this.coefficient
    this.coefficient = fps / 60
    this.coefficient = clamp(this.coefficient, oldCoefficient - 0.2, oldCoefficient + 0.2)
    this.coefficient = clamp(this.coefficient, 0, 1)

    this.setState({
      petalCount: this.getPetalCount()
    })
  }

  getPetalCount () {
    return Math.floor(typeof window !== 'undefined' && window.innerWidth / 6 * (this.coefficient || 1))
  }

  onWindowResize () {
    this.setState({
      petalCount: this.getPetalCount()
    })
  }

  generatePetalUrl (color) {
    // return 'data:image/svg+xml,' + encodeURIComponent(`
    //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="${color}">
    //     <path d="M256,0C194.5,82.109,82.125,199.438,82.125,338.094C82.125,434.141,159.969,512,256,512 s173.875-77.859,173.875-173.906C429.875,199.438,317.469,82.109,256,0z" />
    //   </svg>
    // `)
    return this.petalUrlPrefix + encodeURIComponent(color) + this.petalUrlSuffix
  }

  generateEnoughPetalUrls (count) {
    for (let i = this.petalUrls.length; i < count; i++) {
      const color = Math.floor(0xffffff * Math.random())
      this.petalUrls[i] = this.generatePetalUrl(`#${color.toString(16)}`)
    }
  }

  generateKeyFrame (i) {
    const name = 'petalAnimation-' + i
    const startTranslateX = Math.random() * 100
    const goalTransitionX = startTranslateX + (Math.random() * 40 - 20)

    // const css = `
    //   @keyframes ${name} {
    //     0% {
    //       transform:
    //         translate(${startTranslateX}vw, -100%)
    //         rotateX(${Math.random()}turn)
    //         rotateY(${Math.random()}turn);
    //     }
    //     100% {
    //       transform:
    //         translate(${goalTransitionX}vw, 100vh)
    //         translateY(100%)
    //         rotateX(${Math.random()}turn)
    //         rotateY(${Math.random()}turn);
    //     }
    //   }
    // `
    const css = `@keyframes ${name}{0%{transform:translate(${startTranslateX}vw,-100%) rotateX(${Math.random()}turn) rotateY(${Math.random()}turn)}100%{transform:translate(${goalTransitionX}vw,100vh) translateY(100%) rotateX(${Math.random()}turn) rotateY(${Math.random()}turn)}}`

    return [name, css]
  }

  generateEnoughKeyframes (count) {
    if (count === 0) {
      return
    }

    let keyframeStyles = ''

    for (let i = this.keyFrames.length; i < count; i++) {
      const [name, css] = this.generateKeyFrame(i)
      this.keyFrames[i] = name
      keyframeStyles += css
    }

    this.addStyle(keyframeStyles)
  }

  generateEnoughDurations (count) {
    for (let i = this.durations.length; i < count; i++) {
      this.durations[i] = 4 + Math.random()
    }
  }

  addStyle (css) {
    if (typeof document === 'undefined') {
      return
    }

    const elm = document.createElement('style')
    elm.type = 'text/css'
    elm.innerHTML = css
    document.head.appendChild(elm)

    this.keyFrameElms.push(elm)
  }

  render () {
    this.generateEnoughPetalUrls(this.state.petalCount)
    this.generateEnoughKeyframes(this.state.petalCount)
    this.generateEnoughDurations(this.state.petalCount)

    const petals = Array(this.state.petalCount)
    for (let i = 0; i < this.state.petalCount; i++) {
      const delay = -(i * 500)

      petals[i] =
        <img
          src={this.petalUrls[i]}
          alt=''
          key={i}
          style={{
            animationName: this.keyFrames[i],
            animationDuration: `${this.durations[i]}s`,
            animationDelay: `${delay}s`
          }}
        />
    }

    return (
      <div className={style.bgAnimationWrapper}>
        <div className={style.bgAnimation}>
          {petals}
        </div>
      </div>
    )
  }

  componentWillUnmount () {
    if (typeof window !== 'undefined') {
      this.fpsCalcurator.stop()
      window.removeEventListener('resize', this.onWindowResize)
    }

    for (const elm of this.keyFrameElms) {
      document.head.removeChild(elm)
    }
  }
}

export default BackgroundAnimation
