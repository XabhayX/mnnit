// import React from 'react';
import '../utilityCSS/Calender.css'

const Calender = () => {
  const pdfUrl = 'https://academics.mnnit.ac.in/data/24-25%20session.pdf'; // replace with your PDF URL

  return (
     <>
<div className='page-title sticky bg-sky-400 h-20 text-2xl flex flex-col z-20 justify-center font-bold  top-0 w-full opacity-90'><h2 style={{marginLeft: 50 }}>Calender</h2></div>
     
     <div className="calender w-11/12 align-middle">
      
     <div className="calenderContent">
     <embed
        src={pdfUrl}
        type="application/pdf"
        style={{ width: '100%', height: '100%' }}
        />
     </div>

     </div>
        </>
  );
};

export default Calender;
