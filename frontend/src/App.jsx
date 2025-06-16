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
import AdminPanel from './pages/AdminPanel.jsx'
import AdminRoute from './routes/AdminRoute/adminRoute.jsx'
import Card from './components/Card/Card.jsx'
import Resources from './pages/Resources.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Profile from './pages/Profile.jsx'
import SideLayout from './components/Layout/SideLayout.jsx'
import BranchResource from './pages/BranchResouces.jsx'
import ResourceTable from './components/ResourceTable/ResourceTable.jsx'



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
}, 
{ 
  path: 'admin', 
  element:<>
  <AdminRoute>
    <Navbar/>
    <AdminPanel/>
  </AdminRoute>
  </> 
}, 
{
  path:'resources',
  element: <Layout/>,
   children: [
    {
    element: <SideLayout/>, 
    children: [{
      index: true,                     //index: true, removes the need of explicitly providing the path for the render of the child
      element: <Resources/>}]
    }, 
    {
      path: ':branchParam', 
      element: <BranchResource/>, 
      children: [
        {
          path: ':subjectParam',
          // index: true,
          element: <ResourceTable/> , 
    }
      ]
    }, 
    // {
    //   path:':branchParam/:subjectParam', 
    //   element: <ResourceTable/>
    // }
    
  ]
},
{
  path:'profile',
  element: <Layout/>,
  children: [
    {
    element: <SideLayout/>, 
    children: [{
      index: true,                     //index: true, removes the need of explicitly providing the path for the render of the child
      element: <Profile/>}]
    }, 
  ]
}, 



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
  

const guestUser = {
  name: "Guest", 
  class: "No Class", 
  role: "Student"
}

const [user, setUser] = useState(guestUser)



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