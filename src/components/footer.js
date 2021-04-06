import React from 'react'
import styled from '@emotion/styled'
import { fontFamily, colors } from './styles'
import heartIcon from './assets/svg/heart.svg'

const FooterBox = styled('footer')`
  margin: ${(props) => (props.light ? '0 3rem' : '0')};
  border-top: ${(props) => (props.light ? '1px solid #f0f0f2' : 'none')};
  background-color: ${(props) => (props.light ? 'transparency' : '#2a2a2a')};
  color: ${(props) => (props.light ? '#666' : colors.white_normal)};
  .top {
    padding: ${(props) => (props.light ? '1rem 0 1rem' : '3rem 0')};
    line-height: 1.5rem;
    font-size: ${(props) => (props.light ? '1.1rem' : '1.2rem')};
    font-family: ${fontFamily.kaiti};
    text-align: center;
  }

  .bottom {
    text-align: center;
    margin: 0 2rem;
    padding: ${(props) => (props.light ? '0 0 1.5rem' : '2rem 0')};
    border-top: ${(props) => (props.light ? 'none' : '1px solid #3c3c3c')};
    line-height: 1.5rem;
  }
`

const Icon = styled('img')`
  height: 1rem;
`

export default function Footer({ light }) {
  return (
    <FooterBox light={light}>
      <div className="top">
        <p>古人有言，曰：“临渊羡鱼，不如退而结网。” -《汉书·董仲舒传》 </p>
      </div>
      <div className="bottom">
        <p>
          © COPYRIGHT 2020 · Made With <Icon src={heartIcon} alt="heart" /> by
          Lipd
        </p>
        <p>
          <a href="http://beian.miit.gov.cn">备案号：蜀ICP备20013417</a>
        </p>
      </div>
    </FooterBox>
  )
}
