import React from 'react';

function WhatWeDoImage() {
  return (
    <div className="relative flex flex-col w-full h-screen mt-10 overflow-hidden md:flex-row">
      <img 
        className="absolute inset-0 object-cover w-full h-[50%] md:w-[60%] md:h-[80%] ml-auto mr-10 " 
        src="https://d293e64rvqt2z5.cloudfront.net/ps17/img/cms/people/store2.jpg" 
        alt="Store"
      />
      <div className="absolute inset-0 flex items-center justify-center md:ml-auto md:mr-20">
        <div className="w-full max-w-2xl p-5 mx-4 text-black bg-white rounded-lg shadow-lg space-y-7 md:max-w-xl md:p-8">
          <h1 className="flex items-center justify-center mb-10 text-3xl font-extrabold uppercase md:mb-12">What we do?</h1>
          <ul className="flex flex-col justify-center space-y-4 text-2xl font-bold md:flex-row md:justify-between md:space-y-0 md:space-x-8">
            <li className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl">75</span>
              <span className="text-lg md:text-xl">Categories</span>
            </li>
            <li className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl">300</span>
              <span className="text-lg md:text-xl">Products</span>
            </li>
            <li className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl">999+</span>
              <span className="text-lg md:text-xl">Orders</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDoImage;
