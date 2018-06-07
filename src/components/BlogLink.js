import React from 'react'

import style from '../styles/BlogLink.module.scss'
import Link from 'gatsby-link'

const BlogLink = () =>
  <Link to='/blog' className={style.blogLink}>
    <span>▶ 栄光祭の「今」をCheck</span>
  </Link>

export default BlogLink
