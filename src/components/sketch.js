import React from 'react'
import styled from '@emotion/styled'
import MarkdownRenderer from '../components/markdown-renderer'
import dayjs from 'dayjs'
import { colors } from './styles'

const Article = styled('article')`
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 9px 49px -8px rgba(0, 0, 0, 0.3);
  margin: 0 2rem;
  @media (max-width: 575px) {
    margin: 0 1rem;
  }

  figure {
    align-items: center;
    justify-content: center;
  }

  .title {
    padding: 0 6rem;
    color: white;
    font-size: 2.25rem;
    line-height: 1.3em;
    font-weight: normal;
    @media (max-width: 768px) {
      padding: 0 2rem;
      font-size: 1.7rem;
    }
    @media (max-width: 575px) {
      padding: 0 2rem;
      font-size: 1.6rem;
    }
  }

  .date {
    text-align: center;
    font-size: 0.9rem;
    font-weight: bold;
    color: ${colors.fontBlue};
    margin: 1rem 0 1.6rem;
  }

  .post {
    color: #4a4a4a;
    padding: 2rem 6rem;
    line-height: 1.8;
    @media (max-width: 768px) {
      padding: 0 2rem;
    }
    @media (max-width: 575px) {
      padding: 0 2rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: black;
      margin: 1.3rem 0 1.3rem;
      font-weight: 400;
    }

    h1 {
      font-size: 1.45rem;
    }

    h2 {
      font-size: 1.3rem;
    }

    h3 {
      font-size: 1.2rem;
    }

    h4 {
      font-size: 1rem;
    }

    h5 {
      font-size: 1rem;
    }

    h6 {
      font-size: 1rem;
    }

    p {
      font-weight: 400;
      margin: 1.3rem 0;
    }
  }
`

const Hero = styled('div')`
  background-image: ${(props) => `url(${props.img})`};
  background-size: 100% 100%;
  height: 60vh;
  @media (max-width: 768px) {
    height: 50vh;
  }
  @media (max-width: 575px) {
    height: 40vh;
  }

  .darken-layer {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    background-image: linear-gradient(0, #000, hsla(0, 0%, 100%, 0));
  }
`

const Sketch = ({ data: sketch }) => {
  return (
    <Article>
      <header>
        <Hero img={sketch.image}>
          <div className="darken-layer">
            <h1 className="title">{sketch.title}</h1>
            <p className="date">
              {dayjs(sketch._createTime).format('YYYY [年] M [月] D [日]')}
            </p>
          </div>
        </Hero>
      </header>
      <section className="post">
        <MarkdownRenderer md={sketch.body} />
      </section>
    </Article>
  )
}

export default Sketch
