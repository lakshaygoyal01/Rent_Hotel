import React from "react";
import { Link } from "react-router-dom";

const CityCard = ({ item }) => {
  return (
    <main className='p-2 bg-white rounded-[20px]'>
      <div className=' relative '>
        <img
          src={item.image}
          alt=''
          className='h-60 w-full relative rounded-lg'
          loading='lazy'
        />
        <p className='absolute top-0  bg-white text-blue-500 font-bold text-md rounded-[20px]  m-2 py-2 px-3'>
          For Rent
        </p>
        <p className='absolute top-0 right-1 flex items-center justify-center bg-white text-blue-500 font-bold rounded-[20px]  m-2 p-1'>
          <svg
            width='24'
            height='24'
            fill='none'
            aria-hidden='true'
            className=' stroke-current'
          >
            <path
              d='m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </p>
      </div>
      <div className='row-start-2 mt-4 items-center space-y-5 p-3 text-xs font-medium '>
        <div className='flex items-center'>
          <svg
            width='24'
            height='24'
            fill='none'
            aria-hidden='true'
            className='mr-1 stroke-current'
          >
            <path
              d='m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
          <span className='text-lg'>8558 Pecan St.</span>
        </div>
        <div className='text-lg'>
          RCE Theaters -907 Backford Dr, Hederson, NC 587328
        </div>

        <div className='flex justify-around border-b-2 border-dashed border-gray-200 pb-1'>
          <div className=''>
            <svg
              width='24'
              height='24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='mr-1 text-slate-400 dark:text-slate-500'
              aria-hidden='true'
            >
              <path d='M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z' />
              <path d='M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' />
            </svg>
            <p className='text-lg'> 3 Room</p>
          </div>

          <div />
          <div>
            <svg
              width='24'
              height='24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='mr-1 text-slate-400 dark:text-slate-500'
              aria-hidden='true'
            >
              <path d='M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z' />
              <path d='M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' />
            </svg>
            <p className='text-lg'> 4 Bed </p>
          </div>

          <div />
          <div>
            <svg
              width='24'
              height='24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='mr-1 text-slate-400 dark:text-slate-500'
              aria-hidden='true'
            >
              <path d='M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z' />
              <path d='M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' />
            </svg>
            <p className='text-lg'> 1 Bath</p>
          </div>

          <div />
          <div>
            <svg
              width='24'
              height='24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='mr-1 text-slate-400 dark:text-slate-500'
              aria-hidden='true'
            >
              <path d='M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z' />
              <path d='M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' />
            </svg>
            <p className='text-lg'> 723 Sq ft</p>
          </div>

          <div />
        </div>
        <div className='flex justify-between  '>
          <div className="p-3">
            <span className='text-xl font-bold text-blue-500'>$7,000</span>{" "}
            <span className='text-lg font-bold'>/ month</span>
          </div>
          <Link to='/Property/{item.id}'>
          <p className='text-lg font-bold text-blue-500 border-blue-500 rounded-[25px] border-2 p-2'>Read more</p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CityCard;
