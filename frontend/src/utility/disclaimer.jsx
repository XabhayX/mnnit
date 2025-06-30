import { useEffect, useState } from 'react';

const DisclaimerModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem("hasSeenDisclaimer");
    if (!hasSeen) setShowModal(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("hasSeenDisclaimer", "true");
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded shadow-xl max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">🚨 Disclaimer</h2>
        <div className=" mb-4">

<p>This website is a personal project developed for educational purposes only. 
    </p>
<br/>
<p>
    It is <b>not affiliated, associated, or endorsed</b> by <b>MNNIT Allahabad</b> (Motilal Nehru National Institute of Technology Allahabad) or any of its departments.
    </p>
<br/>
<p>
    All names, layouts, and features are inspired by MNNIT's and publicly visible academic portals purely for demonstration. No real data from MNNIT is used or stored.
    </p>
<br />
<p>
    If you're from MNNIT and wish this clone to be taken down or modified, please reach out respectfully, and I will comply.
    </p>

<br />
— Developer: Abhay, a student at MNNIT

        </div>
        <button
          onClick={handleAccept}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          I Understand
        </button>
      </div>
    </div>
  );
};

export default DisclaimerModal;
