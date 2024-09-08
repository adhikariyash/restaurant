import React, { useState } from 'react';
import { categories } from '../data';

function Category({ category, setcategory }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFilterClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleCategoryClick = (cate) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    setIsLoading(true);

    const id = setTimeout(() => {
      setcategory(prev => (prev === cate) ? "All" : cate);
      setIsPopupOpen(false);
      setIsLoading(false); 
    }, 1000); 
    setTimeoutId(id);
  };

  return (
    <section id='menu' className="relative mb-9 border-b-2 py-2 overflow-hidden">
      <div>
        <p className='border-l-2 border-r-2 px-1 border-orange-400 text-sm shadow-lg text-center mb-10 p-2 lg:text-2xl font-bold '>
          Choose from the wide variety of dishes
        </p>
      </div>
      <div className="title flex flex-row justify-between items-center">
        <h2 className='font-bold text-xl mb-5'>categories</h2>
        <div className="block md:hidden">
          <button
            className="px-4 py-2 bg-orange-500 text-white rounded-md shadow-md"
            onClick={handleFilterClick}
          >
            Filter
          </button>

          {isPopupOpen && (
            <div className="fixed top-0 right-0 bg-white border border-gray-300 shadow-black p-2 rounded-md mt-2  w-44 font-bold transform text-sm text-center  transition-transform duration-300 ease-in-out shadow-lg border-b-4 "
                 style={{ transform: isPopupOpen ? 'translateX(10%) translateY(45%)' : 'translateX(50%) ' }}>
              <ul className="flex flex-col gap-2 p-4">
                {categories.map((cate, index) => (
                  <li
                    key={index}
                    className={`cursor-pointer ${category === cate ? "font-bold  text-orange-500 border-b-2 border-black" : 'border-b-2 border-black'}`}
                    onClick={() => handleCategoryClick(cate)}
                  >
              
                   <p> {cate}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="hidden md:grid md:grid-cols-7  md:justify-center rounded-lg list-none md:grid- lg:gap-5   xl:gap-24 text-center  ">
        {categories.map((cate, index) => (
          <div className='flex justify-center items-center font-bold text-sm  border-black  px-2'>
            <li
              key={index}
              className={`cursor-pointer ${category === cate ? "rounded-full font-bold text-orange-500 bg-black shadow-xl shadow-black text-lg  p-4" : 'bg-white px-4 rounded-full bordeer-b-4 py-1 md:text-sm lg:text-lg'}`}
              onClick={() =>
                handleCategoryClick(cate)
              }
            >
              {cate}
            </li>
          </div>
        ))}
      </div>

      {isLoading && (
        <div className="fixed bottom-44 left-0 right-0 lg:top-44 flex items-center justify-center rounded-full p-10 ">
          <div className="animate-spin h-10 w-10 border-t-4 rounded-full border-t-blue-500 border-b-4 border-orange-700"></div>
        </div>
      )}
    </section>
  );
}

export default Category;
