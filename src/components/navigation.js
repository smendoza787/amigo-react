import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: center;
`

const NavigationInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 1rem 0;
`

const LogoWrapper = styled.div`
  width: 30%;

  div {
    width: 200px;
  }
`

const NavLinks = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-end;
`

const NavLink = styled(Link)`
  font-family: "Oswald", sans-serif;
  font-size: 1.5rem;
  margin-right: 2.2rem;
  text-decoration: none;
  color: black;
  letter-spacing: 1.5px;

  &:first-of-type {
    color: red;
  }
`

const Navigation = () => {
  const { placeholderImage } = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "amigo-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <NavigationWrapper>
      <NavigationInnerWrapper>
        <LogoWrapper>
          <Link>
            <Img fluid={placeholderImage.childImageSharp.fluid} />
          </Link>
        </LogoWrapper>
        <NavLinks>
          <NavLink to="/book">BOOK A ROOM</NavLink>
          <NavLink to="/explore">EXPLORE</NavLink>
          <NavLink to="/journal">JOURNAL</NavLink>
          <NavLink to="/gallery">MORE</NavLink>
        </NavLinks>
      </NavigationInnerWrapper>
    </NavigationWrapper>
  )
}

export default Navigation

// MORE Menu >>>>>

/* <div>
      <a href=""> GALLERY</a>
    </div>
    <div>
      <a href=""> WHAT TO EXPECT</a>
    </div>
    <div>
      <a href=""> GROUPS + EVENTS</a>
    </div>
    <div>
      <a href=""> CONTACT US</a>
    </div>
    <div>
      <a href=""> ABOUT US</a>
    </div>
    <div>
      <a href=""> POLICIES</a>
    </div>
    <div>
      <a href=""> GIVING BACK</a>
    </div>
    <div>
      <a href=""> CONSERVATION</a>
    </div>
    <div>
      <a href=""> GIFT CERTIFICATES</a>
    </div> */
