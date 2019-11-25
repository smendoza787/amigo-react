import React, { useState } from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeroNavWrapper = styled.div`
  position: relative;
  width: 100%;
  max-height: 70vh;
  z-index: 2;

  img {
    max-height: 70vh;
  }
`

const RedBar = styled.div`
  height: 100px;
  background-color: #fe0c07;
  position: absolute;
  bottom: -50px;
  left: calc(50% - 550px);
  width: 100%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const RebBarLink = styled(Link)`
  font-size: 1.5rem;
  color: white;
  font-family: "Abel", sans-serif;
  text-decoration: none;
`

const HeroNav = () => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp(filter: { original: { src: { regex: "/home-page/" } } }) {
        nodes {
          fluid {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
          }
        }
      }
    }
  `)
  const [currImage, setCurrImage] = useState(allImageSharp.nodes[0])

  return (
    <HeroNavWrapper>
      <Img fluid={currImage.fluid} />
      <RedBar>
        <RebBarLink
          onMouseEnter={() => setCurrImage(allImageSharp.nodes[1])}
          to="/about"
        >
          About
        </RebBarLink>
        <RebBarLink
          onMouseEnter={() => setCurrImage(allImageSharp.nodes[2])}
          to="/contact"
        >
          Contact
        </RebBarLink>
        <RebBarLink
          onMouseEnter={() => setCurrImage(allImageSharp.nodes[3])}
          to="/policies"
        >
          Policies
        </RebBarLink>
        <RebBarLink
          onMouseEnter={() => setCurrImage(allImageSharp.nodes[4])}
          to="/gallery"
        >
          More →
        </RebBarLink>
      </RedBar>
    </HeroNavWrapper>
  )
}

export default HeroNav
