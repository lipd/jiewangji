import React from 'react'
import ReactMarkdown from 'react-markdown'
import { atomOneDark as theme } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import SyntaxHighlighter from 'react-syntax-highlighter'

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter style={theme} language={language} children={value} />
    )
  },
}

const MarkdownRenderer = ({ md }) => {
  return <ReactMarkdown renderers={renderers} children={md} />
}

export default MarkdownRenderer
