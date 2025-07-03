import { Link } from "react-router-dom"

const Card = ({department}) => {

    const photo = 'https://images.pexels.com/photos/268362/pexels-photo-268362.jpeg'

  return (
    <>
  <div
  className="max-w-xs w-full mt-14 p-0 border border-gray-500 dark:bg-slate-500 rounded-lg transition-all duration-200 ease-in-out transform hover:shadow-[5px_5px_10px_rgb(103,103,103)] hover:dark:shadow-[5px_5px_10px_rgb(180,180,180)] hover:-translate-y-1 cursor-pointer overflow-hidden">
  
  <img src={photo} title="Photo by Pixabay: https://www.pexels.com/photo/close-up-photo-of-black-pencil-268362/" alt="department" className="w-full h-44 object-cover rounded-t-lg" />

  <div className="text-center pt-3 mb-5">
    <Link to={department.id}>
      <p className="font-semibold text-black dark:text-gray-100">
        {department.branchName}
      </p>
    </Link>
  </div>

  <p className="px-5 text-black dark:text-gray-100">
    {department.description}
  </p>

  <div
    className="px-5 mt-3 text-black dark:text-gray-100 overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:5]"
  ></div>

</div>
    
    </>

  )
}

export default Card