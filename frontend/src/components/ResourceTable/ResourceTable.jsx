import React from 'react'
import { useParams } from 'react-router-dom'
import { DB } from '../../FakeDB/FakeDB';

const ResourceTable = () => {
  const { branchParam, subjectParam } = useParams();
  // console.log(subjectParam, branchParam)

  let subject; 
  DB.subjects.forEach((subjectFE)=>{
    // console.log(subjectFE)
    if(subjectParam == subjectFE.id) {subject = subjectFE; console.log(subject)}
  } )


  return (
      <div data-lenis-prevent className='h-96 my-5 overflow-auto shadow-md sm:rounded-lg'>
    <table className='w-full text-sm text-left rtl:text-right  text-gray-500 dark:text-gray-400'>
      <thead className='text-xs text-gray-700 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400'>
        <tr>
          <th scope='col' className='px-6 py-3'>
            Topic
          </th>
          <th scope='col' className='px-6 py-3'>
            Uploaded By
          </th>
          {/* You can add more columns here if you need */}
        </tr>
      </thead>
      <tbody>
        {subject.topics.map((item, index) => (
          <tr
            key={index}
            className='bg-gray-100 dark:bg-gray-800 border-b dark:border-gray-500 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition-backgroundColor duration-500'
          >
            <th
              scope='row'
              className='px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-gray-100'
            >
              <a
                href='https://google.com'
                className='text-blue-500 dark:text-blue-400 font-semibold'
              >
                {item.title}
              </a>
            </th>
            <td className='px-6 py-4'>{item.uploadedBy}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default ResourceTable