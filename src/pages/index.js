import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { OldAmigoCSS } from "../styles/home-page.js"
import HeroNav from "../components/homepage/HeroNav"

const IndexPage = () => (
  <Layout>
    {/* <OldAmigoCSS /> */}
    <SEO title="Home" />
    <HeroNav />
    <a class="Mobile--Secondary-Nav" href="#">
      Book Now <span>→</span>
    </a>
    <div class="Amigo--Welcome-TextSlider">
      <div id="Welcome-TextSlider-Content">
        <div id="gallery-arrow-prev" class="gallery-arrow">
          ←
        </div>
        <div class="TextSlider-Slide">
          <h2 id="Slide-Title">Welcome Amigo</h2>
          <h3 id="Slide-Body-Text">
            The Amigo Motor Lodge is a newly renovated boutique motel with
            60-year old bones. Modern furnishings meet minimalist design to
            create a space that is friendly, casual and above all, comfortable.
            The property is complete with a teepee, hot tub, sun room and much
            more as the property is a constant work in progress.
          </h3>
        </div>
        <div id="gallery-arrow-next" class="gallery-arrow">
          →
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
