import React,{useEffect} from 'react'

import { GlobalContext } from './Context'
import HeroSection from './HeroSection';

const Home = () => {
  const { HomeUpdate}= GlobalContext();
  useEffect(() =>HomeUpdate(), [])
 
  
  return(
    <>
  <HeroSection/>
 
  </>
  )
}

export default Home
