import React, { useState } from "react";
import { token_voltio_png } from "../assets";

const BuyFraction = ({
  isOpen,
  onClose
}) => {
  const pricePerFraction = 100;
  const availableFractions = 1000;
  const [numberOfFractions, setNumberOfFractions] = useState(0);

  const handleInputChange = (e) => {
    setNumberOfFractions(e.target.value);
  };

  const handlePayClick = () => {
    // Add payment handling logic here
    alert(`Paid ${numberOfFractions * pricePerFraction}`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="p-6 rounded-lg shadow-lg max-w-md w-full bg-[#252525]">
        <div className="flex justify-between items-center mb-[30px] mt-[-14px]">
          <h2 className="text-[20px] font-semibold text-[#a1e5a1] pt-[10px]">Buy Fraction</h2>
          <button onClick={onClose} className="text-[30px] text-white hover:scale-105">&times;</button>
        </div>
        <div className="mb-4 flex gap-[30px] mb-[20px]">
          <div className="">
            <p className="font-semibold mb-[6px]">Price per fraction: </p>
            <p className="flex"><img src={token_voltio_png} className='w-[28px] mr-[4px]' />{pricePerFraction}</p>
          </div>
          <div className="">
            <p className="font-semibold mb-[6px]">Available fraction(s):</p>
            <p className="flex">{availableFractions}</p>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-white">Number of fraction(s)</label>
          <input
            type="number"
            value={numberOfFractions}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex justify-between items-center pt-[30px]">
          <p className="font-semibold whitespace-pre">Total price:  {numberOfFractions * pricePerFraction}</p>
          <button onClick={handlePayClick} className="w-[100px] bg-[#a1e5a1] text-black text-[14px] font-bold py-[6px] px-4 rounded-[20px] hover:scale-105">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyFraction;
