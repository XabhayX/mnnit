import { useContext } from "react"
import { UserContext } from "../hooks/UserContext.js"

const Profile = () => {

const {user, setUser} = useContext(UserContext)


  return (
    <>
<div className="h-fit col-span-3 pr-5 transition-backgroundColor duration-800 dark:bg-gray-700 pt-10">
  <div className='mb-10'>
    {/* Title */}
    <h1 className='text-3xl pl-10 font-bold relative dark:text-gray-100'>
      Profile
      <span className='absolute bottom-[-15px] left-10 w-20 h-1 bg-black dark:bg-gray-100 rounded'></span>
    </h1>

    {/* Container */}
    <div className="dark:bg-zinc-800  mt-10 pl-10 grid  transition-backgroundColor duration-500 grid-cols-1 lg:grid-cols-2 ml-10 p-6 border border-gray-500 rounded-md">
      {/* Left Section */}
      <div className="flex flex-col items-start pr-10 border-r border-gray-500">
        <form id="personalDetailForm" className="mt-10 w-full">
          <div className="mb-5">
            <label htmlFor="regno" className="block mb-1 font-bold dark:text-gray-100">
              Name:
            </label>
            <input
              type="text"
              id="regno"
              name="regno"
              value={user?.name}
              readOnly
              className="border rounded p-2 w-full ml-5 text-black dark:bg-gray-900 dark:text-gray-100"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="regNo" className="block mb-1 font-bold dark:text-gray-100">
              Registration Number:
            </label>
            <input
              type="text"
              id="regNo"
              name="regNo"
              value={user?.regNo}
              readOnly
              className="border rounded p-2 w-full ml-5 text-black dark:bg-gray-900 dark:text-gray-100"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="dob" className="block mb-1 font-bold dark:text-gray-100">
              Date Of Birth:
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="border rounded p-2 w-full ml-5 text-black dark:bg-gray-900 dark:text-gray-100"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="gender" className="block mb-1 font-bold dark:text-gray-100">
              Gender:
            </label>
            <select id="gender" name="gender" required
              className="border rounded p-2 w-full ml-5 text-black dark:bg-gray-900 dark:text-gray-100">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-gray-100 py-2 px-5 mt-10 ml-32 rounded hover:bg-blue-600 transition-all">
            Submit
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="pl-6 pr-10 mb-10">
        <form id="editableDetailForm" className="mt-10 w-full">
          <div className="mb-5">
            <label htmlFor="email-editable" className="block mb-1 font-bold dark:text-gray-100">
              Email:*
            </label>
            <input
              type="email"
              id="email-editable"
              name="email-editable"
              className="border rounded p-2 w-full ml-5 text-black dark:bg-gray-900 dark:text-gray-100"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="contact" className="block mb-1 font-bold dark:text-gray-100">
              Contact No:*
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              className="border rounded p-2 w-full ml-5 text-black dark:bg-gray-900 dark:text-gray-100"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="mobile" className="block mb-1 font-bold dark:text-gray-100">
              Mobile No.:
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              className="border rounded p-2 w-full ml-5 text-black dark:bg-gray-900 dark:text-gray-100"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="bloodgroup" className="block mb-1 font-bold dark:text-gray-100">
              Blood Group:
            </label>
            <select id="bloodgroup" name="bloodgroup" required
              className="border rounded p-2 w-full ml-5 text-black dark:bg-gray-900 dark:text-gray-100">
              <option value="">Select</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          <div className="mb-5">
            <label htmlFor="nationality" className="block mb-1 font-bold dark:text-gray-100">
              Nationality:
            </label>
            <select id="nationality" name="nationality" required
              className="border rounded p-2 w-full ml-5 text-black dark:bg-gray-900 dark:text-gray-100">
              <option value="">Select Nationality</option>
              <option value="indian">Indian</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-gray-100 py-2 px-5 mt-10 ml-32 rounded hover:bg-blue-600 transition-all">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Profile
