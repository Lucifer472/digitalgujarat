"use client";

import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

const LoadingWrapper = () => {
  const [loading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(0);
    const interval = setInterval(() => {
      // Increment the percentage by 1 every 20 milliseconds
      setPercentage((prevPercentage) => {
        if (prevPercentage < 100) {
          return prevPercentage + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 15);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {loading && (
        <div className="w-full h-full min-h-screen bg-gray-600 fixed flex items-center justify-center flex-col gap-y-2 z-[9999] overflow-hidden">
          <span className="text-white leading-[2em] text-center text-3xl">
            Processing...
          </span>
          <div className="flex items-center justify-center w-full">
            <BarLoader color="#ffffff" />
          </div>
          <span className="text-white leading-[2em] text-center text-3xl">
            {percentage}%
          </span>
          <div className="mt-[100px] h-2 w-full"></div>
        </div>
      )}
    </>
  );
};

export default LoadingWrapper;
