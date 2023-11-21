"use client";

import { useState } from "react";
import BuyCard from "../../components/BuyCard";
const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div>
      <div className="flex justify-center items-center mt-[80px]">
        <p className="text-3xl sm:text-left text-center">
          Explore our current subscription rates
        </p>
      </div>
      <div className="flex justify-center items-center mt-8">
        <p className="text-gray-400 sm:text-left text-center">
          Checkout out our best deals acrossour product range, and get what your
          business needs.
        </p>
      </div>
      <div className="flex justify-center items-center mt-[80px] space-x-5">
        <div>
          <p className="text-[12px] text-teal-600">Save 20% </p>
          <p>Monthly Plans</p>
        </div>
        <label className="relative inline-flex items-center me-5 cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={(e) => {
              setIsYearly(e.target.checked);
            }}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
        </label>
        <div>
          <p className="text-[12px] text-teal-600">Save 40% </p>
          <p>Yearly Plans</p>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-around items-center mt-[100px]">
        <BuyCard premiumType={"10 strategies"} yearly={isYearly} />
        <BuyCard premiumType={"20 strategies"} yearly={isYearly} />
        <BuyCard premiumType={"Unlimited strategies"} yearly={isYearly} />
      </div>
    </div>
  );
};

export default Pricing;
