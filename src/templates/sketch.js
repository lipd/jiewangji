import React from 'react'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Post from '../components/sketch'

const BgWrapper = styled('div')`
  width: 100%;
  z-index: -100;
  position: fixed;
  overflow: hidden;
  height: 70vh;
  @media (max-width: 768px) {
    height: 60vh;
  }
  @media (max-width: 575px) {
    height: 50vh;
  }
`

const BgImage = styled('img')`
  width: 100%;
  filter: blur(5px) brightness(0.7);
  transform: scale(1.05);
  height: 70vh;
  @media (max-width: 768px) {
    height: 60vh;
  }
  @media (max-width: 575px) {
    height: 50vh;
  }
`
const Main = styled('main')`
  width: 100%;
  margin-top: 25vh;
  position: absolute;
`

const PostWrapper = styled('section')`
  padding: 0 calc((100vw - 1000px - 4rem) / 2) 3rem;
`

const Base = styled('div')`
  position: absolute;
  z-index: -100;
  top: calc(70vh - 25vh);
  height: calc(100% - (70vh - 25vh));
  @media (max-width: 768px) {
    top: calc(60vh - 25vh);
    height: calc(100% - (60vh - 25vh));
  }
  /* WHY !!! */
  @media (max-width: 575px) {
    top: calc(50vh - 25vh - 1px);
    height: calc(100% - (50vh - 25vh));
  }
  width: 100%;
  background-color: #f4f7f9;
`

const PostTemplate = ({ pageContext: { sketch } }) => (
  <Layout>
    <BgWrapper>
      <BgImage src={sketch.image} />
    </BgWrapper>
    <Header position="absolute" />
    <Main>
      <PostWrapper>
        <Post data={sketch} />
      </PostWrapper>
      <Base />
      <Footer />
    </Main>
  </Layout>
)

export default PostTemplate
