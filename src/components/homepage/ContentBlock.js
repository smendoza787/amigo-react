import React from "react"
import styled from "styled-components"

const ContentBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fafaea;
  padding: 15rem;

  p {
    margin: 0;
  }
`

const ContentBlockTitle = styled.h1`
  color: red;
`

const ContentBlockContent = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
`

const ContentBlock = () => (
  <ContentBlockWrapper>
    <ContentBlockTitle>YOUR HOME AWAY FROM HOME</ContentBlockTitle>
    <ContentBlockContent>
      At the Amigo, we want to be a place to rest your hat after a long day of
      adventure in the mountains, on the river or just soaking in the hot
      springs. We created our motel to be a place you actually want to spend
      time during your travels to connect with friends, loved ones or just your
      own thoughts. From the uniquely decorated rooms to the common spaces, no
      stone has been left unturned on our ongoing, now year-long renovation of
      the property. We still have lots of work to do, but it's been a fun
      process turning our concept into reality. We look forward to hosting you
      at the Amigo!
    </ContentBlockContent>
    <ContentBlockContent>- Philip and Kaitlyn</ContentBlockContent>
  </ContentBlockWrapper>
)

export default ContentBlock
