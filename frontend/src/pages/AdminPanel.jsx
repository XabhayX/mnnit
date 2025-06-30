import { useState } from 'react';
import axios from 'axios'
import {toast} from 'react-hot-toast'

const AdminPanel = () => {
  const [notificationData, setNotificationData] = useState('');
  const [regNo, setRegno] = useState('');
const [email, setEmail] = useState('');
const [fullName, setFullname] = useState('');
const [password, setPassword] = useState('');
const [role, setRole] = useState('student');


const handleSignupSubmit = async (e) => {
  e.preventDefault();
    try {
      const response = await axios.post('/api/users/register-user', {regNo, email, fullName, password, role});
      if(response.data.data) toast.success(`${response.data.data} has been registered`)
      // if{response.data}
    console.log(response.data)
    } catch (error) {
      toast.error(`This Registration Number has alraedy been claimed by ${error.response.data.data.toUpperCase()}`) 
    }
};


  const handleNotificationChange = (e) => {
    setNotificationData(e.target.value);
  };

  const handleNotificationSubmit = async (e) => {
    e.preventDefault(); 
    console.log( {notificationData}); 
    try {
      await axios.post('/api/notifications/post-notification', { notificationData})
      toast.dismiss('post-notification')
      toast.success('Notification Added.', {
        id: 'post-notification'
      })
    } catch (error) {
        toast.dismiss('post-notification')
        toast.error('Notification failed.', {
        id: 'post-notification'
      })
    }

  }

  return (
    <div className='dark:bg-slate-800 transition-backgroundColor duration-500 opacity-100'>
      <div className='flex flex-col items-center justify-center min-h-screen dark:bg-customDark transition-backgroundColor duration-500 opacity-100'>
        <div className='sticky bg-sky-400 h-20 text-2xl flex flex-col justify-center font-bold mb-6 text-center top-0 w-full opacity-90'>
          <h2>Admin Panel</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 w-dvw">
          <div className='flex flex-row space-x-10'>

            {/* Notification Form */}
            <div className="w-lg dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-backgroundColor duration-200 opacity-100">
              <h3 className="text-xl font-semibold mb-4 text-center dark:text-white">Add Notification</h3>
              <form onSubmit={handleNotificationSubmit} className="space-y-4">
                <label htmlFor="addNotificationData" className="block font-semibold text-black dark:text-white">
                  Notification Details:
                </label>
                <textarea
                  id="addNotificationData"
                  name="addNotificationData"
                  value={notificationData}
                  onChange={handleNotificationChange}
                  className="border rounded p-2 w-full h-32 text-black dark:text-white dark:bg-gray-700"
                  placeholder="Enter notification details here..."
                />
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-200">
                  Submit
                </button>
              </form>
            </div>

            {/* Sign Up Form */}
            <div className="w-lg dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-backgroundColor duration-200 opacity-100">
              <h3 className="text-xl font-semibold mb-4 text-center dark:text-white">Create Users</h3>
              <form className="space-y-4"
              onSubmit={handleSignupSubmit}
              >
                <label className="block font-semibold dark:text-white">RegNo:</label>
                <input
                  type="text"
                  name="regNo"
                  onChange={(e)=>setRegno(e.target.value)}
                  className="border rounded w-full p-2 dark:bg-gray-700 dark:text-white"
                />
 
                <label className="block font-semibold dark:text-white">Email:</label>
                <input
                  type="email"
                  name="email"
                  onChange={(e)=>setEmail(e.target.value)}
                  className="border rounded w-full p-2 dark:bg-gray-700 dark:text-white"
                />

                <label className="block font-semibold dark:text-white">Full Name:</label>
                <input
                  type="text"
                  name="fullName"
                  onChange={(e)=>setFullname(e.target.value)}
                  className="border rounded w-full p-2 dark:bg-gray-700 dark:text-white"
                />

                <label className="block font-semibold dark:text-white">Password:</label>
                <input
                  type="text"
                  name="password"
                  onChange={(e)=>setPassword(e.target.value)}
                  className="border rounded w-full p-2 dark:bg-gray-700 dark:text-white"
                />

                <label className="block font-semibold dark:text-white">Role:</label>
                <select
                  id="role"
                  name="role"
                  onChange={(e)=>setRole(e.target.value)}
                  className="border rounded w-full p-2 dark:bg-gray-700 dark:text-white"
                  required
                >
                  <option value="student">Student</option>
                  <option value="staff">Staff</option>
                  <option value="admin">Admin</option>
                  {/* <option value="guest">Guest</option> */}
                </select>

                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white mt-5 py-2 rounded-lg transition duration-200">
                  Sign Up
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
