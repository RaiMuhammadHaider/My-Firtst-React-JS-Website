import React, { createElement } from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import LayOut from './LayOut';
import AboutUs from './Components/aboutUs/AboutUs';
import ContactUs from './Components/contactUs/ContactUs';
import Home from './Components/home/Home';
import Footer from './Components/footer/Footer';
import User from './Components/user/User';
import GitHub, { GithubLoaderInfo } from './Components/GitHub/GitHub';
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element : <LayOut/>,
//     children:[
//       {
//         path:'',
//         element :<Home/>
//       },
//       {
//         path:'about',
//         element : <AboutUs/>
//       },
//       {
//         path : 'contact',
//         element: <ContactUs/>
//       },
    
//       {},
//     ]
//   }
// ])  // this code is valid but the easy one is also here
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<LayOut/>} >
      <Route path = '' element = {<Home/>}  />
      <Route path='about' element = {<AboutUs/>} />
      <Route path='contact' element = {<ContactUs/>} /> 
      {/* <Route path='contact/:ok' element = {<ContactUs/>} />  */}
      {/* <Route path='github' element = {<GitHub/>} /> */}
      <Route loader = {GithubLoaderInfo} path='github' element = {<GitHub/>} />
      {/* <Route path='admin/:adminID' element = {<User/>} /> */}
      {/* path = 'admin/:adminID ya basically syntax ha /: is k bad hum jo bi kuch likhty hn vo variable k through agy forward hota ha yani k dynamically data pass krny k liya hm isy use krrty hn 
      
      or jaha is hm us userData ko show krvana chaty hn us k liya ak mehtod ata ha jis ko hm khaty hn useParams is ko hm import krty hn 
      
      import {useParams} from  'react-router'
        is sy hm koi bi value inject kr sakty hn
      
      
      
      */}
      

    </Route>
  ) 
  // this was also a easy way to giving then routes
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
