import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/react'
import { Row, Col4 } from './grid'
import { fontFamily, colors, shadow } from './styles'

const articleStyle = css`
  background-color: white;
  padding: 1rem;
  box-shadow: ${shadow.light};
  border-radius: 5px;

  :hover {
    box-shadow: ${shadow.dark};
    border-color: transparent;
  }

  .image {
    width: 100%;
  }

  h2 {
    font-family: ${fontFamily.yuanti};
    font-size: 1rem;
    font-weight: normal;
    margin: 1rem 0 1.2rem;
  }
  p {
    color: ${colors.light};
    font-size: 0.9rem;
    line-height: 1.35em;
  }
`

const SketchGrid = ({ posts }) => (
  <Row>
    {posts.map((post) => (
      <Col4 key={post.slug}>
        <Link to={`../sketch/${post.slug}`}>
          <article css={articleStyle}>
            <img className="image" src={post.image} alt="column cover" />
            <h2>{post.title}</h2>
            <p>{post.intro}</p>
          </article>
        </Link>
      </Col4>
    ))}
  </Row>
)

export default SketchGrid
