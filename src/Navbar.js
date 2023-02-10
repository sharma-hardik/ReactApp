import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
const Navbar = ({para}) => {
 const list=["Home","About","Service","Contact"];
  return (
    <>
    <Nav>
      <ul  className={para?"menu-link":"none-menu-link"}>
      {
        list.map((cur,i)=>{
           return <li key = {i}><NavLink to={"/"+cur} >{cur}</NavLink></li>
        })
      }
      </ul>
    </Nav>
    </>
  )
}
const Nav = styled.nav`
width: 50%;

ul {
  
 list-style: none;
 display: flex;
 justify-content: space-around;
 li a{
   text-decoration: none;
   padding-left: 12px;
   padding-right: 12px;
 }
} 
ul li:hover{
 background-color: orange;
}
@media(max-width:768px){
width: 100%;

.menu-link{
  display:block;
  transition: all 3s linear;
}
.none-menu-link{
  display:none;

}

ul{
  display: unset;
  text-align: center;
  
}  


}
`

export default Navbar
