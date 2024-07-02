import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY </h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, ipsum autem iure tenetur odio hic asperiores totam, ratione dicta corporis veritatis saepe animi maxime voluptas recusandae amet magnam dolorum ullam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam assumenda totam aut adipisci officiis pariatur ullam earum deleniti inventore esse animi odio alias exercitationem vero nihil voluptas, minus veniam sint.</p>
        </div>
    </div>
  )
}

export default About