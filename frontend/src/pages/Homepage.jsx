import React from 'react'
import { whitelogo,solanalogo,foambg,foam } from '../assets'
import { IoWallet } from "react-icons/io5";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center  bg-cover bg-center pt-[100px] "style={{backgroundImage:`url(${foam})`}}>
      <div className=" md:w-[500px] w-[300px]">
        <div className='items-center flex flex-col'>
          <div>
            <img src={whitelogo} className="md:w-[300px] w-[200px] mt-[50px] " />
          </div>
          {/* <div>
            <p className="text-white font-bold text-[50px]">Sol-LaH</p>
          </div> */}
          <div className="bg-white rounded-3xl shadow-2xl p-4 mt-4 items-center flex flex-col w-[90%]">
            <p className="md:text-[28px] text-[20px] font-semibold text-[#3A6073] text-center">You'll need a wallet on <br/> Solana to continue</p>
            <div className='mb-8 mt-6'>
              <img src={solanalogo}  className="md:h-[100px] h-[80px] "/>
            </div>
            <div className='mb-4'>
            <button className="flex items-center text-[#3A6073] md:text-[20px] text-[18px] rounded-full  pl-4 pr-3 py-2 font-semibold border-4 border-[#3A6073] hover:border-[#00C000] hover:text-[#00C000]  hover:text-white group gradient-ring-button">Connect to a wallet <IoWallet className='ml-2 text-[#3A6073] group-hover:text-[#00C000]' /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
