import React from "react"
import styled from "styled-components"

const NewsletterFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const SignupButton = styled.button`
  border: none;
  background-color: #fafaea;
  color: red;
`

const BlockWrapper = styled.div`
  background-color: #fafaea;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SmallGreyText = styled.p`
  font-size: 0.5rem;
  color: lightgray;
`

const Header = styled.h2``

const NewsletterInput = styled.input`
  background-color: #fafaea;
  padding: 1rem;
  border: none;
  border-bottom: 2.5px solid red;
  margin-bottom: 1rem;
`

const saveNewsletterEmail = e => {
  e.preventDefault()
  alert("wadup")
}

const NewsletterForm = () => (
  <BlockWrapper>
    <NewsletterFormWrapper onSubmit={saveNewsletterEmail}>
      <Header>LET'S BE FRIENDS</Header>
      <NewsletterInput type="email" placeholder="Email Address" />
      <SignupButton>SIGN UP →</SignupButton>
      <SmallGreyText>We respect your privacy.</SmallGreyText>
    </NewsletterFormWrapper>
  </BlockWrapper>
)

export default NewsletterForm
