exports.onClientEntry = () => {
  const userAgent = window.navigator.userAgent.toLowerCase()
  if (userAgent.indexOf('msie') !== -1) {
    const elm = document.getElementById('___gatsby')
    elm.innerText = 'ご利用のブラウザではこのページをご覧いただけません。Internet Explorer 11、Microsoft Edge、Google Chrome、Mozilla Firefoxなど最新のプラウザをお使いください。'
    elm.style.textAlign = 'center'

    throw new Error('Internet Explorer < 11 is not supported')
  }

  require('es6-object-assign').polyfill()

  if (!String.prototype.endsWith) {
    // eslint-disable-next-line no-extend-native
    String.prototype.endsWith = function (search, thisLen) {
      if (thisLen === undefined || thisLen > this.length) {
        thisLen = this.length
      }
      return this.substring(thisLen - search.length, thisLen) === search
    }
  }
}
