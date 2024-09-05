import { useState, useEffect } from "react";

function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 1 : 100));
    }, 50); 

    if (progress === 100) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="relative flex items-center justify-center w-64 h-64 bg-black border-4 border-green-500 rounded-lg shadow-neon animate-spin-slow">
        <div className="absolute inset-0 w-full h-full rounded-lg border-4 border-green-500 animate-pulse-neon" />
      </div>

     
      <div className="absolute flex flex-col items-center justify-center w-56 h-56 bg-black border-4 border-none rounded-lg p-5">
        <h1 className="text-lg font-bold text-green-500 neon-glow mb-4 text-center">
          Please wait... <br /> Loading {progress}%
        </h1>
        <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
