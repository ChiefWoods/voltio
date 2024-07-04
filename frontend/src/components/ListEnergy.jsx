import React, { useState } from 'react';

const ListEnergy = () => {
  const avgEnergy = 1234; // Replace with your actual avgEnergy constant
  const energyUnit = 'kWh'; // Replace with your actual energyUnit constant

  const [priceInput, setPriceInput] = useState('');
  const [capacityInput, setCapacityInput] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const handlePriceChange = (e) => {
    setPriceInput(e.target.value);
    const price = parseFloat(e.target.value) || 0;
    const capacity = parseInt(capacityInput) || 0;
    setTotalPrice(price * capacity);
  };

  const handleCapacityChange = (e) => {
    setCapacityInput(e.target.value);
    const capacity = parseInt(e.target.value) || 0;
    const price = parseFloat(priceInput) || 0;
    setTotalPrice(price * capacity);
  };

  return (
    <div className="rounded-[50px] p-[100px] bg-[#1E1E1E] text-white text-center">
      <h2 className="text-[24px] mb-4 text-left">Average excess energy past 7 days</h2>
      <p className="text-[24px] text-[#A1E5A1] text-left">
        {avgEnergy} {energyUnit}
      </p>

      <form className="flex flex-col md:flex-row md:items-center md:justify-center mt-20">
        {/* Price Input */}
        <div className="flex flex-col items-start md:mr-4">
          <label htmlFor="price" className="block text-[16px]">
            Price/kWh
          </label>
          <input
            type="text"
            name="price"
            id="price_input"
            className="mt-1 border-b-[1px] border-gray-400 p-2 text-white outline-none"
            style={{ borderBottomColor: '#7C7C7C', background: 'none' }}
            value={priceInput}
            onChange={handlePriceChange}
          />
        </div>

        {/* Capacity Input with Average Energy */}
        <div className="flex flex-col items-start mt-4 md:mt-0 md:mr-4">
          <label htmlFor="capacity" className="block text-[16px]">
            Capacity ({energyUnit})
          </label>
          <div className="flex items-center mt-1">
            <input
              type="text"
              name="capacity"
              id="capacity_input"
              className="border-b-[1px] border-gray-400 p-2 text-white outline-none mr-2"
              style={{ borderBottomColor: '#7C7C7C', background: 'none' }}
              value={capacityInput}
              onChange={handleCapacityChange}
            />
            <span className="text-[16px] text-[#A1E5A1]">/{avgEnergy} {energyUnit}</span>
          </div>
        </div>

        {/* Total Price Display */}
        <div className="mt-4 md:mt-0 mr-4">
          <div>Total Price:</div>
          <span id="total_price" className="ml-2">${totalPrice.toFixed(2)}</span>
        </div>

        {/* List Button */}
        <button type="button" className="mt-4 bg-[#A1E5A1] text-[#1e1e1e] px-4 py-2 rounded-[50px] text-[16px]">
          List
        </button>
      </form>
    </div>
  );
};

export default ListEnergy;
