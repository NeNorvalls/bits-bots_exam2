import React, { useState } from 'react'
import './ImageSlider.scss'

import image1 from '../../images/life_is_strange.jpg'
import image2 from '../../images/BioShock Infinite.jpg'
import image3 from '../../images/Divinity_ Original Sin 2.jpg'
import image4 from '../../images/Grand Theft Auto V.jpg'
import image5 from '../../images/Monster Hunter_World.jpg'
import image6 from '../../images/The Elder Scrolls V_ Skyrim.jpg'
import image7 from '../../images/Human Resource Machine.jpg'
import image8 from '../../images/Civilization VI.jpg'
import image9 from '../../images/Minecraft.jpg'
import image10 from '../../images/Limbo.png'
import image11 from '../../images/Kerbal Space Program.jpg'
import image12 from '../../images/Mortal Kombat 11.jpg'

function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  ]

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1,
    )
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1,
    )
  }

  return (
    <div className="slider-container">
      <div className="slider-container__slide">
        <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      </div>
      <div className="slider-container__button-container">
        <button className="slider-container__prev-button" onClick={prevSlide}>
          Previous
        </button>
        <button className="slider-container__next-button" onClick={nextSlide}>
          Next
        </button>
      </div>
    </div>
  )
}

export default ImageSlider
