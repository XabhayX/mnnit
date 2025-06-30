import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import {UserContext} from '../../hooks/UserContext.js'
import { useState } from "react";

const ContributionsTable = () => {

    const {user, setUser} = useContext(UserContext)
    const [contributions, setContribution] = useState([{}])

    useEffect(() => {
        console.log("gafgs")
      const contributionsFn = async ()=>{

        const contributionsArray = await axios.post('/api/users/get-contribution', {regNo : user.regNo})
        console.log(contributionsArray)
        setContribution(contributionsArray.data)
      }

      contributionsFn();
    }, [])
    

  return (
    <div className="col-span-3 dark:bg-slate-700">
        <div data-lenis-prevent className='h-96 overflow-auto shadow-md sm:rounded-lg  dark:bg-slate-800  transition-backgroundColor duration-500 opacity-100'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs w text-gray-700 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>Title</th>
            {/* <th scope='col' className='px-6 py-3'>Branch</th> */}
            <th scope='col' className='px-6 py-3'>Subject</th>
            <th scope='col' className='px-6 py-3'>Link</th>
          </tr>
        </thead>
        <tbody>
          {contributions.length > 0 ? (
            contributions.map((item, index) => (
              <tr
                key={index}
                className='bg-gray-100 dark:bg-gray-800 border-b dark:border-gray-500 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition-backgroundColor duration-500'
              >
                <td className='px-6 py-4 max-w-11 overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-gray-900  dark:text-white'>
                  {item.title}
                </td>
                {/* <td className='px-6 py-4'>{item.branch}</td> */}
                <td className='px-6 py-4 max-w-5 overflow-hidden text-ellipsis whitespace-nowrap'>{item.subject}</td>
                <td className='px-6 py-4'>
                  <a
                    href={item.link}
                    className='text-blue-500 underline hover:text-blue-700'
                    target='_blank'
                    rel='noreferrer'
                  >
                    View
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center px-6 py-4 text-gray-600 dark:text-gray-400">
                No contributions found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ContributionsTable;
