import React, { useState, useEffect } from "react";

// import projects data
import { cityData } from "../data";

// import projects nav data
import { cityNav } from "../data";

// import components
import CityCard from "./Citycard";

const AllCity = () => {
  const [item, setItem] = useState({ name: "new york" });
  const [city, setCity] = useState([]);
  const [active, setActive] = useState(0);
  const [style, setStyle] = useState("flex m-5 justify-center");
  
  const changeStyle = () => {
  
    setStyle("opacity-0");
  };

  const [noOfItems, setNoOfItems] = useState(6);
  const slice = cityNav.slice(0, noOfItems);

  useEffect(() => {
    // get projects base on item
    if (item.name === "new york") {
      const newProjects = cityData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setCity(newProjects.slice(0, noOfItems));
    } else {
      const newProjects = cityData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setCity(newProjects.slice(0, noOfItems));
    }
  }, [item, noOfItems]);
  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      {/* nav */}
      <nav className=' max-w-full '>
        <ul className='flex   text-black '>
          {slice.map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? "bg-blue-500 text-white" : ""
                } cursor-pointer capitalize m-4 font-bold bg-[#ECECFB] px-5 py-2 rounded-[20px]`}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      {/* projects grid */}
      <section className='grid grid-cols-3 gap-x-5 gap-y-5'>
        {city.map((item) => {
          return <CityCard item={item} key={item.id}  />;
        })}
      </section>
      <div className={style} onClick={changeStyle}>
        <button
          className=' text-lg flex font-bold text-white bg-blue-500 rounded-[25px] border-2 p-2'
          onClick={() => setNoOfItems(noOfItems + 3)}
          
        >
          <svg
            width='24'
            height='24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='mr-1 text-white justify-center items-center'
            aria-hidden='true'
          >
            <path d='M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z' />
            <path d='M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' />
          </svg>
          Show More
        </button>
      </div>
    </div>
  );
};

export default AllCity;
