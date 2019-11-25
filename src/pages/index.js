import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { OldAmigoCSS } from "../styles/home-page.js"
import HeroNav from "../components/homepage/HeroNav"
import TextSlider from "../components/homepage/TextSlider"

const IndexPage = () => (
  <Layout>
    <OldAmigoCSS />
    <SEO title="Home" />
    <HeroNav />
    <a class="Mobile--Secondary-Nav" href="#">
      Book Now <span>→</span>
    </a>
    <TextSlider />
    <div class="Amigo--ImageGallery-Container">
      <div class="Amigo--ImageGallery-Header">
        <div class="ImageGallery-Header-Node">
          <p>STAY AWHILE</p>
        </div>
        <div class="Amigo--ImageGallery-Header-Line"></div>
        <div class="ImageGallery-Header-Node">
          <p>THINGS TO DO</p>
        </div>
      </div>
      <div class="Amigo--ImageGallery">
        <div class="Amigo--ImageGallery-Row">
          <div class="Amigo--ImageGallery-ImageWrapper">
            <img
              class="Amigo--ImageGallery-Image"
              src="https://i.imgur.com/waM4ak9.png"
            />
            <div class="Amigo--ImageGallery-Image-Caption">
              <h3>
                IN TOWN <span>→</span>
              </h3>
              <p>
                Downtown Salida is about a mile away from the motel. You can
                obviously reach it by car, but it’s an easy bike ride down the
                Monarch Spur trail too. If you plan on drinking, consider taking
                a ride with Mountain Taxi or sometimes you can catch a random
                Uber. For larger groups, check out Colorado Adventure Tours.
              </p>
            </div>
          </div>
        </div>
        <div class="Amigo--ImageGallery-Row">
          <div class="Amigo--ImageGallery-ImageWrapper">
            <img
              class="Amigo--ImageGallery-Image"
              src="https://res.cloudinary.com/brandoncreative/image/upload/v1572212697/holly-mandarich-c2aLW24QqGc-unsplash_copy_dzcwit.jpg"
            />
            <div class="Amigo--ImageGallery-Image-Caption">
              <h3>
                OUTDOORS <span>→</span>
              </h3>
              <p>
                We have more 14ers outside our door than just about any spot in
                Colorado. Try Shavano, Princeton, Yale, Harvard, Elbert and many
                more. 14ers.com is a great site to explore for routes and
                trailheads. There are also tons of more mild (and often more
                scenic) hikes like the Greens Creek, Lost Lake and Waterdog
                Lakes.
              </p>
            </div>
          </div>
        </div>
        <div class="Amigo--ImageGallery-Row">
          <div class="Amigo--ImageGallery-ImageWrapper">
            <img
              class="Amigo--ImageGallery-Image"
              src="https://res.cloudinary.com/brandoncreative/image/upload/v1572215829/IMG_4404_a6myao_copy_ffkir9.jpg"
            />
            <div class="Amigo--ImageGallery-Image-Caption">
              <h3>
                FOOD + DRINK <span>→</span>
              </h3>
              <p>
                While we have coffee, tea, fruit and yogurt in the lobby
                starting at 7:30, sometimes you need a little more to get you
                going. For that we suggest Seasons Cafe or Shallots.
              </p>
            </div>
          </div>
        </div>
        <div class="Amigo--ImageGallery-Row">
          <div class="Amigo--ImageGallery-ImageWrapper">
            <img
              class="Amigo--ImageGallery-Image"
              src="https://res.cloudinary.com/brandoncreative/image/upload/v1572212067/DJR_8273_dbqeox.jpg"
            />
            <div class="Amigo--ImageGallery-Image-Caption">
              <h3>
                DAY TRIPS <span>→</span>
              </h3>
              <p>
                Sometimes you just don't want to leave the comfort of your
                heated car seats, and for that we suggest a trip up Cottonwood
                Pass. Or if you have decent car clearance (or you got the
                extended coverage on your rental) drive to the old mining town
                of St Elmo or check out the Continental Divide up Marshall Pass.
              </p>
            </div>
          </div>
        </div>
      </div>

      <svg
        id="cactus-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 734.07 480.87"
      >
        <title>Asset 9</title>
        <g id="Layer_2" data-name="Layer 2">
          <g id="ART">
            <polygon
              class="cls-1"
              points="379.74 152.33 379.74 152.33 379.74 152.33 379.74 152.33"
            />
            <path
              class="cls-1"
              d="M425.7,97.37c15.4-23.81,31.18-49,42.42-58,1.87-1.49,2.57-4.47,1.44-6.12s-4-1.78-5.84-.3c-12.76,10.17-28.47,35.15-45,60.4l-1.19,1.81A321.69,321.69,0,0,1,390,131c5.11-15.09,11.94-35.66,14.9-45.26,5.07-16.42,7.24-25.83,7.33-26.22a4,4,0,0,0-3.16-4.78A5,5,0,0,0,404,58.37c0,.08-2.19,9.45-7.15,25.43s-20.93,62.57-21.09,62.92a4.2,4.2,0,0,0,4,5.61,4.58,4.58,0,0,0,3-1.25c.23-.07,24-24.05,41.82-51.89Z"
            />
            <path
              class="cls-1"
              d="M571.21,103.66h0c-1.84-.92-4.7.12-5.88,2.14-5.2,8.88-10.87,12.92-15.28,14.07,1.15-2.4,2.31-4.81,3.47-7.21,3.77-6.87,6.87-14.19,7-14.5.88-2.08-.09-4.62-2-5.24s-4.63.73-5.63,2.79l-6.77,14.08-.24.45c-1.67,3.08-5.75,10.6-9.78,11.39a3.33,3.33,0,0,1-.89,0c-1.1-.07-1.16-.13-1.16-1.19a16,16,0,0,1,1.77-6.06c2.14-4.79,3.87-7.86,3.88-7.89a5.52,5.52,0,0,0,.33-.7,15.49,15.49,0,0,0,1.14-5.39c0-4.53-3.42-7.45-7.83-6.59-5.66,1.12-9.34,8.23-15.84,21.06-5.22,8.55-9.57,12.66-11.53,12.88a1.4,1.4,0,0,1-.78-.8c-.46-1.11-.11-2.94,1.26-5.84l1.82-3.83c1.3-2.72,3-6.32,4.8-10.09,1-2.14.15-4.76-1.78-5.37s-4.62.8-5.68,2.87a6.75,6.75,0,0,0-1.8-.84c-4.92-1.43-12.13,2.25-17.46,8.71a46,46,0,0,0-6.61,10.26c-4.26,7.75-9.47,13.05-15.13,14.14-4,.77-6.58-1-6.66-4.24-.08-3.09,1.51-7.08,4.08-10.21,1.53-1.87,2.93-2.88,4.15-3.12.57-.11.61-.06.61.79a6.39,6.39,0,0,1-.38,2,3.7,3.7,0,0,0,2.62,4.9c2.05.31,4.69-1.5,5.41-3.7a16.47,16.47,0,0,0,.85-4.91c0-5.32-3.94-8.6-9.11-7.6-3.47.68-7.24,3.21-10.23,6.82a30.17,30.17,0,0,0-5.62,10.66c-5.23,8.44-9.61,12.35-11.57,12.48a1.6,1.6,0,0,1-.78-.85c-.46-1.13-.11-2.94,1.26-5.77.4-.82,1-2.12,1.83-3.74,1.29-2.66,3-6.19,4.8-9.89,1-2.1.14-4.75-1.79-5.44s-4.62.59-5.68,2.61a7.09,7.09,0,0,0-1.79-.94c-4.93-1.69-12.14,1.49-17.46,7.48-2.66,3-6.54,7.82-8.08,13.61-2.57,9.69,2.11,12.85,4,13.59a8.73,8.73,0,0,0,4.21.48c3.52-.42,7.57-2.83,11.29-6.65a8.64,8.64,0,0,0,5.31,4l.33.05a9.84,9.84,0,0,0,2.76-.06c4-.64,8.1-3.74,12.21-8.7,2.5,4,7.45,6,13.41,4.84h0c5.06-1,9.84-4,14.08-8.28a6.35,6.35,0,0,0,3.61,2.95,8.76,8.76,0,0,0,4.21.1c3.52-.73,7.57-3.45,11.28-7.51a8.09,8.09,0,0,0,5.32,3.67l.33,0a10.37,10.37,0,0,0,2.76-.2C512,135.06,518,128.75,524,119.16a4.08,4.08,0,0,0,.54-.83c.06-.1.11-.2.16-.3h0l.06-.09c.06-.1.09-.2.15-.31,2.36-4.64,5-9.66,6.78-12.65-.78,1.5-2.06,4-3.53,7.35-.61,1.36-2.59,5.78-2.59,9.87,0,4.71,2.93,7.86,7.52,8.15a12.56,12.56,0,0,0,3.37-.28Q521.66,161,506.89,192.25c-1,2.14-.14,4.75,1.79,5.36a4.09,4.09,0,0,0,2,.08,6,6,0,0,0,3.77-3.06q15.65-33,31.31-65.75a18.23,18.23,0,0,0,3.47-.3c7-1.26,15.95-6.8,23.29-19.22C573.66,107.36,573,104.59,571.21,103.66ZM427.72,136.5c-4.18,5.83-8.14,7.3-8.8,7a8.73,8.73,0,0,1,.34-4.24c1-3.79,3.6-7.08,5.91-9.71,5.62-6.42,8.36-4.26,9.08-4A118.15,118.15,0,0,1,427.72,136.5Zm67.21-12.43c-4.19,6.13-8.14,7.94-8.8,7.74,0,0-.41-1.36.34-4.27a16.68,16.68,0,0,1,.74-2.16,4.16,4.16,0,0,0,.3-.73,35.67,35.67,0,0,1,4.86-7.3c5.62-6.84,8.36-4.82,9.08-4.6A127.6,127.6,0,0,1,494.93,124.07Z"
            />
            <path
              class="cls-1"
              d="M622.71,22.51A4.5,4.5,0,0,0,617,24.39c-12.49,24.08-25,48.9-37.46,74.22a4.11,4.11,0,0,0,1.79,5.52,4.4,4.4,0,0,0,2,.25h0a5.24,5.24,0,0,0,3.77-2.7C599.52,76.57,612,52,624.49,28.24A4.46,4.46,0,0,0,622.71,22.51Z"
            />
            <path
              class="cls-1"
              d="M575.7,109.64a7.15,7.15,0,0,0-4.8,3.38c-1.46,2.42-1.73,5.44-.61,7.38a5,5,0,0,0,4.79,2.27h0A7.38,7.38,0,0,0,580,119.2c1.43-2.35,1.67-5.25.55-7.21A5,5,0,0,0,575.7,109.64Z"
            />
            <path
              class="cls-1"
              d="M467.1,85.36a1.8,1.8,0,0,0-.52,2.21,1.32,1.32,0,0,0,1.31.48,1.9,1.9,0,0,0,.79-.37C473.29,84,479,74.83,484.91,65.2c.14-.23.29-.46.43-.7,3-4.81,6.41-9.55,9.22-13.23-2.1,5.65-4.74,12.81-5.94,16.36-2.08,6.13-3.32,9.75-3.32,9.75a1.36,1.36,0,0,0,.74,1.74,1.9,1.9,0,0,0,2-.91c.08-.13,7.65-12.87,9.87-16.48,2.44-3.95,5-7.79,7.25-11-2,5.35-4.27,11.49-5.2,14.62-1.83,6.16-3.31,13.27-3.32,13.34a1.28,1.28,0,0,0,1.18,1.58,2.12,2.12,0,0,0,1.82-1.56c0-.07,1.46-7,3.25-13.05s8.82-24,8.89-24.22a1.39,1.39,0,0,0-.59-1.77h0a1.84,1.84,0,0,0-2,.68c-.07.09-7.41,9.77-13.82,20.17-.64,1-1.7,2.8-2.9,4.8,2.71-7.62,7.88-21.36,7.94-21.52a1.38,1.38,0,0,0-.56-1.73,1.79,1.79,0,0,0-1.92.57,197.8,197.8,0,0,0-15.1,20.65l-.43.69C476.85,72.93,471.16,82.11,467.1,85.36Z"
            />
            <path
              class="cls-1"
              d="M507.81,73.1a3.92,3.92,0,0,1,.16-1.6,26.08,26.08,0,0,1,2-4.7c.19-.37.38-.75.56-1.12a1.41,1.41,0,0,0-.59-2,1.94,1.94,0,0,0-2.09,1l-.55,1.11A28.22,28.22,0,0,0,505,71.31c-.94,3.66.73,4.62,1.41,4.82a3,3,0,0,0,1.44,0,8,8,0,0,0,3.86-2.55,2.92,2.92,0,0,0,2.11,1.12,4.36,4.36,0,0,0,1-.08,7.68,7.68,0,0,0,4.19-3,4.42,4.42,0,0,0,4.74,1.56h0a8.73,8.73,0,0,0,3.26-1.46.93.93,0,0,0,.38.23,1.55,1.55,0,0,0,.71,0,2.12,2.12,0,0,0,1.36-1.09c.55-1.17,1.11-2.33,1.66-3.49l.08-.15c.68-1.25,1.37-2.53,1.85-3.23,1.49-2.15,3.27-3,3.81-2.83.05,0,0,0,0,.33a13.31,13.31,0,0,1-1,2.53,20.42,20.42,0,0,0-1,2.35c-.76,2.36.2,3.66,1.27,4a3.18,3.18,0,0,0,1.41,0c1.58-.31,3.38-1.7,5-3.52a3.45,3.45,0,0,0,3.79,1.7,7.32,7.32,0,0,0,4.42-3.08H551a5.86,5.86,0,0,0,.94-.08,7.15,7.15,0,0,0,4.76-3.74,1.47,1.47,0,0,0-.49-2h0a1.83,1.83,0,0,0-2.11.85,3.42,3.42,0,0,1-1.93,1.8,6.86,6.86,0,0,0,0-4.89,3.14,3.14,0,0,0-2.49-1.69,4.06,4.06,0,0,0-1.25,0c-2.54.45-5.35,3.18-6.24,6.62-1.62,2.91-3.44,4.51-4.57,4.89a2,2,0,0,1,.09-.44,18.47,18.47,0,0,1,.82-1.9,16.77,16.77,0,0,0,1.26-3.24c.4-1.67-.24-3.11-1.59-3.52a4.3,4.3,0,0,0-2.85.32q5.34-11.22,10.7-22.38a1.42,1.42,0,0,0-.65-1.95,1.89,1.89,0,0,0-2.07,1q-7.29,15.21-14.58,30.55c-1.45,2.37-3.17,4-5,4.35-1.43.29-2.37-.33-2.4-1.5a6.16,6.16,0,0,1,1.47-3.71,3,3,0,0,1,1.5-1.14c.21,0,.22,0,.22.29a2.35,2.35,0,0,1-.14.73,1.34,1.34,0,0,0,.95,1.76,2,2,0,0,0,2-1.34,5.9,5.9,0,0,0,.31-1.77,2.62,2.62,0,0,0-3.29-2.74,6.94,6.94,0,0,0-3.69,2.52,11.12,11.12,0,0,0-2,3.93,1.32,1.32,0,0,0-.16.25c-2,3.83-3.48,4.21-3.78,4.22a.6.6,0,0,1-.36-.08,53.73,53.73,0,0,1,2.79-6.93,2,2,0,0,0,.11-.32l0-.12a1.34,1.34,0,0,0-.83-1.83,2,2,0,0,0-2,1.24,49,49,0,0,1-3.66,6.81C509.32,72.51,508,73.16,507.81,73.1Zm40.68-14.26a1.23,1.23,0,0,1,.38,0,.61.61,0,0,1,.57.38,2.74,2.74,0,0,1,.09,1.64,1.35,1.35,0,0,0-1.81-.92,2,2,0,0,0-1.2,2,4.39,4.39,0,0,0,1.5,2.47,3.13,3.13,0,0,1-1.73,1.1c-.77.14-1.26-.38-1.26-1.52h0C545,61.26,547.15,59.08,548.49,58.84Z"
            />
            <path
              class="cls-1"
              d="M179.91,333.1a2,2,0,0,0-2-2A16.93,16.93,0,0,1,161,314.19a2,2,0,0,0-2-2,1.62,1.62,0,0,1-.62,0,2,2,0,0,0-2,2,16.93,16.93,0,0,1-16.9,16.91,2,2,0,0,0-2,2,1.63,1.63,0,0,0,0,.31,1.53,1.53,0,0,0,0,.3,2,2,0,0,0,2,2,16.93,16.93,0,0,1,16.9,16.91,2,2,0,0,0,2,2,1.62,1.62,0,0,1,.62,0,2,2,0,0,0,2-2,16.93,16.93,0,0,1,16.9-16.91,2,2,0,0,0,2-2,1.53,1.53,0,0,0,0-.3A1.63,1.63,0,0,0,179.91,333.1ZM158.7,344.39a21,21,0,0,0-11-11,21,21,0,0,0,11-11,21.08,21.08,0,0,0,11,11A21,21,0,0,0,158.7,344.39Z"
            />
            <path
              class="cls-1"
              d="M118.49,279.57a2,2,0,0,0-2-2,16.93,16.93,0,0,1-16.91-16.9,2,2,0,0,0-2-2l-.3,0a1.63,1.63,0,0,0-.31,0,2,2,0,0,0-2,2,16.93,16.93,0,0,1-16.91,16.9,2,2,0,0,0-2,2,1.62,1.62,0,0,1,0,.62,2,2,0,0,0,2,2A16.93,16.93,0,0,1,95,299.09a2,2,0,0,0,2,2,1.63,1.63,0,0,0,.31,0l.3,0a2,2,0,0,0,2-2,16.93,16.93,0,0,1,16.91-16.9,2,2,0,0,0,2-2,1.62,1.62,0,0,1,0-.62ZM97.28,290.86a21,21,0,0,0-11-11,21.08,21.08,0,0,0,11-11,21,21,0,0,0,11,11A21,21,0,0,0,97.28,290.86Z"
            />
            <path
              class="cls-1"
              d="M538,263.27a20.93,20.93,0,0,1-20.91-20.91,2,2,0,0,1,4,0A16.93,16.93,0,0,0,538,259.27a2,2,0,0,1,0,4Z"
            />
            <path
              class="cls-1"
              d="M499.61,263.27a2,2,0,0,1,0-4,16.93,16.93,0,0,0,16.91-16.91,2,2,0,0,1,4,0A20.93,20.93,0,0,1,499.61,263.27Z"
            />
            <path
              class="cls-1"
              d="M518.52,282.79a2,2,0,0,1-2-2,16.92,16.92,0,0,0-16.91-16.91,2,2,0,0,1,0-4,20.93,20.93,0,0,1,20.91,20.91A2,2,0,0,1,518.52,282.79Z"
            />
            <path
              class="cls-1"
              d="M519.13,282.79a2,2,0,0,1-2-2A20.93,20.93,0,0,1,538,259.88a2,2,0,0,1,0,4,16.93,16.93,0,0,0-16.91,16.91A2,2,0,0,1,519.13,282.79Z"
            />
            <path
              class="cls-1"
              d="M442.6,303.37a18.34,18.34,0,0,1-18.32-18.32,2,2,0,1,1,4,0,14.33,14.33,0,0,0,14.32,14.32,2,2,0,0,1,0,4Z"
            />
            <path
              class="cls-1"
              d="M409.43,303.37a2,2,0,1,1,0-4,14.34,14.34,0,0,0,14.32-14.32,2,2,0,1,1,4,0A18.34,18.34,0,0,1,409.43,303.37Z"
            />
            <path
              class="cls-1"
              d="M425.75,320.23a2,2,0,0,1-2-2,14.35,14.35,0,0,0-14.32-14.33,2,2,0,1,1,0-4,18.35,18.35,0,0,1,18.32,18.33A2,2,0,0,1,425.75,320.23Z"
            />
            <path
              class="cls-1"
              d="M426.28,320.23a2,2,0,0,1-2-2A18.35,18.35,0,0,1,442.6,299.9a2,2,0,0,1,0,4,14.34,14.34,0,0,0-14.32,14.33A2,2,0,0,1,426.28,320.23Z"
            />
            <path
              class="cls-1"
              d="M342.44,414.07a2.12,2.12,0,0,0-2.14-1.71H294.35a2,2,0,0,0-2,2.34,2.08,2.08,0,0,0,2.08,1.66h46A2,2,0,0,0,342.44,414.07Z"
            />
            <path
              class="cls-1"
              d="M732.07,412.36H605.43a2,2,0,0,0,0,4H732.07a2,2,0,0,0,0-4Z"
            />
            <path
              class="cls-1"
              d="M182.94,412.36h-67a2,2,0,1,0,0,4h67a2,2,0,0,0,0-4Z"
            />
            <path
              class="cls-1"
              d="M96.87,414a2.08,2.08,0,0,0-2.08-1.66H2c-1.75,0-3,2.24-1,4H94.9A2,2,0,0,0,96.87,414Z"
            />
            <path
              class="cls-1"
              d="M349,382.69H338a2,2,0,0,0,0,4H349a2,2,0,0,0,0-4Z"
            />
            <path
              class="cls-1"
              d="M180.51,382.69H98.94a2,2,0,0,0,0,4h81.57a2,2,0,1,0,0-4Z"
            />
            <path
              class="cls-1"
              d="M77.91,382.69H28.58a2,2,0,1,0,0,4H77.91a2,2,0,1,0,0-4Z"
            />
            <path
              class="cls-1"
              d="M430.28,352.62H369.75a2,2,0,0,0,0,4h60.53a2,2,0,0,0,0-4Z"
            />
            <path
              class="cls-1"
              d="M629,352.62H568.46a2,2,0,0,0,0,4H629a2,2,0,0,0,0-4Z"
            />
            <path
              class="cls-1"
              d="M336.71,243.59a18.36,18.36,0,0,0-13.29,0c-7.94,3-13.27,11-13.27,20a122.63,122.63,0,0,1-5.95,37.18c-5.81,17.51-18.6,39.7-46.59,46.35V89.35c0-.58,0-1.15-.06-1.72V0H217.79V89.16c0,.06,0,.13,0,.19V262.07c-37.67-29.71-41.49-93.35-41.53-94,0-9-5.33-17-13.27-20a18.46,18.46,0,0,0-13.29,0c-7.94,3-13.27,11-13.27,20,0,94.83,61.87,131.22,81.36,140.3v172a.51.51,0,0,0,.5.5.5.5,0,0,0,.5-.5h37.83a.51.51,0,0,0,.5.5.5.5,0,0,0,.5-.5V388.3c15.59-1.05,38-5.93,57-23.09C338.07,344,350,309.79,350,263.56,350,254.59,344.65,246.56,336.71,243.59Z"
            />
          </g>
        </g>
      </svg>
    </div>
  </Layout>
)

export default IndexPage
