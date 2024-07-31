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
            <TopBar currentPage='Exchange'/>
            <div id="integrated-terminal" className='mt-12 bg-dg p-4 rounded-3xl h-500 w-30 max-sm:w-[90%]'></div>
        </BackgroundImage>
      
    </div>
  );
};

export default Exchange;
