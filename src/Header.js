import React ,{useState}from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components'
import {CgFormatJustify} from "react-icons/cg"
const Header = () => {
  const [para, setpara] = useState(false);
 

  return (
    <>
    <Headers >
  
          <div className='Logo'>
            <NavLink to='/' >Logo</NavLink>
            <div className="triple" >
            <CgFormatJustify onClick={()=>setpara(!para)}/>
            </div>
           
        </div>
       <Navbar para={para} />
       
    </Headers>
    </>
  )
}
const Headers = styled.header`

display:  flex;
 
   padding-top: 0rem;
   padding: .3rem;
  line-height: 3rem;
  background-color: #282a35;


.triple{
  background-color: #373a49;
  color:white;
  line-height: 0;
  margin: 5px;
  padding-right: .7rem;
  padding-left: .7rem;
  padding-top: .7rem;
  display: none;
}
  .Logo{
    
    width: 50%;
    display:  flex;

  justify-content: center;
  }
a{
   text-decoration: none;
   color: white;
 }
@media(max-width:768px){
  padding: 0rem;
    display: unset;
    .Logo{
       width: 100%;
      
      display: flex;
      justify-content: space-around;
    }
    .triple{
      display: block;
    }
}
`

export default Header