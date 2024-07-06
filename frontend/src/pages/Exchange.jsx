import React, { useEffect } from 'react';
import { BackgroundImage,TopBar } from '../components';
const Exchange = () => {
  useEffect(() => {
    // Ensure Jupiter is available globally
    if (window.Jupiter) {
      window.Jupiter.init({
        displayMode: "integrated",
        integratedTargetId: "integrated-terminal",
        endpoint: "https://solana-api.projectserum.com",
      });
    } else {
      console.error('Jupiter object is not available');
    }
  }, []);

  return (
    <div>
        <BackgroundImage>
            <TopBar/>
            <div id="integrated-terminal" className='mt-12 bg-dg p-4 rounded-3xl' style={{ height: '500px', width: '30%' }}></div>
        </BackgroundImage>
      
    </div>
  );
};

export default Exchange;
