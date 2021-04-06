import React from 'react'
import { Link } from 'gatsby'
import MarkdownRenderer from '../components/markdown-renderer'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import Footer from '../components/footer'
import Header from '../components/header'
import { fontFamily, colors } from '../components/styles'

const Menu = styled('nav')`
  position: fixed;
  top: 64px;
  left: 0;
  width: 18rem;
  height: calc(100vh - 64px);
  border-right: 1px solid #f0f0f2;
  overflow-y: auto;

  @media (max-width: 768px) {
    display: none;
  }

  h1 {
    padding: 1.5rem 2rem 1.5rem 1.5rem;
    color: ${colors.fontLightMuted};
    font-family: ${fontFamily.yuanti};
    font-size: 1rem;
    font-weight: normal;
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    display: block;
    padding: 0.75rem 1rem 0.75rem 1.5rem;
    color: ${colors.fontLight};
    font-size: 0.9rem;
  }

  .active {
    color: ${colors.fontBlue};
    font-weight: bold;
  }
`

const MenuList = ({ posts }) => (
  <ul>
    {posts.map((post) => (
      <li key={post.slug}>
        <Link
          to={`/column/${post.column.slug}/${post.slug}/`}
          activeClassName="active"
        >
          {post.title}
        </Link>
      </li>
    ))}
  </ul>
)

const Main = styled('main')`
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
`

const Article = styled('div')`
  flex: 1;
  margin: 0 3rem;
  padding: 2rem 0 3rem;
  max-width: 50rem;
  line-height: 1.5rem;
  @media (max-width: 768px) {
    margin: 0 2rem;
  }
  @media (max-width: 575px) {
    margin: 0 1.5rem;
  }

  img {
    width: 100%;
  }

  h1.title {
    margin-top: 0;
  }

  h1,
  h2,
  h3 {
    margin: 3rem 0 1.5rem;
  }

  p {
    margin: 0 0 1.5rem;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.3rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  h5 {
    font-size: 1.1rem;
  }

  pre {
    padding: 1rem !important;
    margin-bottom: 1.5rem;
    background-color: #f5f5f5;
    border-radius: 5px;
    font-size: 0.85rem;
    overflow: auto;
  }

  a {
    color: ${colors.fontBlue};
  }
`

// {
//   data: {
//     mdx: post,
//     allMdx: { nodes: posts },
//     dataJson: { title: columnTitle },
//   },
// }

const PostTemplate = ({ pageContext: { article, articles } }) => (
  <Layout light>
    <Header light doc position="fixed" />
    <Menu>
      <h1>{article.column.title}</h1>
      <MenuList posts={articles} />
    </Menu>
    <div
      css={css`
        margin: 64px 0 0 18rem;
        @media (max-width: 768px) {
          margin-left: 0;
        }
        flex: 1;
      `}
    >
      <Main>
        <Article>
          <h1 className="title">{article.title}</h1>
          <MarkdownRenderer md={article.body} />
        </Article>
        <Footer light />
      </Main>
    </div>
  </Layout>
)

export default PostTemplate
