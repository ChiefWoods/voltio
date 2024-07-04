import React from 'react'
import { BackgroundImage } from '../components'
const Marketplace = () => {
  return (
    <BackgroundImage>
        <div className="bg-dg w-[60%] p-8 rounded-2xl">
            <table className="w-[100%] mb-4">
                <tr className="border-b-2 mb-4">
                    <th className="text-white p-4">Seller Add.</th>
                    <th className="text-white p-4">Capacity</th>
                    <th className="text-white p-4">Price</th>
                    <th className="text-white p-4" >Price/KWH</th>
                    <th className="text-white p-4">Location</th>
                    <th className="text-white p-4">Buy</th>    
                </tr>
                <tr>
                    <td className="text-white text-center py-4 font-semibold">43ae3af8hua</td>
                    <td className="text-white text-center py-4 font-semibold">4 KWH</td>
                    <td className="text-white text-center py-4 font-semibold">0.000460</td>
                    <td className="text-white text-center py-4 font-semibold">0.000115</td>
                    <td className="text-white text-center py-4 font-semibold">Subang Jaya, Selangor</td>
                    <td className="text-white text-center py-4"><button className='bg-[#A1E5A1] px-6 py-2 rounded-3xl text-black font-semibold hover:scale-110'>BUY</button></td>
                </tr>
                <tr>
                    <td className="text-white text-center py-4 font-semibold">43ae3af8hua</td>
                    <td className="text-white text-center py-4 font-semibold">4 KWH</td>
                    <td className="text-white text-center py-4 font-semibold">0.000460</td>
                    <td className="text-white text-center py-4 font-semibold">0.000115</td>
                    <td className="text-white text-center py-4 font-semibold">Subang Jaya, Selangor</td>
                    <td className="text-white text-center py-4"><button className='bg-[#A1E5A1] px-6 py-2 rounded-3xl text-black font-semibold hover:scale-110'>BUY</button></td>
                </tr>
                <tr>
                    <td className="text-white text-center py-4 font-semibold">43ae3af8hua</td>
                    <td className="text-white text-center py-4 font-semibold">4 KWH</td>
                    <td className="text-white text-center py-4 font-semibold">0.000460</td>
                    <td className="text-white text-center py-4 font-semibold">0.000115</td>
                    <td className="text-white text-center py-4 font-semibold">Subang Jaya, Selangor</td>
                    <td className="text-white text-center py-4"><button className='bg-[#A1E5A1] px-6 py-2 rounded-3xl text-black font-semibold hover:scale-110'>BUY</button></td>
                </tr>
            </table>
        </div>
    </BackgroundImage>
  )
}

export default Marketplace