import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

const SideLayout = () => {
  return (
    <div className='dark:bg-gray-700 grid grid-cols-4'>
    <Sidebar/>
    <Outlet/>
    </div>
  )
}

export default SideLayout