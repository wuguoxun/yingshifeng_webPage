import React from 'react'
import './Portfolio.css'
import Img6 from '../../assets/6.png'
import Img1 from '../../assets/1.png'
import Img2 from '../../assets/2.png'
import Img3 from '../../assets/3.png'
import Img4 from '../../assets/4.png'
import Img5 from '../../assets/5.png'
import Img7 from '../../assets/7.png'
import Img8 from '../../assets/8.png'
import Img9 from '../../assets/9.png'

const data=[
  {
    id: 1,
    image:Img9,
    url:'https://www.youtube.com/watch?v=LuelZM8HFdM&t=2s'
  },
  {
    id: 2,
    image:Img8,
    url:'https://www.youtube.com/watch?v=bhZCJoX42Ew'
  },
  {
    id: 3,
    image:Img7,
    url:'https://www.youtube.com/watch?v=ESo6wEMuDR4&t=48s'
  },
  {
    id: 4,
    image:Img1,
    url:'https://youtu.be/jf5w4CwuCzg'
  },
  {
    id: 5,
    image:Img2,
    url:'https://youtu.be/cj2Ar2aigCA'
  },
  {
    id: 6,
    image:Img3,
    url:'https://youtu.be/SHU7U8XixSI'
  },
  {
    id: 7,
    image:Img4,
    url:'https://youtu.be/7eryO3mDvnE'
  },
  {
    id: 8,
    image:Img5,
    url:'https://youtu.be/aYpQRaFjMfU'
  },
  {
    id: 9,
    image:Img6,
    url:'https://youtu.be/i1R0DOSQlJ8'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
        <h5>My Work</h5>
      <h2>Portfolio</h2>

    <div className="container portfolio__container">
      {data.map(({id,image,url}) => {
        return(
          <article key={id} className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={image} alt=""/>
        </div>
        <div className="portfolio__item-cta">
        <a href={url} className="btn" target="_blank">Play</a>
        </div>
      </article>
        )
      })
      }
    </div>

    </section>
  )
}

export default Portfolio