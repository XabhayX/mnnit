import axios from 'axios'
import '../utilityCSS/Home.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { getNotification } from '../api/notification/notification.api.js'

const Home = () => {

  const [notifications, setNotifications] = useState([{}])
  const [importantNotifications, setImportantNotifications] = useState([])

  useEffect(() => {
    const getNotifications = async () => {
      try {
        const notificationData = await getNotification({})
        .then((notificationData)=>{
        

        const unfiltered = notificationData.data?.filter(
          (n) => n.important != true 
        )
        setNotifications(unfiltered || []);


        const filtered = notificationData.data?.filter(
          (n) => n.important == true
        )
        setImportantNotifications(filtered || []);

        })
      } catch (error) {
        console.log(error);
      }
    };
    getNotifications();
  }, []);


  return (
        <>
<img src="../mnnit.webp"  alt=""  />

<div className='page-title sticky bg-sky-400 h-20 text-2xl flex flex-col z-20 justify-center font-bold  top-0 w-full opacity-90'><h2 style={{marginLeft: 50 }}>Home</h2></div>

<div className="notify bg-white text-black dark:text-white transition-backgroundColor duration-500 opacity-100 dark:bg-gray-700">

  <div className="notifications ">


    <h3 className='mb-10'>NOTIFICATIONS</h3>
    <div className="notification">
      <ul>
        
{notifications.map((notification) => {
  const date = notification.updatedAt
    ? notification.updatedAt.split("T")[0]
    : "Unknown Date";

  return (
    <li key={notification._id || 0} className="text-black dark:bg-gray-700 dark:text-black rounded-md">
      <div className="notificationContent">{notification.content}</div>
      <div className="notificationDate text-sm text-gray-500">{date}</div>
    </li>
  );
})}


        
      </ul>
  
    </div>


  </div>

  <div className="aboutMnnit ">
        <div className="pb-8 w-3xl rounded-lg ">
          {importantNotifications.length > 0 ? (
            <ul className="space-y-3">
              {importantNotifications.map((notification) => {
                const date = notification.updatedAt
                  ? notification.updatedAt.split("T")[0]
                  : "Unknown Date";

                return (
                  <li
                    key={notification._id}
className="bg-red-100/80 dark:bg-red-400/20 p-2 pl-4 rounded-b-sm shadow-lg border border-red-400 backdrop-blur-sm ring-1 ring-red-300/40 text-black dark:text-white"
                  >
                    <div className="font-semibold">{notification.content}</div>
                    <div className="text-sm text-red-700 dark:text-red-200">{date}</div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-gray-600 dark:text-gray-300">No urgent notifications.</p>
          )}
        </div>

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