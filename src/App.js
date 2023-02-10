import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import { ThemeProvider } from 'styled-components'
import { AppProvider } from './Context'
import { GlobalStyle } from './GlobalStyle'


const App = () => {
  
  const theme ={
    media:{
      mobile:"768px",
      teb:"998px"
    }
  }

  return (
   
    <>
   
    <AppProvider>
    <GlobalStyle/>
  <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/Home' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Service' element={<Service/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </ThemeProvider>
    </AppProvider>
   
    </>
  )
}

export default App
