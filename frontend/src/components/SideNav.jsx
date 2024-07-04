import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';

const SideNav = ({ onClose }) => {
  return (
    <div className="fixed top-0 right-0 h-full w-[300px] bg-[#252525] text-white shadow-lg z-50">
      <div className="mt-[80px] pl-[200px]">
        <button className="text-[40px]" onClick={onClose}>
          <IoCloseOutline />
        </button>
      </div>
      <nav className="flex flex-col space-y-[22px] text-[18px] pl-[50px] mt-[40px] text-transform: uppercase">
        <a href="/profile" className="text-white font-thin hover:scale-105 hover:text-white">Profile</a>
        <a href="/dashboard" className="text-white font-thin hover:scale-105 hover:text-white">Dashboard</a>
        <a href="/allprojects" className="text-white font-thin hover:scale-105 hover:text-white">Projects</a>
        <a href="" className="text-white font-thin hover:scale-105 hover:text-white">Marketplace</a>
        <a href="" className="text-white font-thin hover:scale-105 hover:text-white">Sell your energy</a>
      </nav>
    </div>
  );
};

export default SideNav;
