import React, { useState } from "react"

const slideTuples = [
  ["WELCOME AMIGO", "The Amigo Motor Lodge is a newly renovated boutique motel with 60-year old bones. Modern furnishings meet minimalist design to create a space that is friendly, casual and above all, comfortable. The property is complete with a teepee, hot tub, sun room and much more as the property is a constant work in progress."],
  ["CASUAL COMFORT", "At the Amigo we strive to surprise you with premium amenities at a reasonable price. From our mattresses to the lighting fixtures to the bath products in each room, we've tried to elevate the motel experience. Here is an assortment of the amenities you will find during your stay: TUFT AND NEEDLE MATTRESSES, MALIN AND GOETZ PRODUCTS, LED TVs, CONWAY ELECTRIC POWER OUTLETS, BALTIC BIRCH BED FRAMES, ACCENT PILLOWS FROM THE CITIZENRY, WATER-SAVING TOILETS AND SHOWERS, CONCRETE COUNTERTOPS, UNIQUE WALL ACCENTS, ART AND MUCH MORE..."]
]

const handlePrev = (curr, last) => (curr > 0 ? curr - 1 : last)
const handleNext = (curr, last) => (curr + 1 > last ? 0 : curr + 1)

const TextSlider = () => {
  const [slide, setSlide] = useState(0)

  return (
    <div class="Amigo--Welcome-TextSlider">
      <div id="Welcome-TextSlider-Content">
        <a
          onClick={() => setSlide(handlePrev(slide, slideTuples.length - 1))}
          id="gallery-arrow-prev"
          class="gallery-arrow"
        >
          ←
        </a>
        <div class="TextSlider-Slide">
          <h2 id="Slide-Title">{slideTuples[slide][0]}</h2>
          <h3 id="Slide-Body-Text">{slideTuples[slide][1]}</h3>
        </div>
        <a
          onClick={() => setSlide(handleNext(slide, slideTuples.length - 1))}
          id="gallery-arrow-next"
          class="gallery-arrow"
        >
          →
        </a>
      </div>
    </div>
  )
}

export default TextSlider
