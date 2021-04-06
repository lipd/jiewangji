import React from 'react'
import { css } from '@emotion/react'
import { Link } from 'gatsby'
import { colors, fontFamily, shadow } from './styles'
import { Row, Col3 } from './grid'

const articleStyle = css`
  box-shadow: ${shadow.light};
  border-radius: 5px;
  background-color: white;
  overflow: hidden;
  :hover {
    box-shadow: ${shadow.dark};
    .container {
      border-color: transparent;
    }
  }

  .container {
    padding: 1rem;
    border-top: none;
  }

  .image {
    width: 100%;
  }

  h2 {
    font-family: ${fontFamily.yuanti};
    font-weight: normal;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1rem;
    line-height: 1.4rem;
    color: ${colors.light};
  }
`

const ColumnPreview = ({ column }) => (
  <article css={articleStyle}>
    <Link to={`/column/${column.slug}/intro/`}>
      <img className="image" src={column.image} alt="" />
      <div className="container">
        <h2>{column.title}</h2>
        <p>{column.intro}</p>
      </div>
    </Link>
  </article>
)

const ColumnGrid = ({ columns }) => (
  <Row>
    {columns.map((column) => (
      <Col3 key={column._id}>
        <ColumnPreview column={column} />
      </Col3>
    ))}
  </Row>
)

export default ColumnGrid
