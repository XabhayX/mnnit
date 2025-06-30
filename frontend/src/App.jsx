import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import ThemeContext from './hooks/ThemeContext.js'
import { BrowserRouter, createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
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
import { Toaster } from 'react-hot-toast'
import ContributionsTable from './components/ResourceTable/ContributionTable.jsx'
import DisclaimerModal from './utility/disclaimer.jsx'
import AuthRoute from './routes/Authroute/AuthRoute.jsx'
import DeviceBlockRoute from './utility/deviceDimension.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Navbar />
      <Home />
      <Footer />
    </>
  }
  ,
  {
    path: 'home',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
    ]
  }
  ,
  {
    path: 'calender',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Calender />
      },
    ]
  },
  {
    path: 'login',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Login />
      }
    ]
  },
  {
    path: 'admin',
    element: <>
      <AdminRoute>
        <Navbar />
        <AdminPanel />
      </AdminRoute>
    </>
  },
  {
    path: 'resources',
    element: <AuthRoute>
      <Layout />
    </AuthRoute>,

    children: [
      {
        element: <SideLayout />,
        children: [{
          index: true,                     //index: true, removes the need of explicitly providing the path for the render of the child
          element: <Resources />
        }]
      },
      {
        path: ':branchParam',
        element: <BranchResource />,
        children: [
          {
            path: ':subjectParam',
            // index: true,
            element: <ResourceTable />,
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
    path: 'profile',
    element:
      <AuthRoute>
        <Layout />
      </AuthRoute>,
    children: [
      {
        element: <SideLayout />,
        children: [{
          index: true,                     //index: true, removes the need of explicitly providing the path for the render of the child
          element: <Profile />
        }]
      },
    ]
  },
  {
    path: 'contributions',
    element: <AuthRoute>
      <Layout />
    </AuthRoute>,
    children: [
      {
        element: <SideLayout />,
        children: [{
          index: true,                     //index: true, removes the need of explicitly providing the path for the render of the child
          element: <ContributionsTable />
        }]
      }
    ]
  }



])



const App = () => {


  useEffect(() => {
    smoothScroll()
  }, [])


  const guestUser = {
    name: "Guest",
    class: "No Class",
    role: "guest",
    contributions: [],
    email: "email",
    regNo: "0",
  }

  const [user, setUser] = useState(guestUser)



  //  console.log(user)
  return (
    // <div id="smooth-wrapper">
    // <div id="smooth-content">
    <>
      <DisclaimerModal />
      <DeviceBlockRoute >
      <Toaster position="top-center" reverseOrder={false} />
      <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
      </DeviceBlockRoute>
    </>
    //  </div>
    //  </div>

  )
}

export default App