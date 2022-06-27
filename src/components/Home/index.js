 import {useState } from 'react'
 import {useEffect } from 'react'
 import { Link } from 'react-router-dom'
 import Loader from 'react-loaders'
 import AnimatedLetters from '../AnimatedLetters'
 import LogoTitle from '../../assets/images/logo-s.png'
 import './index.scss';
import React from 'react'
import Logo from './Logo'


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  
   const nameArray = ['e', 'k', 'h', 'a', 'r']
    const jobArray = [
    'w',
    'e',
    'b',
     ' ',
     'd',
     'e',
     'v',
      'e',
     'l',
    'o',
      'p',
    'e',
     'r',
    '.',
    ]

    useEffect(() => {
       setLetterClass('text-animate-hover')  
   }, [])


  return (
    <>
    
    <div className="container home-page">
         <div className="text-zone">
         <h1>
            <span className={letterClass}>H</span>
             <span className={`${letterClass} _12`}>i,</span>
             <br />
             <span className={`${letterClass} _13`}>I</span>
             <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="Developer" />
        
          <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
             <br />
             <AnimatedLetters
               letterClass={letterClass}
              strArray={jobArray}
               idx={15}
             />
          </h1>
          <h2>Frontend Developer / JavaScript Expert</h2>
          <h2>Interested in the entire frontend spectrum and working on ambitious projects
             with positive people.</h2>
             
          <Link to="/contact" className="flat-button">
             CONTACT ME
           </Link>
           <Logo />
          
         
        </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Home
