import{ useEffect, useState } from 'react'
import {
     faCss3,
   faGithub,
   faHtml5,
   faJsSquare,
   faReact,
   faVuejs,
 } from '@fortawesome/free-brands-svg-icons'
 import Loader from 'react-loaders'
 import AnimatedLetters from '../AnimatedLetters'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import './index.scss'
import React from 'react'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
  setLetterClass('text-animate-hover')  
}, [])
  return (
    <> 
     <div className="container about-page">
         <div className="text-zone">
           <h1>
             <AnimatedLetters
               letterClass={letterClass}
               strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
               idx={15}
             />
           </h1>
           <p>
             I'm very ambitious front-end developer looking for a role in
             established IT company with the opportunity to work with the latest
             technologies on challenging and diverse projects.
           </p>
           <p align="LEFT">
             I'm quietly confident, naturally curious, and perpetually working on
             improving my chops one design problem at a time.                               

             If I need to define myself in one sentence that would be a family
            person, A Frontend-UI developer at Infosys company
             , a sports fanatic, interested in designing different types of layouts.
          </p>
           <p>
           I create successful responsive websites that are fast, easy to use, 
           and built with best practices. The main area of my expertise is front-end 
           development, HTML, CSS, JS, ReactJS building small and medium web apps, 
           features, animations, and coding interactive layouts.
          </p>
          <p>
            My Skillset:- Html5, Css3, JavaScript, ReactJs, VueJs, MongoDB, NodeJs.
          </p>
       </div>

       <div className="stage-cube-cont">
           <div className="cubespinner">
             <div className="face1">
               <FontAwesomeIcon icon={faVuejs} color="#4DB6AC" />
             </div>
             <div className="face2">
               <FontAwesomeIcon icon={faGithub} color="#F06529" />
             </div>
             <div className="face3">
               <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
             </div>
             <div className="face4">
               <FontAwesomeIcon icon={faHtml5} color="#5ED4F4" />
             </div>
             <div className="face5">
               <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
             </div>
             <div className="face6">
               <FontAwesomeIcon icon={faReact} color="#0288D1" />
             </div>
           </div>
         </div>

      </div>
      <Loader type="pacman" />

    </>
  )
}

export default About
