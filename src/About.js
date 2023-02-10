import React,{useEffect} from 'react'
import { GlobalContext } from './Context'
import HeroSection from './HeroSection';

const About = () => {
  const { AboutUpdate}= GlobalContext();
  useEffect(() =>AboutUpdate(), [])
 
  
  return(
    <>
  <HeroSection/>

  </>
  )
}

export default About