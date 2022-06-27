import React, { useEffect } from 'react'
import { useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import './index.scss'
import{ useState } from 'react'
import image21 from '../../assets/images/image21.jpeg'
import image22 from '../../assets/images/image22.jpeg'


const Contact = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setLetterClass('text-animate-hover')  
}, [])
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_4xjl65r',
        'template_9hja5uc',
        e.target,
        'tGrjk41tUpJTX84ek'
      )
      .then(
        (result) => {
          console.log(result.text)
           alert('Message successfully sent!')
          
        },
        (error) => {
          console.log(error.text)
           alert('200 emailjs are completed or mail to :-mrajasekharnaik.17.cse@anits.edu.in')
        }
      )
      e.target.reset()
  }

  return (
    <>
    <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in Mern Stack or Frontend opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
      </div>
      <div className='contact-images'>
          <img className='image' src={image22} alt=''/>
          <img className='image' src={image21} alt=''/> 
          <h2>Raja Sekhar Naik -Frontend Developer at Infosys-7416412298</h2>
              
        </div>
      </div>
      <Loader type="pacman" />
     </>
  
  )
}

export default Contact