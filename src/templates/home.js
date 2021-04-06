import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Layout from '../components/layout'
import ColumnGrid from '../components/column-grid'
import SketchGrid from '../components/sketch-grid'
import Footer from '../components/footer'
import { fontFamily } from '../components/styles'

export default function Home({ pageContext: { columns, sketches } }) {
  const Title = styled('h1')`
    font-family: ${fontFamily.yuanti};
    font-weight: normal;
    margin: 1rem 0 2rem;
  `

  return (
    <Layout home>
      <main
        css={css`
          padding: 2rem calc((100% - 1176px - 3rem) / 2) 5rem;
          margin: 0;
        `}
      >
        <Title>专栏</Title>
        <ColumnGrid columns={columns} />
        <Title>随笔</Title>
        <SketchGrid posts={sketches} />
      </main>
      <Footer />
    </Layout>
  )
}
