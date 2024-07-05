import React from 'react';
import { foam2 } from '../assets';

const BackgroundImage = ({children}) => {
  return (
    <div className="flex flex-col items-center bg-cover bg-center min-h-screen" style={{backgroundImage:`url(${foam2})`}}>
      {children}
    </div>
  );
}

export default BackgroundImage;
