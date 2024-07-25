import React from 'react';

function VideoBanner() {
  return (
    <div className="relative  w-full h-[500px] overflow-hidden overflow-x-hidden overflow-y-hidden">
      <video 
        src="https://iqit-commerce.com/ps17/img/cms/bgnews1.mp4" 
        autoPlay 
        loop 
        muted 
        preload="auto"
        playsInline 
        className="absolute inset-0 object-cover w-full h-screen transform-gpu"
        onError={(e) => console.error('Video failed to load:', e)}
      ></video>
      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div className='mb-8 space-y-8'>
          <p>Sign in to our newsletter</p>
          <h1 className="mb-4 text-4xl font-bold">Add GET $5 DISCOUNT</h1>
          <input className='py-2 bg-transparent border rounded-none px-9' type='text' placeholder='Email Address'/>
          <button className='px-4 py-3 text-black bg-white'>Subscribe</button>
          <p className='text-xs'>*Valid in June*</p>
        </div>
      </div>
    </div>
  );
}

export default VideoBanner;
