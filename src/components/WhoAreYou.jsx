import React from 'react';

function WhoAreYou() {
  return (
    <div className="relative w-full h-screen mt-10 overflow-hidden">
      <img 
        className="absolute inset-0 object-cover w-full h-[50%] md:w-[60%] md:h-[80%] mt-10 ml-auto md:ml-28" 
        src="https://d293e64rvqt2z5.cloudfront.net/ps17/img/cms/people/store1.jpg" 
        alt="Store"
      />
      <div className="absolute inset-0 flex items-center justify-center p-6 ">
        <div className="w-full max-w-4xl p-6 mx-4 text-black bg-white rounded-none shadow-lg space-y-7 md:ml-auto md:p-8">
          <h1 className="mb-4 text-3xl font-bold uppercase">Who Are You</h1>
          <p className="mb-4 text-lg">
            I am a text block. Click the edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <p className="text-lg">
            I am a text block. Click the edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className='py-3 text-white bg-black px-7'>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default WhoAreYou;
