import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { OldAmigoCSS } from "../styles/home-page.js"
import HeroNav from "../components/homepage/HeroNav"
import TextSlider from "../components/homepage/TextSlider"
import ActivityGallery from "../components/homepage/ActivityGallery"

const IndexPage = () => (
  <Layout>
    <OldAmigoCSS />
    <SEO title="Home" />
    <HeroNav />
    <a class="Mobile--Secondary-Nav" href="#">
      Book Now <span>→</span>
    </a>
    <TextSlider />
    <ActivityGallery />
  </Layout>
)

export default IndexPage
