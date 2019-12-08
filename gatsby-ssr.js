/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"

const checkfrontKey = "checkfront-widget"

const scripts = [
  <script
    key={checkfrontKey}
    type="text/javascript"
    src="//stayamigo.checkfront.com/lib/interface--30.js"
  />,
]

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(scripts)
}
