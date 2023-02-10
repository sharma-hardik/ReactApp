import styled from "styled-components";

export const Button = styled.button`
margin-top: .6rem;
 text-decoration:none;
 font-weight: 400;
 max-width:auto;
 background-color: #243abd;
 border-radius: .4rem;
background-color: #2439ff;
 color: rgb(255,255,255);
 padding: .8rem 1.4rem;
 border: none;
 text-transform: uppercase;
 text-align: center;
 cursor: pointer;
 transition: all 0.3s ease;
 -webkit-transition: all 0.3s ease 0s;
 -moz-transition:all 0.3s ease 0s ;
 -o-transition: all 0.3s ease 0s;
 &:hover,
 &:active{
  box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
  box-shadow: rgba(0,0,0,0.16) 0px 1px 4px;
  transform: scale(0.96);
 }

 a{
    text-decoration: none;
    color: rgb(255,255,255);
    font-size: 1.3rem;
 }
 
 `;