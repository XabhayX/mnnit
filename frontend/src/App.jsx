import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import ThemeContext from './hooks/ThemeContext.js'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
// import './App.css'
import { UserContext } from './hooks/UserContext.js'
import Layout from './components/Layout/Layout.jsx'
import Home from './pages/Home.jsx'
import smoothScroll from './utility/smoothScroll.js'
import Calender from './pages/Calender.jsx'
import Login from './pages/Login.jsx'



const router = createBrowserRouter([
  {
  path: '/', 
  element: <>
  <Navbar/> 
  <Home/>
  <Footer/>
  </>
}
, 
{
  path:'home',
  element: <Layout/>,
  children: [
    {index: true,
    element: <Home/>
    }, 
  ]
}
, 
{
  path:'calender',
  element: <Layout/>,
  children: [
    {index: true,
    element: <Calender/>
    }, 
  ]
}, 
{
  path: 'login',
  element: <Layout/>,
  children: [
    {
      index: true, 
      element: <Login/>
    }
  ]
}

])

// const App = () => {
// const [theme, setTheme] = useState('light')
//   return (
//     <ThemeContext.Provider value = {{theme, setTheme}}  >
//       <RouterProvider router={router}/>
//     </ThemeContext.Provider >
//   )
// }





const App = () => {

  
  useEffect(() => {
    smoothScroll()
  }, [])
  

const use = {
  name: "Guest", 
  class: "No Class"
}

const [user, setUser] = useState(use)
//  console.log(user)
  return (  
  // <div id="smooth-wrapper">
    // <div id="smooth-content">
      <UserContext.Provider value= {{user, setUser}}>
        <RouterProvider router={router}/>
      </UserContext.Provider>
    //  </div>
  //  </div>
    
  )
}

export default App