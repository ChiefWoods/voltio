import React from 'react'
import { solflare,backpack,phantom,metamask } from '../assets'
import { MdOutlineClose } from 'react-icons/md';

const connectWallet = ({onClose}) => {
  return (
    <div className="z-10 fixed inset-0 flex items-center justify-center bg-black bg-opacity-45">
        <div className="z-20 mx-auto bg-dg px-8 py-6 rounded-md flex flex-col w-[30%]  max-w-full relative">
            <p className="text-white font-bold text-[40px] mb-4">Connect Wallet</p>
            <div className="ml-4 mb-8">
                <p className="text-white ">Recommend Wallet</p>
                <div className="border-[#CDCDCD] rounded-lg border-2 mt-4 p-4 items-center flex justify-center cursor-pointer w-[95%] mx-auto hover:border-[#00C000] hover:font-semibold hover:scale-105 duration-300 ">
                    <div className=" flex flex-row justify-center items-center mr-12">
                        <img className='mr-6 h-[45px]' src={solflare} />
                        <p className='text-[20px]'>Solana</p>
                    </div>
                    
                </div>

                <div className="border-[#CDCDCD] rounded-lg border-2 mt-4 p-4 items-center flex justify-center cursor-pointer w-[95%] mx-auto hover:border-[#00C000] hover:font-semibold hover:scale-105 duration-300 ">
                    <div className=" flex flex-row justify-center items-center mr-12">
                        <img className='mr-6 h-[45px]' src={backpack} />
                        <p className='text-[20px]'>Backpack</p>
                    </div>
                    
                </div>

                <div className="border-[#CDCDCD] rounded-lg border-2 mt-4 p-4 items-center flex justify-center cursor-pointer w-[95%] mx-auto hover:border-[#00C000] hover:font-semibold hover:scale-105 duration-300 ">
                    <div className=" flex flex-row justify-center items-center mr-12">
                        <img className='mr-6 h-[45px]' src={phantom} />
                        <p className='text-[20px]'>Phantom</p>
                    </div>
                    
                </div>

                <div className="border-[#CDCDCD] rounded-lg border-2 mt-4 p-4 items-center flex justify-center cursor-pointer w-[95%] mx-auto hover:border-[#00C000] hover:font-semibold hover:scale-105 duration-300 ">
                    <div className=" flex flex-row justify-center items-center mr-12">
                        <img className='mr-6 h-[45px]' src={metamask} />
                        <p className='text-[20px]'>Metamask</p>
                    </div>
                    
                </div>
            </div>
        <MdOutlineClose
          className='absolute top-4 right-4 font-bold text-slate-400 hover:text-slate-500 text-[35px] cursor-pointer'
          onClick={onClose}
        />    
        </div>
        
    </div>
  )
}

export default connectWallet