import React, { useEffect } from "react"
import Layout from "../components/layout"

const BookingPage = () => {

  useEffect(() => {
    if (window.CHECKFRONT) {
      new window.CHECKFRONT.Widget({
        host: "stayamigo.checkfront.com",
        target: "CHECKFRONT_WIDGET_01",
        category_id: "2",
        style: "color: 000; font-family: Arial",
        provider: "droplet",
      }).render()
    }
  }, [window && window.CHECKFRONT])

  return (
    <Layout>
      <div id="CHECKFRONT_WIDGET_01">
        <p id="CHECKFRONT_LOADER">Searching Availability...</p>
      </div>
    </Layout>
  )
}

export default BookingPage
