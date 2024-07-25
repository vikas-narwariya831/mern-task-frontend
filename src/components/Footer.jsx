import React from 'react';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <div className='w-full py-8' style={{ backgroundColor: 'rgb(31, 31, 31)' }}>
      <div className='flex flex-col items-center w-full py-14'>
        <div className='flex items-center mb-4'>
          <h1 className='mr-4 text-2xl font-bold text-white'>Sign up to Newsletter</h1>
          <div className='flex items-center bg-white rounded'>
            <input
              className='px-[200px] py-2 text-black rounded-l focus:outline-none'
              type='email'
              placeholder='Your Email Address'
            />
            <button className='flex items-center px-4 py-2 text-black transition duration-300 hover:text-white hover:bg-black'>
              <EmailIcon />
            </button>
          </div>
        </div>
        <p className='w-3/4 text-center text-white'>
          You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.
        </p>
      </div>
      <div className='w-full py-8 text-white bg-black'>
        <div className='flex justify-around px-4'>
          <div className='flex flex-col items-center w-1/4'>
            <div className='flex items-center'>
              <h1 className='text-sm font-bold'>Information</h1>
              <hr className='flex-grow mx-2 border-t border-white' />
            </div>
            <ul className='flex flex-col items-center mt-2 space-y-1 text-xs'>
              <li className='cursor-pointer hover:text-blue-500 hover:underline'>Delivery</li>
              <li className='cursor-pointer hover:text-blue-500 hover:underline'>Legal Notice</li>
              <li className='cursor-pointer hover:text-blue-500 hover:underline'>About Us</li>
              <li className='cursor-pointer hover:text-blue-500 hover:underline'>Terms and Conditions of Use</li>
              <li className='cursor-pointer hover:text-blue-500 hover:underline'>Custom Link</li>
            </ul>
          </div>
          <div className='flex flex-col items-center w-1/4'>
            <div className='flex items-center'>
              <h1 className='text-sm font-bold'>Account</h1>
              <hr className='flex-grow mx-2 border-t border-white' />
            </div>
            <ul className='flex flex-col items-center mt-2 space-y-1 text-xs'>
              <li className='cursor-pointer hover:text-blue-500 hover:underline'>Login</li>
              <li className='cursor-pointer hover:text-blue-500 hover:underline'>Address</li>
              <li className='cursor-pointer hover:text-blue-500 hover:underline'>Guest Tracking</li>
              <li className='cursor-pointer hover:text-blue-500 hover:underline'>Order History</li>
            </ul>
          </div>
          <div className='flex flex-col items-center w-1/4'>
            <div className='flex items-center'>
              <h1 className='text-sm font-bold'>Custom</h1>
              <hr className='flex-grow mx-2 border-t border-white' />
            </div>
            <ul className='flex flex-col items-center mt-2 space-y-1 text-xs'>
              <li className='cursor-pointer hover:text-blue-500 hover:underline'>Prices Drop</li>
              <li className='cursor-pointer hover:text-blue-500 hover:underline'>Stores</li>
              <li className='cursor-pointer hover:text-blue-500 hover:underline'>Manufacture</li>
              <li className='cursor-pointer hover:text-blue-500 hover:underline'>New Products</li>
              <li className='cursor-pointer hover:text-blue-500 hover:underline'>Sitemap</li>
            </ul>
          </div>
          <div className='flex flex-col items-center w-1/4'>
            <div className='flex items-center'>
              <h1 className='text-sm font-bold'>Contact Us</h1>
              <hr className='flex-grow mx-2 border-t border-white' />
            </div>
            <ul className='flex flex-col items-center mt-2 space-y-1 text-xs'>
              <li className='cursor-pointer hover:text-blue-500 hover:underline'>Vikas Narwariya</li>
              <li className='cursor-pointer hover:text-blue-500 hover:underline'>Ghitorni, Delhi</li>
              <li className='cursor-pointer hover:text-blue-500 hover:underline'>8319277593</li>
              <li className='cursor-pointer hover:text-blue-500 hover:underline'>vikassinghlodhi831@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex justify-center py-4 mt-10 mb-10'>
        <img
          src="https://iqit-commerce.com/ps17/img/cms/people/lggg.png"
          alt="Payments"
          className="h-auto max-w-full"
        />
      </div>
    </div>
  );
}

export default Footer;
