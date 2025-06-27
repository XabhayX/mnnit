import { useState, useEffect, useContext } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../hooks/UserContext';

const BranchResource = () => {
  
  const {user, setUser} = useContext(UserContext);  
  const [selectedSubject, setSelectedSubject] = useState('');
  const { branchParam } = useParams();


  let departmentId = branchParam;
  const [subjects, getSubjects] = useState([]);

  useEffect(() => {
    async function send() {
      try {
        const gatheredSubjects = await axios.post('/api/resources/get-subjects', { departmentId });
        getSubjects(gatheredSubjects.data);
        // console.log(gatheredSubjects.data);
      } catch (error) {
        console.error('Error fetching subjects:', error);
      }
    }

    send();
  }, []);

  const [newSubject, setNewSubject] = useState({
    subjectID: '',
    subjectName: ''
  });

  const handleSubjectInputChange = (e) => {
    const { name, value } = e.target;
    setNewSubject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddSubject = (e) => {
    e.preventDefault();

    if (!newSubject.subjectID || !newSubject.subjectName)
      return alert('Subject title and id required.');

    const uploadSubjects = async () => {
      if (!departmentId) {
        console.log('Incomplete Parameters');
        console.alert("Incomplete Parameters")
      } else {
        const formEntryData = new FormData(e.target);
        let formData = {};
        for (let [key, value] of formEntryData.entries()) {
          formData[key] = value;
        }

        const newformData = { ...formData, departmentId: departmentId };
        console.log(newformData, ' is submitted.');

        await axios.post('/api/resources/create-subjects', newformData).then(() => {
          document.querySelector('[name="subjectName"]').value = '';
          document.querySelector('[name="subjectID"]').value = '';
        });
      }
    };

    uploadSubjects();
    setNewSubject({
      subjectID: '',
      subjectName: ''
    });
  };

  const toTitleCase = (departmentId) =>
    departmentId
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');


const [isUploadModalOpen, setUploadModalOpen] = useState(false);
const [uploadForm, setUploadForm] = useState({
  title: '',
  resourceFile: null
});

const toggleUploadModal = () => setUploadModalOpen(prev => !prev);

const handleUploadChange = (e) => {
  const { name, value } = e.target;
  setUploadForm(prev => ({ ...prev, [name]: value }));
};

const handleUploadFileChange = (e) => {
  setUploadForm(prev => ({ ...prev, resourceFile: e.target.files[0] }));
};



const handleUploadSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("resourceFile", uploadForm.resourceFile);
  formData.append('title', uploadForm.title);
  formData.append('uploadedBy', user.name);
  formData.append('subject', selectedSubject)



  // Optional: Upload logic
  await axios.post('/api/resources/create-topics', formData, 
         { headers: {
        'Content-Type': 'multipart/form-data'
      }}
  ).catch((err)=>{console.log("Err uploading file ", err)});

  toggleUploadModal();
  setUploadForm({ title: '', resourceFile: null });
};



  return (
    <>
      <div className='page-title sticky bg-sky-400 h-20 text-2xl flex flex-col z-20 justify-center font-bold top-0 w-full opacity-90'>
        <h2 style={{ marginLeft: 50 }}>{toTitleCase(departmentId)}</h2>
      </div>

      <div className='flex flex-col dark:bg-gray-900 lg:grid lg:grid-cols-5 gap-6 p-6 bg-gray-100 text-gray-900 dark:text-gray-100 transition-backgroundColor duration-500'>

        {/* Subject Directory (side) */}
        <div
          data-lenis-prevent
          className='p-4 rounded-lg overflow-auto max-h-96 lg:max-h-[calc(100vh-200px)] bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100 transition-backgroundColor duration-500'
        >
          <ul className='space-y-2'>

            {/* Add Subject Form */}
            <form
              onSubmit={handleAddSubject}
              className='space-y-2 pb-4 border-b sticky top-0 bg-white dark:bg-gray-500 rounded-xl p-3.5 border-gray-400 dark:border-gray-600 mb-4'
            >
              <h3 className='text-lg font-bold'>Add Subject</h3>
              <input
                type='text'
                name='subjectName'
                placeholder='Subject Title'
                value={newSubject.title}
                onChange={handleSubjectInputChange}
                className='w-full p-2 rounded bg-gray-100 dark:bg-gray-700'
                required
              />

              <input
                type='text'
                name='subjectID'
                placeholder='Subject ID'
                value={newSubject.id}
                onChange={handleSubjectInputChange}
                className='w-full p-2 rounded bg-gray-100 dark:bg-gray-700'
                required
              />

              <button
                type='submit'
                className='w-full p-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600'
              >
                Add Subject
              </button>
            </form>


            {subjects.map((subject) => (
              <li
                key={subject.subjectID}
                className='p-3 text-lg font-semibold border-b border-gray-400 dark:border-gray-600 transition-all duration-200 hover:bg-gray-500 hover:text-gray-100'
              >
                <Link to={`${subject.subjectID}`}>
                  {subject.subjectName}
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

    <button
      type='button'
      onClick={toggleUploadModal}
      className='p-2 px-4 font-semibold text-gray-100 bg-blue-500 dark:bg-blue-600 rounded-md'
    >
      Upload Resource
    </button>
  </div>





<Outlet/>



  {isUploadModalOpen && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 w-full max-w-md relative">
      <button
        onClick={toggleUploadModal}
        className="absolute top-4 right-4 text-gray-700 dark:text-gray-200"
      >
        ✖
      </button>
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        Upload Resource
      </h2>





      <form onSubmit={handleUploadSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Resource Title"
          value={uploadForm.title}
          onChange={handleUploadChange}
          className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          required
        />

        <select name="subject" id="subject"
          className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
           onChange={(e) => {console.log("New subject is: ", e.target.value); setSelectedSubject(e.target.value)}}
        >
          {subjects.map((subject)=>(
            <option key={subject.subjectID}
            value= {subject.subjectID}
            className='w-full'
            >
              {subject.subjectName}
            </option>
          )
          
          )}
        </select>

        <input
          type="file"
          name="resourceFile"
          accept="*"
          onChange={handleUploadFileChange}
          className="w-6/12 h-24 p-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold"
        >
          Submit
        </button>
      </form>


    </div>
  </div>
)}

  
       </div>

       </div>

    </>
  );
};

export default BranchResource;
