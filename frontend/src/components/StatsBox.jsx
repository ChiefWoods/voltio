import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const sampleData = {
  labels: ['23/08', '24/08', '25/08', '26/08', '27/08', '28/08', '29/08'],
  datasets: [
    {
      label: 'Earnings',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

const StatsBox = () => {
  return (
    <div className="grid grid-cols-2 gap-[40px] py-[40px] px-[60px] rounded-lg bg-[#252525] mt-[60px]">
      <div className="p-4 rounded-lg bg-[#434343]">
        <h2 className="text-lg font-semibold text-white">Total Amount Invested</h2>
        <p>$10,000</p>
      </div>
      <div className="p-4 rounded-lg bg-[#434343]">
        <h2 className="text-lg font-semibold text-white">Total ROI</h2>
        <p>$2,000</p>
      </div>
      <div className="p-4 rounded-lg bg-[#434343]">
        <Line data={sampleData} />
      </div>
      <div className="p-4 rounded-lg bg-[#434343]">
        <Line data={sampleData} />
      </div>
    </div>
  );
};

export default StatsBox;
