import React from 'react'
import { whitelogo,solanalogo,foambg,foam } from '../assets'
import { IoWallet } from "react-icons/io5";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center  bg-cover bg-center "style={{backgroundImage:`url(${foam})`}}>
      <div className=" md:w-[500px] w-[300px]">
        <div className='items-center flex flex-col'>
          <div className='mb-[px] mt-[50px]'>
            <img src={whitelogo} className="md:w-[300px] w-[200px] mt-[50px] mb-[50px] " />
          </div>
          {/* <div>
            <p className="text-white font-bold text-[50px]">Sol-LaH</p>
          </div> */}
          <div className="bg-white rounded-3xl shadow-2xl p-4 mt-4 items-center flex flex-col w-[90%]">
            <p className="md:text-[28px] text-[20px] font-semibold text-[#3A6073] text-center">You'll need a wallet on <br/> Solana to continue</p>
            <div className='mb-8 mt-6'>
              {/* <img src={solanalogo}  className="md:h-[100px] h-[80px] "/> */}
              <div className='md:h-[100px] h-[80px] md:w-[100px] w-[80px] border-4 border-[#3A6073] rounded-full p-4 items-center flex place-content-center'>
                <IoWallet className=" text-[50px]"/>
              </div>
            </div>
            <div className='mb-4'>
            <button className="flex items-center text-[#3A6073] md:text-[20px] text-[18px] rounded-full  pl-4 pr-3 py-2 font-semibold border-4 border-[#3A6073] hover:border-[#00C000] hover:text-[#00C000]  group gradient-ring-button">Connect to a wallet <FaArrowAltCircleRight className='ml-2 text-[#3A6073] group-hover:text-[#00C000]' /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
