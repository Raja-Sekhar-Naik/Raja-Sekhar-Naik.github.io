import React, { useEffect } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import image1 from '../../assets/images/image1.jpeg'
import image2 from '../../assets/images/image2.jpeg'
import image3 from '../../assets/images/image3.jpeg'
import image4 from '../../assets/images/image4.jpeg'
import image7 from '../../assets/images/image7.jpeg'
import image8 from '../../assets/images/image8.jpeg'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setLetterClass('text-animate-hover')  
}, [])
  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'O', 'R', 'T', 'F', 'O', 'L', 'I', 'O']}
              idx={15}
            />
          </h1>
          <p>
            I create successfull responsive websites that are fast, easy to use,
            and built with best practices.
            <h4>Handling Projects:</h4>
            <ul>
              <li>On Twitter with Firebase</li>
              <li>On Disney+plus with Vedios Files</li>
              <li>On Spotify with Audio Files </li>
              <li>On Bonik with Cards</li>
              <li>On Travelling app</li>
            </ul>
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            For further/future/coming Projects please look at my Github
            Repository. I will add the new projects with different technologies
            which are related to the ReactJs Like Firebase, GraphQl, Material
            UI, Bootsrtrap, Styled components, Postman, Tubine, NextJs, VueJs
            and many with css frameworks.
          </p>
        </div>
        <div className='images'>
          <img className='image' src={image1} alt=''/>
          <img className='image' src={image2} alt=''/>
          <img className='image' src={image3} alt=''/>
          <img className='image' src={image4} alt=''/>
          <img className='image' src={image7} alt=''/>
          <img className='image' src={image8} alt=''/>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
