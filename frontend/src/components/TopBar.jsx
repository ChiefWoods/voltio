import React, { useState } from 'react';
import {
  voltio_logo_white_png,
  token_voltio_png,
} from '../assets';
import {
  SideNav,
} from '.';
import { MdTableRows } from "react-icons/md";
import { FaWallet } from "react-icons/fa";

const currentPage = 'DASHBOARD';
const tokenAmount = '123.456';
const walletAddress = '0x123...456';

const TopBar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <>
      <div className="w-full text-white flex justify-between items-center bg-transparent px-[60px] py-[70px]">
        <div className="flex items-center">
          <a href='/dashboard'>
            <img src={voltio_logo_white_png} alt="Voltio Logo" className="h-[60px] mr-4" />
          </a>
          <span className="text-xl font-light ml-[30px]">{currentPage}</span>
        </div>
        <div className="flex items-center">
          <span className="truncate mr-[30px] flex items-center">
            <FaWallet className='mr-[20px]' />
            {walletAddress}
          </span>
          <span className='mr-[60px] flex items-center'>
            <img src={token_voltio_png} className='w-[40px] mt-[2px]' />
            {tokenAmount}
          </span>
          <button className='text-[40px]' onClick={toggleSideNav}>
            <MdTableRows />
          </button>
        </div>
      </div>
      {isSideNavOpen && <SideNav onClose={toggleSideNav} />}
    </>
  );
};

export default TopBar;
