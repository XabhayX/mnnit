import React, { use, useContext } from 'react'
import '../../utilityCSS/Navbar.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {toggleDarkMode} from '../../utility/toggleDarkMode.js'
import { UserContext } from '../../hooks/UserContext.js'

const Navbar = ()  => {

    const {user, setUser} = useContext(UserContext);
    console.log(user)
   
    


    const currentUser = {
        name: "abhay", 
        class:"12", 
        role: "admin"
    }
const guestUser = {
  name: "Guest", 
  class: "No Class", 
  role: "Student"
}

    function setAdmin(){
      if(user.name === "abhay") setUser(guestUser)
      else(setUser(currentUser))
    }
    
  return (
    <>
        
<nav className="container w-full min-w-full h-44 pt-5 flex dark:bg-slate-800 transition-backgroundColor duration-500 opacity-100">
       <div className="mnnitLogo h-32 w-96 z-10 relative "> <a href="#"><img src="https://academics.mnnit.ac.in/static/img/MNNIT-2.png" alt="mnnit_logo" title='MNNIT'/></a></div>
       <div className="mnnit text-base w-full " >
        <div className="mnnitName flex flex-col text-center justify-evenly h-full w-full  relative box-border"><h1 className='text-4xl ml-28'>MOTILAL NEHRU NATIONAL INSTITUTE OF TECHNOLOGY ALLAHABAD</h1>
            <h4>Office of The Dean(Academics) | <span className='text-black dark:text-white transition-backgroundColor duration-500 opacity-100'>
            Email: academics@mnnit.ac.in</span></h4>
            <div className='flex w-full h-14 z-10 relative box-border'>
                        <div className="list h-full absolute  right-0 bottom-0 box-border">
                            <ul className='h-full list-none flex justify-end box-border'>
                                <li className='flex'> <Link to="/" className='w-full py-4'>Home</Link> </li>
                                <li className='flex'><Link to ='/calender' className='w-full py-4'>Academic Calender</Link></li>
                                { user.role == "admin" &&
                                <li className='flex'><Link to ='/admin' className='w-full py-4'>Admin Panel</Link></li>
                                }

                        
                                <li
                                    onClick={toggleDarkMode}
                                    className="flex py-4 text-white rounded cursor-pointer"
                                    role="button"
                                    tabIndex="0">
                                    Dark Mode
                                    
                                </li>

                                  <li className="flex">
  {user.name == "Guest" && <Link to="/login" className='w-full py-4'>Login</Link>}
  {user.name != "Guest" && <Link to= "/profile" className='w-full py-4 text-green-400 text-ellipsis pl-3 pr-3'>
  {user.name.toUpperCase()}
  </Link>}
</li>
   <li
                                    onClick={()=>{setAdmin()}}
                                    className="flex py-4 text-white rounded cursor-pointer"
                                    role="button"
                                    tabIndex="0">
                                    Switch to Admin
                                </li>

                            </ul>
                        </div>
            </div>
        </div>
       </div>
    </nav>
    </>
  )
}

export default Navbar