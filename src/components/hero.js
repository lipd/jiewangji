import React from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Header from './header'
import { fontFamily, colors } from './styles'

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 60vh;
`

const TextBox = styled('div')`
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 4.2rem;
    font-family: ${fontFamily.kaiti};
  }

  p {
    margin-top: 1rem;
    font-size: 1.4rem;
    font-weight: bold;
    font-family: ${fontFamily.kaiti};
    color: ${colors.white_normal};
  }
`

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "nodes.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <Header position="absolute" />
      <TextBox>
        <h1>结网集</h1>
        <p>我的学习足迹与一些胡思乱想</p>
      </TextBox>
    </ImageBackground>
  )
}

export default Hero
