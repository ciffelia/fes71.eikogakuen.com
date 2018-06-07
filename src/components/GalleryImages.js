import React from 'react'
import style from '../styles/GalleryImages.module.scss'
import Lightbox from 'react-images'

class GalleryImages extends React.Component {
  constructor (props) {
    super(props)

    this.images = props.graphqlData.allFile.edges.map(({ node: { base, childImageSharp: { thumb, original } } }) => ({
      name: base
        .replace('soumu', '総務')
        .replace('kouhou', '広報')
        .replace('setsumeikai', '説明会')
        .replace('kizai', '機材')
        .replace('shuppann', '出版')
        .replace('jikkouiinn', '実行委員')
        .replace('ippann', '一般')
        .replace('katsudou', '活動')
        .replace('kouenn', '公演')
        .replace('soushoku', '装飾')
        .replace('shokuhinn', '食品'),
      originalSrc: original.src,
      thumbSrc: thumb.src
    }))

    this.thumbs = this.images.map(({ name, thumbSrc }) => ({
      src: thumbSrc,
      alt: name
    }))
    this.lightboxImages = this.images.map(({ name, originalSrc, thumbSrc }) => ({
      src: originalSrc,
      caption: name,
      thumbnail: thumbSrc
    }))

    this.state = {
      isLightboxOpen: false,
      currentImage: null
    }

    this.openLightbox = this.openLightbox.bind(this)
    this.closeLightbox = this.closeLightbox.bind(this)
    this.goPrev = this.goPrev.bind(this)
    this.goNext = this.goNext.bind(this)
    this.goTo = this.goTo.bind(this)
  }

  openLightbox (i) {
    this.setState({ isLightboxOpen: true, currentImage: i })
  }

  closeLightbox () {
    this.setState({ isLightboxOpen: false })
  }

  goPrev () {
    this.setState({ currentImage: this.state.currentImage - 1 })
  }

  goNext () {
    this.setState({ currentImage: this.state.currentImage + 1 })
  }

  goTo (i) {
    this.setState({ currentImage: i })
  }

  render () {
    return (
      <div>
        <div className={style.images}>
          {this.thumbs.map((val, i) => (
            <img
              key={i}
              src={val.src}
              srcSet={val.srcSet}
              alt={val.alt}
              onClick={() => { this.openLightbox(i) }}
            />
          ))}
        </div>
        <Lightbox
          images={this.lightboxImages}
          backdropClosesModal
          showThumbnails
          isOpen={this.state.isLightboxOpen}
          currentImage={this.state.currentImage}
          onClickPrev={this.goPrev}
          onClickNext={this.goNext}
          onClickThumbnail={this.goTo}
          onClose={this.closeLightbox}
        />
      </div>
    )
  }
}

export default GalleryImages

export const GalleryImageFieldsFragment = graphql`
  fragment GalleryImageFields on FileConnection {
    edges {
      node {
        base
        childImageSharp {
          thumb: resize(width: 600, quality: 50) {
            src
          }
          original {
            src
          }
        }
      }
    }
  }
`
