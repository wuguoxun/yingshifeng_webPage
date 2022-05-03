import React from 'react'
import './About.css'
import ME from '../../assets/me-about1.jpg'
import {FaAward} from 'react-icons/fa'
import {MdSchool} from 'react-icons/md'
import {AiOutlineVideoCamera} from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about__me"/>
          </div>
          
        </div>
        <div className="about__content">
            <div className="about__cards">
            <article className="about__card">
            <MdSchool className="about__icon" />
              <h5>San Jose State University</h5>
            </article>
            <article className="about__card">
            <FaAward className="about__icon" />
              <h5>Exhibitions 4</h5>
            </article>
            <article className="about__card">
            <AiOutlineVideoCamera className="about__icon" />
              <h5>1 years working Experience</h5>
            </article>
            </div>
            <p>
            Yingshi Feng is an artist raised in Guangzhou, China, and she moved to San Jose in the U.S. in 2010. Currently, she is pursuing her BA from San Jose State University, majoring in Studio Practice. As her artistic practice has grown, she has shifted to mixed media and digital creations from the traditional art form. She strives to tackle ideas of interdisciplinary artwork. Yingshi explores the personal and social implications of an increasingly digitized world through humor as an entry point to engage audiences. In 2018, Yingshi was in group exhibitions and presented her first interactive coding art piece in Gallery 5 at San Jose State University.
            </p>
        </div>
      </div>
    </section>
  )
}

export default About