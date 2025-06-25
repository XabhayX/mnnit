import { useState, useEffect } from 'react';
import { Plus, X, UploadCloud } from 'lucide-react';
import Card from '../components/Card/Card.jsx';
import axios from 'axios'


function Resources() {
  const defaultAvatar = 'https://lh7-us.googleusercontent.com/docsz/AD_4nXdESmIAB-8n0epy1h4zkX0mT6NK6PjjyowZpnZ2w90ZpQPnQFndnx-qaUc1KTC2Be-D7b_M4QzKpQWHpoItt3Jq0KnsWE2uS27mut2QFZhWZ68_7y5g53xQRyD37wxkKTjgc35Zi--PuzOYQ2Z1i_wkuks?key=1lnbn8-Az2qyojsnZFp1DQ';

  const [departments, setDepartments] = useState([
  ]);

  useEffect(() => {
    
    const getDepartments = async ()=>{
    const gatheredDepartments = await axios.post('/api/get-departments');
    setDepartments(gatheredDepartments.data)
  } 
  getDepartments()
  }, [])
  

  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    id: '',
    branchName: '',
    description: '',
    image: defaultAvatar
  });

  const toggleModal = () => setIsOpen(!isOpen);

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (!file) return;

  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setForm((prev) => ({ ...prev, image: reader.result }));
  //   };
  //   reader.readAsDataURL(file);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.id || !form.branchName) {
      alert('ID and Department Name are required.');
      return;
    }

  const formEntryData = new FormData(e.target);
  const formData = {}
  for (let [key, value] of formEntryData.entries() ) {
    formData[key] = value ; 
  }

   setForm({
      id: '',
      branchName: '',
      description: '',
      image: defaultAvatar
    });
  

 await axios.post('http://localhost:4000/api/create-department', formData).then(()=>{console.log("Form Data posted via Axios"); toggleModal()}).catch((err)=>{"Err posting data via Axios. Err: ", err})

};


  const handleChange = (e)=>{
    const {name, value} = e.target; 
    setForm( (prev) => ({
      ...prev, [name] : value,
    }) )
  }

  return (
    <div className='w-full col-span-3'>
      <div className='grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] w-full h-fit min-h-full dark:bg-slate-700 px-5 transition-backgroundColor duration-500 opacity-100 pb-24 gap-6 justify-center items-center'>
        {departments.map((department) => (
          <Card department={department} key={department.id} />
        ))}

        {/* Add Department Card */}
        <div
          onClick={toggleModal}
          className="max-w-xs w-full mt-14 p-0 border border-dashed border-gray-400 dark:border-gray-300 bg-gray-100 dark:bg-slate-600 rounded-lg transition-all duration-200 ease-in-out transform hover:shadow-[5px_5px_10px_rgb(103,103,103)] hover:dark:shadow-[5px_5px_10px_rgb(180,180,180)] hover:-translate-y-1 cursor-pointer overflow-hidden flex flex-col items-center justify-center h-64"
        >
          <Plus size={48} className="text-gray-600 dark:text-gray-200 mb-2" />
          <span className="text-lg font-semibold text-gray-700 dark:text-gray-100">
            Add Department
          </span>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-lg w-full relative">
            <button onClick={toggleModal} className="absolute top-4 right-4">
              <X className="text-gray-600 dark:text-gray-200" />
            </button>
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Add New Department</h2>
            <form 
            onSubmit={handleSubmit}
            // onSubmit={(e)=>{
            //   console.log(e, "\n")
            //   console.log("Hello There")
            // }}

             className="space-y-4">
              <input
                name="id"
                placeholder="ID* (Format: civil-engineering)"
                value={form.id}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                required
              />
              <input
                name="branchName"
                placeholder="Department Name*"
                value={form.branchName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
                rows="3"
                className="w-full px-3 py-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              ></textarea>

              {/* Avatar Upload + Preview */}
              <div className="flex items-center gap-4">
                <img
                  src={form.image}
                  alt="Preview"
                  className="w-16 h-16 object-cover rounded-full border"
                />
                <label className="flex items-center gap-2 text-blue-600 cursor-pointer dark:text-blue-400">
                  <UploadCloud size={20} />
                  <span>Update Avatar</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    // onChange={handleImageChange}
                  />
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Resources;
