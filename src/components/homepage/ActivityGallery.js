import React from "react"
import CactusBgSVG from "./CactusBgSVG"

const ActivityGallery = () => (
  <div class="Amigo--ImageGallery-Container">
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
      <CactusBgSVG />
    </div>
  </div>
)

export default ActivityGallery
