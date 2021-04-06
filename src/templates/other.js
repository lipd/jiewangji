import React from 'react'
import MarkdownRenderer from '../components/markdown-renderer'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../components/styles'

const Wrapper = styled('div')`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  line-height: 2rem;
`

const Main = styled('main')`
  flex: 1;
  margin: 4rem 1.5rem 0;
  padding: 0 calc((100% - 1080px - 3rem) / 2) 3rem;

  ${styles.typography.normal}
`

const Normal = ({ pageContext: { content } }) => (
  <Layout light>
    <Wrapper>
      <Header light />
      <Main>
        <MarkdownRenderer md={content.body} />
      </Main>
      <Footer />
    </Wrapper>
  </Layout>
)

export default Normal
