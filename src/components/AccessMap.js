import React from 'react'
import style from '../styles/AccessMap.module.scss'

const AccessMap = () =>
  <iframe
    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.947428189542!2d139.5178443148923!3d35.356950980271186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60184ff05950d1f7%3A0xe6ab2a2c04d88a84!2z5qCE5YWJ5a2m5ZyS!5e0!3m2!1sja!2sus!4v1517574406998'
    frameBorder='0'
    className={style.accessMap}
  />

export default AccessMap
