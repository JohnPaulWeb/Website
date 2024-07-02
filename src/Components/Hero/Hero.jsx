import React from 'react'
import './Hero.css'
import dark_arow from '../../assets/dark-arow.avif'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education in this school</h1>
        <p>Our cutting edge curriculum is designed to empower students with the knowledge skills, and experiences</p>
        <button className='btn'>Explore more <img src="{dark-arow}" alt=""></img></button>
      </div>
    </div>
  )
}

export default Hero