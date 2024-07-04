import {React, useState} from 'react'
import { 
  voltio_logo_white_png,
} from '../assets'
import { IoWallet } from "react-icons/io5";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { ConnectWallet,BackgroundImage } from '../components';

const Homepage = () => {
  const [showConnectWallet, setConnectWallet] = useState(false);

  const handleConnectWallet=()=>{
    setConnectWallet(true);
  }

  const closeConnectWallet=()=>{
    setConnectWallet(false);
  }

  return (
    <BackgroundImage>
      <div className=" md:w-[500px] w-[300px] flex items-center">
        <div className='items-center flex flex-col mt-[162px]'>
          <div className=''>
            <img src={voltio_logo_white_png} className="md:w-[500px] w-[400px] fill-white " />
          </div>
          <div className="bg-dg rounded-3xl shadow-2xl py-12 mt-4 items-center flex flex-col w-[90%]">
            <div className='mb-10 mt-6'>
              <div className='md:h-[100px] h-[80px] md:w-[100px] w-[80px] border-4 border-white rounded-full p-4 items-center flex place-content-center'>
                <IoWallet className="text-[50px] text-white"/>
              </div>
            </div>
            <div className='mb-4'>
            <button 
            className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#00C000] duration-300 flex items-center text-white md:text-[20px] text-[18px] rounded-full pl-4 pr-3 py-2 font-semibold border-4 border-white hover:border-[#00C000] hover:text-white group" 
            onClick={handleConnectWallet}>
              Connect to a wallet <FaArrowAltCircleRight className='ml-2 text-white group-hover:text-white' />
            </button>
            </div>
          </div>
        </div>
      </div>
      {showConnectWallet &&(
        <ConnectWallet
        onClose={closeConnectWallet}/>
      )}
    </BackgroundImage>
  )
}

export default Homepage
