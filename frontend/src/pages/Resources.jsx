import Card from '../components/Card/Card.jsx'

function Resources(){

 const Departments = [
    {
      id:1 , name: 'Civil Engineering', description: 'Civil Engineering is the most evergreen branch. Consists of the most talented students of MNNIT.'
    }, 
    { 
      id:2,   name: 'Mechanical Engineering' , description: 'Mechanical Engineering is the most evergreen branch. Consists of the most talented students of MNNIT.'
    }, 
    {
      id: 3, name: 'Biotech Engineerinng', description: 'Biotech Engineering is the most evergreen branch. Consists of the most talented students of MNNIT.'
    }, 
    {
      id:4, name: 'Material Engineering', description: 'Material Engineering is the most evergreen branch. Consists of the most talented students of MNNIT.'
    }, 
    {
      id: 5, name: 'Computational Mechanics', description: 'Computational Engineering is the most evergreen branch. Consists of the most talented students of MNNIT.'
    }, 
    {
      id: 6, name: 'Computer Science', description: 'Computer Science Engineering is the worst evergreen branch. Consists of the most talented students of MNNIT.'
    }
  ]


  return (
    <div className='w-full col-span-3 '> 
<div className='grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] w-full h-fit min-h-full dark:bg-slate-700 px-5 transition-backgroundColor duration-500 opacity-100 pb-24 gap-6 justify-center items-center'>
  {Departments.map((department) => (
    <Card department={department} key={department.id} />
  ))}
</div>


    </div>
  )
}

export default Resources
