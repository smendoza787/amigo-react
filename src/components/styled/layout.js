import React from "react"
import styled from "styled-components"

const PaddedRedHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75vh;
  text-transform: uppercase;
  color: red;
`

// This is a big blog with centered red text
export const PaddedRedHeader = ({ title }) => (
  <PaddedRedHeaderWrapper>
    <h1>{title}</h1>
    <h2>↓</h2>
  </PaddedRedHeaderWrapper>
)

const DividedHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  text-transform: uppercase;

  h2 {
    color: red;
    margin: 0;
    font-size: 2.5rem;
  }

  .divider {
    height: 0;
    width: 50%;
    border-bottom: 2px solid black;
  }
`

// This is a smaller header with a black divider in between two h2's
export const DividedHeader = ({ left, right }) => (
  <DividedHeaderWrapper>
    <h2>{left}</h2>
    <div className="divider" />
    <h2>{right}</h2>
  </DividedHeaderWrapper>
)

export const Column = styled.div`
  font-size: 1.25rem;
  text-align: justify;
  width: 31%;
`

export const TripleColumn = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: space-between;
`
