import  { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.grid-two-column{
    background-image:linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)),url("https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") ;
}
@media (max-width:768px){
.Logo,nav{
    background-color: #282a35;

width: 100%;
}
}
`