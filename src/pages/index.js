import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { OldAmigoCSS } from "../styles/home-page"
import HeroNav from "../components/homepage/HeroNav"
import TextSlider from "../components/homepage/TextSlider"
import ActivityGallery from "../components/homepage/ActivityGallery"
import NewsletterForm from "../components/homepage/NewsletterForm"
import ContentBlock from "../components/homepage/ContentBlock"

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
    <ContentBlock />
    <NewsletterForm />
  </Layout>
)

export default IndexPage
