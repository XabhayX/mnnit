const AdminPanel = () => {
  return (
        <div className='dark:bg-slate-800 transition-backgroundColor duration-500 opacity-100'>
      <div className={`flex flex-col items-center justify-center min-h-screen dark:bg-customDark transition-backgroundColor duration-500 opacity-100`}>
        {/* <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">Admin Panel</h2> */}
<div className='sticky bg-sky-400 h-20 text-2xl flex flex-col justify-center font-bold mb-6 text-center top-0 w-full opacity-90'><h2>Admin Panel</h2></div>


        <div className="flex flex-wrap justify-center gap-8 w-dvw">
          <div className='flex flex-row space-x-10 '>

            {/* Notification Form */}
            <div className="w-lg dark:bg-gray-800  p-6 rounded-lg shadow-lg transition-backgroundColor duration-200 opacity-100">
              <h3 className="text-xl font-semibold mb-4 text-center dark:text-white">Add Notification</h3>
              <form 
            //   onSubmit={handleNotificationSubmit} 
              className="space-y-4">
                <label htmlFor="addNotificationData" className="block font-semibold text-black dark:text-white">
                  Notification Details:
                </label>
                <textarea
                  id="addNotificationData"
                  name="addNotificationData"
                //   value={notificationData}
                //   onChange={handleNotificationChange}
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
              <form 
            //   onSubmit={handleSignupSubmit}
               className="space-y-4">
                <label className="block font-semibold dark:text-white">RegNo:</label>
                <input
                  type="text"
                  name="regno"
                //   value={signupFormData.regno}
                //   onChange={handleSignupChange}
                  className="border rounded w-full p-2 dark:bg-gray-700 dark:text-white"
                />

                <label className="block font-semibold dark:text-white">Email:</label>
                <input
                  type="email"
                  name="email"
                //   value={signupFormData.email}
                //   onChange={handleSignupChange}
                  className="border rounded w-full p-2 dark:bg-gray-700 dark:text-white"
                />

                <label className="block font-semibold dark:text-white">Full Name:</label>
                <input
                  type="text"
                  name="fullname"
                //   value={signupFormData.fullname}
                //   onChange={handleSignupChange}
                  className="border rounded w-full p-2 dark:bg-gray-700 dark:text-white"
                />

                <label className="block font-semibold dark:text-white">Password:</label>
                <input
                  type="password"
                  name="password"
                //   value={signupFormData.password}
                //   onChange={handleSignupChange}
                  className="border rounded w-full p-2 dark:bg-gray-700 dark:text-white"
                />

                <label className="block font-semibold dark:text-white">Role: </label>
                <select
                  id="role"
                  name="role"
                //   value={signupFormData.role}
                //   onChange={handleSignupChange}
                  className="border rounded w-full p-2 dark:bg-gray-700 dark:text-white"
                  required
                >
                  <option value="Student">Student</option>
                  <option value="Staff">Staff</option>
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
  )
}

export default AdminPanel
