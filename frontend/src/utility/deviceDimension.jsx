import { useEffect, useState } from "react";

const DeviceBlockRoute = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      const width = window.innerWidth;
      if (width <= 1032) setIsMobile(true);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  
}, []);

  if (isMobile) {
    return (
      <div className="w-screen h-screen bg-black text-white flex justify-center items-center text-center p-6 text-xl">
        ⚠️ This site is not supported on smaller screens.<br />
        Please use a larger device to continue, or refresh.
      </div>
    );
  }

  return children;
};

export default DeviceBlockRoute;
