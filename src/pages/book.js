import React, { useEffect } from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const CheckfrontWidgetWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const BookingPage = () => {
  useEffect(() => {
    if (typeof window !== `undefined` && window.CHECKFRONT) {
      new window.CHECKFRONT.Widget({
        host: "stayamigo.checkfront.com",
        target: "CHECKFRONT_WIDGET_01",
        category_id: "2",
        style: "color: 000; font-family: Arial",
        provider: "droplet",
      }).render()
    }
  }, [typeof window !== `undefined` && window.CHECKFRONT])

  return (
    <Layout>
      <CheckfrontWidgetWrapper id="CHECKFRONT_WIDGET_01">
        <p id="CHECKFRONT_LOADER">Searching Availability...</p>
      </CheckfrontWidgetWrapper>
    </Layout>
  )
}

export default BookingPage
