import React, { useState, useEffect } from 'react';
import RouterConfig from './components/RouterConfig';
import LoadingScreen from './components/loadingScreen';

function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 4000); 

 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div style={{ display: showLoading ? 'block' : 'none' }}>
        <LoadingScreen />
      </div>

      <div style={{ display: showLoading ? 'none' : 'block' }}>
        <RouterConfig />
      </div>
    </>
  );
}

export default App;
