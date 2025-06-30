import React, { useContext } from 'react'
import { useState } from 'react';
import { UserContext } from '../hooks/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'

const Login = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: ''
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value
    });

  };



  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/login-user', loginFormData);

      if (response.status == "200") {
        console.log(response.data.fullName)
        setUser({
          name: response.data.fullName,
          role: response.data.role,
          contributions: response.data.contributions,
          email: response.data.email,
          regNo: response.data.regNo,
        })
        navigate('/', { replace: true });

        toast.dismiss('login-toast');
        toast.success("You're logged in!", {
          id: 'login-toast'
        });
      }
    }
    catch (error) {
      console.error("Error during login:", error);
      toast.dismiss('login-toast');
      toast.error("Login failed: wrong credentials",
        {
          id: "login-toast"
        }
      );
    }
  };




  return (


    <div className='dark:bg-slate-800 transition-backgroundColor duration-500 pb-10 min-h-[500px]'>
      <div className='page-title sticky bg-sky-400 h-20 text-2xl flex flex-col z-20 justify-center font-bold  top-0 w-full opacity-90'><h2 style={{ marginLeft: 50 }}>Login</h2></div>




      <form className="max-w-sm mx-auto pt-20"
        onSubmit={handleLoginSubmit}
        onChange={handleLoginChange}

      >
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2  text font-medium text-gray-900 dark:text-white">Email: </label>
          <input type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="student@mnnit.ac.in"
            required
          />

        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text font-medium text-gray-900 dark:text-white">Password:</label>
          <input type="password" id="password" name='password' className="bg-gray-50 border insli border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required />
        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>


      <div className="bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 border border-blue-300 dark:border-blue-700 rounded-lg p-5 shadow-md max-w-3xl mx-auto my-6">
        <h2 className="text-xl font-bold mb-3">⚠️ Notice for Users</h2>

        <p className="mb-3">
          This platform offers a <strong>guest account</strong> that allows visitors to explore shared academic content, announcements, and other general resources.
        </p>

        <p className="mb-3">
          However, uploading educational materials and managing user-submitted content — is restricted to <strong>registered users only</strong>.
        </p>

        <h3 className="text-lg font-semibold mt-4 mb-2">🔒 Account Creation Policy</h3>

        <p className="mb-3">
          Account creation is <strong>not publicly available</strong>. Only an authorized administrator can register new users, add new departments and new subjects, on this platform.
        </p>

        <p className="text-red-500 dark:text-red-400 font-medium">
          If you discover a bug, security loophole(guest account), or unexpected behavior, we kindly encourage you to <strong>report it</strong>. Contributions from curious users, developers, testers, and ethical hackers are welcome to help improve the system for everyone.
        </p>
      </div>

    </div>

  )
}

export default Login