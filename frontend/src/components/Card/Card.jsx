import { Link } from "react-router-dom"

const Card = ({department}) => {

    const photo = 'https://lh7-us.googleusercontent.com/docsz/AD_4nXdESmIAB-8n0epy1h4zkX0mT6NK6PjjyowZpnZ2w90ZpQPnQFndnx-qaUc1KTC2Be-D7b_M4QzKpQWHpoItt3Jq0KnsWE2uS27mut2QFZhWZ68_7y5g53xQRyD37wxkKTjgc35Zi--PuzOYQ2Z1i_wkuks?key=1lnbn8-Az2qyojsnZFp1DQ'


  return (
    <>
  <div
  className="max-w-xs w-full mt-14 p-0 border border-gray-500 dark:bg-slate-500 rounded-lg transition-all duration-200 ease-in-out transform hover:shadow-[5px_5px_10px_rgb(103,103,103)] hover:dark:shadow-[5px_5px_10px_rgb(180,180,180)] hover:-translate-y-1 cursor-pointer overflow-hidden">
  
  {/* Image */}
  <img src={photo} alt="department" className="w-full h-44 object-cover rounded-t-lg" />

  {/* Title */}
  <div className="text-center pt-3 mb-5">
    <Link to={department.id}>
      <p className="font-semibold text-black dark:text-gray-100">
        {department.branchName}
      </p>
    </Link>
  </div>

  {/* Description */}
  <p className="px-5 text-black dark:text-gray-100">
    {department.description}
  </p>

  {/* Additional Section (with 5 line clamp) */}
  <div
    className="px-5 mt-3 text-black dark:text-gray-100 overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:5]"
  ></div>

</div>



    
    
    </>

  )
}

export default Card