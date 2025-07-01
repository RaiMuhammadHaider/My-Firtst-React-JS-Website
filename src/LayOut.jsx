import React from 'react'
import Header from './Components/header/Header'
import Footer from './Components/footer/Footer'
import { Outlet } from 'react-router' // Outlet says i will dynamically pass the thing for example in any website the header and the footer remain same but the between the contant change in this conditon the { Outlet } give is provided by the react-router-dom says i will make sure the upper compoment will be same lower component will be the same but the middle will dynamically change


// in other words where you use Outlet you can change dynamically
const LayOut = () => {
  return (
    <>
    <Header/>
    <Outlet/> 
    {/*  mean outlet will be change upper and lower will be the same if you want to use at bottom it will change only bottom */}
    <Footer/>
    
    </>
  )
}

export default LayOut