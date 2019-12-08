import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.div`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const FooterText = styled.h3`
  color: lightgray;
`

const Footer = () => (
  <FooterWrapper>
    <FooterText>7350 W US 50</FooterText>
    <FooterText>SALIDA CO 81201</FooterText>
    <FooterText>719.539.6733</FooterText>
    <FooterText>HELLO@STAYAMIGO.COM</FooterText>
    <FooterText>LOBBY: 7:30AM-12PM 3PM-10PM</FooterText>
  </FooterWrapper>
)

export default Footer
