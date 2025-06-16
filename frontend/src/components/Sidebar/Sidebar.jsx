import React from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {

  const SidebarTopics = [
    {
      title: "Profile", 
      link: '/profile'
    }, 
    {
      title: "Resources", 
      link: '/resources'                   // this represents an absolute path
      // link: 'resources'                     //  this represents a child path
    }, 
    { 
      title: 'Contributions', 
      link: '/contributions'
    }
  ]

  return (
<nav className=' relative flex-auto text-xl  transition-backgroundColor duration-500 opacity-100 dark:bg-slate-900 border border-black rounded p-0 m-0'>
  <ul className='w-full h-full bg-slate-100  transition-backgroundColor duration-500 opacity-100 dark:bg-slate-900'>
{
  SidebarTopics.map((sideBarTopic, index)=>(
      <li key={index} className='p-6 pr-2 pl-7 relative text-sky-500 border-b border-black transition-all duration-200 hover:bg-slate-200 dark:hover:bg-zinc-800'>
        <Link to = {sideBarTopic.link} >
                {sideBarTopic.title}
        </Link>
    </li>
  ) )
}

    <li className='p-6 pr-2 pl-7 relative text-sky-500 border-b border-black transition-all duration-200 hover:bg-slate-200 dark:hover:bg-zinc-800 w-full'>
      <button
        className='w-full text-left'
        onClick={() => {
          localStorage.removeItem('allAboutUser')
          localStorage.removeItem('accessToken')
          localStorage.removeItem('refreshToken')

          navigate('/')
          window.location.reload()
        }}
      >
        Logout
      </button>
    </li>
  </ul>
</nav>
  )
}

export default Sidebar