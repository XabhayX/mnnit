import React from 'react'
import '../utilityCSS/Home.css'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
        <>
<img src="../mnnit.png" alt=""  />

<div className='page-title sticky bg-sky-400 h-20 text-2xl flex flex-col z-20 justify-center font-bold  top-0 w-full opacity-90'><h2 style={{marginLeft: 50 }}>Home</h2></div>

<div className="notify bg-white text-black dark:text-white transition-backgroundColor duration-500 opacity-100 dark:bg-gray-700">

  <div className="notifications ">


    <h3 className='mb-10'>NOTIFICATIONS</h3>
    {/* <div className="notification"> */}
      {/* <ul> */}
        
        {/* {jokes.map((joke, index) => (
          <li key={index} className=' text-black dark:text-dark rounded-md'>
            <div className="notificationContent">{joke}</div>
            <div className="notificationDate">{addNotificationTime.getDate()}/{addNotificationTime.getMonth()}/{addNotificationTime.getFullYear()%100}</div>
            <div className="notificationOpen"> + </div>
          </li>
        ))} */}

        
      {/* </ul> */}
  
    {/* </div> */}
  </div>

  <div className="aboutMnnit ">



    <h3 className=''>ABOUT MNNIT</h3>
    <p className="first-letter:text-3xl text-xl">
    Motilal Nehru National Institute Of Technology, Allahabad was formerly Motilal Nehru Regional Engineering College, Allahabad . It is an institute with total commitment to quality and excellence in academic pursuits, is among one of the leading institutes in INDIA and was established in year 1961 as a joint enterprise of Govt. of India and Govt. of U.P. in accordance with the scheme of establishment of REC. However with effect from June 26th of 2002 the college becam lorem100e deemed university and is now known as Motilal Nehru National Institute of technology.
    </p>
    <p className="text-xl mt-5">
    The foundation stone of the college was laid by the first Prime Minister of India, Pt. Jawahar Lal Nehru on the 3rd of may, 1961 on a site spreading over 222 acres on the banks of the river Ganga. The main building of college was inaugurated by another illustrious son of India, Prime Minister Sri Lal Bahadur Shastri on 18th of April, 1965.
    </p>
    <p className="text-xl mt-5">
    The students are extensively exposed to cross-cultural environment as candidates from various other countries such as Sri Lanka, Nepal, Bangladesh, Bhutan, Mauritius, Malaysia, Iran, Yemen, Iraq, Palestine and Thailand also join MNNIT for various undergraduate and post-graduate programs.
    </p>
    <p className="text-xl mt-5">
    The students are extensively exposed to cross-cultural environment as candidates from various other countries such as Sri Lanka, Nepal, Bangladesh, Bhutan, Mauritius, Malaysia, Iran, Yemen, Iraq, Palestine and Thailand also join MNNIT for various undergraduate and post-graduate programs.
    </p>
    <p className="text-xl mt-5">
    The students are extensively exposed to cross-cultural environment as candidates from various other countries such as Sri Lanka, Nepal, Bangladesh, Bhutan, Mauritius, Malaysia, Iran, Yemen, Iraq, Palestine and Thailand also join MNNIT for various undergraduate and post-graduate programs.
    </p>
    <p className="text-xl mt-5">
      MNNIT is a fully residential institution with eight hostels for boys and two for girls.
    </p>
    <hr className="w-full mt-10 mb-5" />
  </div>
</div>


    </>
  )
}

export default Home