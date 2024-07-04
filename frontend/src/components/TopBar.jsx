import React from 'react';
import {
  voltio_logo_white_png,
  token_voltio_png,
} from '../assets';
import { MdTableRows } from "react-icons/md";
import { FaWallet } from "react-icons/fa";

const currentPage = 'DASHBOARD';
const tokenAmount = '123.456';
const walletAddress = '0x123...456';

const TopBar = () => {
  return (
    <div className="w-full text-white flex justify-between items-center bg-transparent px-[60px] py-[70px]">
      <div className="flex items-center">
        <img src={voltio_logo_white_png} alt="Voltio Logo" className="h-[60px] mr-4" />
        <span className="text-xl font-light ml-[30px]">{currentPage}</span>
      </div>
      <div className="flex items-center">
        <span className="truncate mr-[30px] flex items-center"><FaWallet className='mr-[20px]' /> {walletAddress}</span>
        <span className='mr-[60px] flex items-center'><img src={token_voltio_png} className='w-[40px] mt-[2px]' /> {tokenAmount}</span>
        <button className='text-[40px]'><MdTableRows /></button>
      </div>
    </div>
  );
};

export default TopBar;
