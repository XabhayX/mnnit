import React, { useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import ResourceTable from '../components/ResourceTable/ResourceTable';
import { DB } from '../FakeDB/FakeDB';
// import axios from 'axios';



const BranchResource = () => {

    // const [file, setFile] = useState(null);

    // const handleFileChange = (e) => {
    //   setFile(e.target.files[0]);
    // };
  
    // const UploadFileOnServer = async (e) => {
    //   e.preventDefault();
      
    //   if (!file) {
    //     console.log("Please select a file first");
    //     return;
    //   }
  
    //   const formData = new FormData();
    //   formData.append("file", file);  // Append the file to formData
  
    //   try {
    //     console.log("Trying to upload...")
    //     const response = await axios.post('http://localhost:3000/api/v1/users/uploadfile', formData);
    //     console.log("File Uploaded");
    //     console.log(response.data); // Log the response from the server
    //   } catch (error) {
    //     // console.error("Error uploading file1:", error.response ? error.response.data : error.message);
    //     // console.error("Error uploading file:", error);
    //   }
    // };

    // let branchName = 'Civil Engineering';

//   const CivilSubject = [
//     {
//         id: 1, title: 'Plumbing and Sanitation', 
//     }, 
//     {
//         id: 2, title: 'WasteWater Engineering'
//     }, 
//     {
//         id: 3, title: 'Solid Mechanics'
//     }, 
//     {
//         id: 4, title : 'Surveying'
//     }, 
//     {
//         id: 5, title: 'Concrete Technology'
//     }, 
//     {
//         id: 6, title: 'Structural Engineering'
//     }, 
//     {
//         id: 7, title: 'Structural Engineering'
//     }, 
//     {
//         id: 8, title: 'Highway and Traffic Engineering'
//     }, 
//     {
//         id: 9, title: 'Geotechnical Engineering'
//     }, 
//     { 
//         id: 10, title: 'Water Supply Engineering'
//     }, 
//     { 
//         id: 11, title: 'Pavement Engineering'
//     }
//   ]


const { branchParam } = useParams();

// console.log()
let branch;
console.log(branchParam )
if(branchParam === DB.branch) {
    branch = DB;
    console.log(branch) 
}


  return (
<>
 <div className='page-title sticky bg-sky-400 h-20 text-2xl flex flex-col z-20 justify-center font-bold  top-0 w-full opacity-90'><h2 style={{marginLeft: 50 }}>
    {branch.branch}
    </h2></div>


  <div className='flex flex-col dark:bg-gray-900 lg:grid lg:grid-cols-5 gap-6 p-6 bg-gray-100 text-gray-900 dark:text-gray-100 transition-backgroundColor duration-500'>

    {/* Subject Directory (side) */}
    <div   data-lenis-prevent 
    className='p-4 rounded-lg overflow-auto max-h-96 lg:max-h-[calc(100vh-200px)] bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100 transition-backgroundColor duration-500'>
      <ul className='space-y-2'>
        {branch.subjects.map((subject) => (
          <li
            key={subject.id}
            className='p-3 text-lg font-semibold border-b border-gray-400 dark:border-gray-600 transition-all duration-200 hover:bg-gray-500 hover:text-gray-100'
          >
              {/* {console.log(subject.id)} */}
            <Link 
            to={`${subject.id}`}
            // className='bg-red-700'
            // onClick={()=>{console.log("clicked and subject.id is ", subject.id)}}
            >
        
            {subject.title} 
            </Link> 
          </li>
        ))}
      </ul>
    </div>

    {/* Main Section */}
    <div className='flex flex-col p-6 rounded-lg dark:bg-gray-800 lg:col-span-4 space-y-6 bg-gray-200 text-gray-900 dark:text-gray-100 transition-backgroundColor duration-500'>

      {/* Search and File Upload Section */}
      <div className='flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0 p-4 rounded-md bg-gray-100 dark:bg-gray-700 transition-backgroundColor duration-500'>
        <input
          type='text'
          placeholder='Search...'
          className='flex-1 p-3 rounded-full bg-gray-200 dark:bg-gray-600 placeholder:text-gray-500 dark:placeholder:text-white dark:text-gray-100'
        />

        <form
          // onSubmit={UploadFileOnServer}
          className='flex items-center space-x-2'
        >
          <input
            type='file'
            name='profileimage'
            id='profileimage'
            // onChange={handleFileChange}
            className='p-2 rounded-md border border-gray-400 dark:bg-gray-900 dark:text-gray-100'
          />
          <button
            type='submit'
            className='p-2 px-4 font-semibold text-gray-100 bg-blue-500 dark:bg-blue-600 rounded-md'
          >
            Upload Now
          </button>
        </form>
      </div>

      {/* Resources Section */}
  <div 
  className='px-4 rounded-lg dark:bg-gray-900 bg-gray-100 h-fit min-h-48 text-gray-900 dark:text-gray-100 transition-backgroundColor duration-500'
>
  {/* Keep your wrapper styling, just swapping ul/li with a table now */}

<Outlet/>

</div>

    </div>
  </div>
</>


  )
}

export default BranchResource
