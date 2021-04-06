import React, { useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { fontFamily } from '../styles'
import { Link } from 'gatsby'
import Hamburger from './hamburger'
import logo from '../assets/svg/logo.svg'
import logoLight from '../assets/svg/logo-light.svg'
import githubIcon from '../assets/svg/github.svg'
import githubIconLight from '../assets/svg/github-light.svg'
import wechatIcon from '../assets/svg/wechat.svg'
import wechatIconLight from '../assets/svg/wechat-light.svg'
import zhihuIcon from '../assets/svg/zhihu.svg'
import zhihuIconLight from '../assets/svg/zhihu-light.svg'
import { colors } from '../styles'

const StyledHeader = styled('header')`
  -webkit-font-smoothing: subpixel-antialiased;
  position: ${(props) => props.position};
  z-index: 100;
  top: 0;
  background-color: ${(props) => (props.light ? 'white' : 'transparent')};
  color: ${(props) => (props.light ? colors.fontLight : 'white')};
  font-family: ${fontFamily.yuanti};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 0 ${(props) => (props.light ? '1.5rem' : '20px')};
  border-bottom: ${(props) => (props.light ? '1px solid #f0f0f2' : 'none')};

  nav {
    display: flex;
    align-items: center;
  }

  .icons {
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
      position: relative;
    }
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0 0.6rem;
  letter-spacing: 0.1rem;
  font-size: 1.1rem;
  font-weight: normal;

  &:hover {
    opacity: 80%;
  }

  &.brand {
    display: flex;
    padding-left: 0;
    align-items: center;
    font-size: 1.5rem;
    margin-right: ${(props) => props.margin};
    font-family: ${fontFamily.kaiti};
    font-weight: bold;
  }

  img {
    margin-right: 10px;
  }
`

const Icon = styled('img')`
  height: 32px;
  width: 32px;

  &:hover {
    opacity: 80%;
  }
`

const NavIcon = ({ src, alt, to }) => (
  <a
    href={to}
    css={css`
      display: flex;
      margin-left: 1rem;
      &:first-of-type {
        margin: 0;
      }
    `}
  >
    <Icon src={src} alt={alt} />
  </a>
)

const BurgerWrapper = styled('div')`
  position: absolute;
  z-index: 999;
  right: 20px;
  top: 16px;
  @media (min-width: 768px) {
    display: none;
  }
`

const Menu = styled('ul')`
  color: white;
  position: absolute;
  z-index: 998;
  right: 0;
  top: 0;
  padding: 3.2rem 0 1rem;
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.69);
  @media (min-width: 768px) {
    display: none;
  }

  &.close {
    display: none;
  }

  li {
    flex: 1;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  li:hover {
    background-color: rgba(99, 99, 99, 0.25);
  }
`

const Header = ({ position = 'static', light = false, doc = false }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <StyledHeader position={position} light={light}>
      <nav>
        <NavLink className="brand" to="/" margin={doc ? '10.7rem' : '2.4rem'}>
          <img
            css={css`
              height: 38px;
              width: 38px;
            `}
            src={light ? logoLight : logo}
            alt="logo"
          />
          结网集
        </NavLink>
        <div
          css={css`
            @media (max-width: 768px) {
              display: none;
            }
          `}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about/">About</NavLink>
          <NavLink to="/contact/">Contact</NavLink>
        </div>
        <BurgerWrapper>
          <Hamburger
            active={toggle}
            onClick={() => setToggle(!toggle)}
            color={light ? colors.fontLight : 'white'}
          />
        </BurgerWrapper>
        <Menu className={`${toggle ? '' : 'close'}`}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/author/">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact/">Contact</NavLink>
          </li>
          <li>
            <div
              css={css`
                display: flex;
              `}
            >
              <NavIcon src={wechatIcon} alt="微信公众号" to="/" />
              <NavIcon
                src={zhihuIcon}
                alt="知乎"
                to="https://www.zhihu.com/people/albertli063"
              />
              <NavIcon
                src={githubIcon}
                alt="github"
                to="https://github.com/lipd"
              />
            </div>
          </li>
        </Menu>
      </nav>
      <div className="icons">
        <NavIcon
          src={light ? wechatIconLight : wechatIcon}
          alt="微信公众号"
          to="/wx-mp"
        />
        <NavIcon
          src={light ? zhihuIconLight : zhihuIcon}
          alt="知乎"
          to="https://www.zhihu.com/people/albertli063"
        />
        <NavIcon
          src={light ? githubIconLight : githubIcon}
          alt="github"
          to="https://github.com/lipd"
        />
      </div>
    </StyledHeader>
  )
}

export default Header
