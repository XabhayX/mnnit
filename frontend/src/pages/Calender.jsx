// import React from 'react';
import '../utilityCSS/Calender.css'

const Calender = () => {
  const pdfUrl = 'https://academics.mnnit.ac.in/data/24-25%20session.pdf'; // replace with your PDF URL

  return (
     
     <div className="calender w-11/12 align-middle">
     <div className="calenderContent">
     <embed
        src={pdfUrl}
        type="application/pdf"
        style={{ width: '100%', height: '100%' }}
      />
     </div>

     </div>
  );
};

export default Calender;
