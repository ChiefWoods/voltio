import React from 'react'
import { solar_panel1 } from '../assets'
import { BackgroundImage } from '../components'
import { FaChevronCircleLeft,FaChevronCircleRight,FaBolt   } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const indi_project = () => {
  return (
    <BackgroundImage>
        <div>
            <div className='flex flex-row mb-10 mt-[100px] items-center align-center place-content-center'>
                <div className='flex items-center cursor-pointer'>
                    <FaChevronCircleLeft className='text-white text-[40px]'/>
                </div>
                <img className='mx-6' src={solar_panel1}/>
                <div className='flex items-center cursor-pointer'>
                    <FaChevronCircleRight className='text-white text-[40px]'/>
                </div>
            </div>
            <div>
                <div className='flex flex-row justify-between '>
                    <div className='bg-dg w-[70%] p-6 rounded-2xl'>
                        <p className='text-[40px] font-semibold'>Project A</p>
                        <div className='flex flex-row ml-2 mt-2'>
                            <div className='flex flex-row text-white text-[22px] items-center mr-6 '>
                                <IoLocationSharp className='mr-[2px]'/>
                                <p>Pahang, Malaysia</p>
                            </div>
                            <div className='flex flex-row text-white text-[22px] items-center '>
                                <FaBolt className='mr-[2px]'/>
                                <p>28 MW</p>
                            </div>
                        </div>
                        <p className='text-[18px] mt-4 ml-2'>Solar farm located in Pahang, Malaysia. Sitting in a land at about 80 acres in size. Rate of energy generated is exceptionally stable.</p>
                        <button className='bg-[#A1E5A1] px-4 py-2 rounded-3xl font-semibold text-[20px] mt-6 hover:scale-105 ml-2'>Buy Fraction</button>
                    </div>
                    
                    <div className='bg-dg w-[20%] p-6 rounded-2xl'>
                        <div className='mb-4'>
                            <p className='text-[#A1E5A1] font-semibold'>Available Fractions</p>
                            <p className='text-3xl font-semibold ml-2'>23888</p>
                        </div>
                        <div className='mb-4'>
                            <p className='text-[#A1E5A1] font-semibold'>Built In</p>
                            <p className='text-3xl font-semibold ml-2'>2020</p>
                        </div>
                        <div className='mb-4'>
                            <p className='text-[#A1E5A1] font-semibold'>Annual Project Yield</p>
                            <p className='text-3xl font-semibold ml-2'>8%</p>
                        </div>
                    </div>
                </div>
                <div className='bg-dg rounded-2xl p-6 mt-8 mb-8'>
                    <table className='w-[100%]'>
                        <tr className='border-b-2'>
                            <th className='text-[#A1E5A1] text-[20px]'>Total Capacity</th>
                            <th className='text-[#A1E5A1] text-[20px]'>Active Capacity</th>
                            <th className='text-[#A1E5A1] text-[20px]'>Pipeline Capacity</th>
                            <th className='text-[#A1E5A1] text-[20px]'>Project Location</th>
                            <th className='text-[#A1E5A1] text-[20px]'>Developed By</th>
                        </tr>
                        <tr className=''>
                            <td className='text-center text-white p-4 text-[18px] font-semibold'>28MW</td>
                            <td className='text-center text-white p-4 text-[18px] font-semibold'>28MW</td>
                            <td className='text-center text-white p-4 text-[18px] font-semibold'>28MW</td>
                            <td className='text-center text-white p-4 text-[18px] font-semibold'>Termeloh, Pahang</td>
                            <td className='text-center text-white p-4 text-[18px] font-semibold'>Sunergy International</td>
                        </tr>
                    </table>
                </div>
            </div>
            
        </div>
    </BackgroundImage>
  )
}

export default indi_project