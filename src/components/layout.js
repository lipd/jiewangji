import React from 'react'
import { Global, css } from '@emotion/react'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import useSiteMetadata from '../hooks/use-sitemetadata'
import styles from '../components/styles'

const Layout = ({ children, home, light }) => {
  const { title, description } = useSiteMetadata()

  return (
    <>
      <Global styles={styles.globalStyle} />
      {light && (
        <Global
          styles={css`
            html,
            body {
              background-color: white;
            }
          `}
        />
      )}
      <Helmet>
        <html lang="zh-CN" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      {home && <Hero title={title} description={description} />}
      {children}
    </>
  )
}

export default Layout
