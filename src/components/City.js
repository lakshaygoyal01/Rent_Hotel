import React from "react";
import AllCity from "./AllCity.js";

const City = () => {
  return (
    <section className=' bg-[#F5F5FD] max-h-full '>
      <div className='container mx-auto '>
        <div className='text-black items-center text-center space-y-3 mb-10'>
          <h1 className='  font-bold text-5xl'> Featured Listed Properties</h1>
          <p className='text-gray-900 text-md '>
            Real estate can be bought, sold, leased, or rented, and can be a
            <br />
            valuable investment opportunity. The value of real estate can be...
          </p>
        </div>
        <AllCity />
        
      </div>
    </section>
  );
};

export default City;
