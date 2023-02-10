import React from 'react'
import styled from 'styled-components'
import { GlobalContext } from './Context'
import { NavLink } from 'react-router-dom'
import { Button } from './Button'


const HeroSection = () => {
    const {heading,subheading,description,btntext,btnrender,image,bgimage,showhide} = GlobalContext();
    const mystyle={
        backgroundImage:'url('+bgimage+')',
    }

  return (
    <>
    <Wrapper>
       <div className="container grid grid-two-column" style={mystyle} >
            <div className="section-hero-data">
            <div>
                <p className='hero-top-data'>{heading} </p>
                <h1 className='hero-heading'>{subheading}</h1>
                <p className="hero-para">
                    {description}
                </p>
                <Button className="btn hireme-btn" style={{display:showhide}}>
                    <NavLink to={btnrender} >{btntext}</NavLink>
                </Button>
            </div>
            </div>
            <div className="section-hero-image">
                <picture>
                    <img src={image} alt="img" className='hero-img'/>
                </picture>
            </div>
        </div>
        </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
 .grid-two-column{
      display: grid;
      grid-template-columns: 50% 50%;
      height: 30rem;
      background-position:center ;
      background-size: cover;
      background-repeat: no-repeat;
     
      color: white;
      
}   
.section-hero-data{
   display: grid;
   place-items: center;
  padding: 2rem;
    border: 0px solid red;
    grid-column-start: 2;
    grid-column-end: 3;
  
}
.btn{
    max-width: 16rem;
}
.hero-img{
    width: 27rem;
    height: 22rem;
    border-radius: 1rem;

}
.hero-top-data{
    font-size: 2rem;
    font-weight: 100;
    margin-bottom: .4rem;
}
.section-hero-image{
    display: grid;
    place-items: center;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    
}
.hero-heading{
    margin-bottom: .4rem;
}
.hero-para{
    margin-top: .5rem;
    margin-bottom: .5rem;
}
@media (max-width:768px) {
    .grid-two-column{
      display: unset;
}   
.section-hero-data{
    width: 100%;
    height: 80vh;
    background-image:linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)),url("https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") ;
    background-position: center;
    background-size: cover;
}
.section-hero-image{
    display: none;
}
}




`

export default HeroSection
