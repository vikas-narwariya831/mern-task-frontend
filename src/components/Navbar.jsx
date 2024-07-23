import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 mt-4">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-black uppercase">
            <img
              className="logo img-fluid"
              src="https://d293e64rvqt2z5.cloudfront.net/ps17/img/warehouse-for-prestashop-17-logo-1496957294.jpg"
              alt="Warehouse for Prestashop 1.7"
              width="220"
              height="28"
            />
          </a>
        </div>
        <div className="hidden md:flex space-x-6 font-bold uppercase">
          <a href="#" className="text-gray-700 hover:text-black">Categories</a>
          <a href="#" className="text-gray-700 hover:text-black">Sport</a>
          <a href="#" className="text-gray-700 hover:text-black">Shop</a>
          <a href="#" className="text-gray-700 hover:text-black">Tabbed</a>
          <a href="#" className="text-gray-700 hover:text-black">Fashion</a>
          <a href="#" className="text-gray-700 hover:text-black">Simple</a>
          <a href="#" className="text-gray-700 hover:text-black">Color</a>
        </div>
        <div className="flex items-center space-x-4 uppercase">
          <a href="#" className="flex flex-col items-center text-gray-700 hover:text-black text-xl">
            <SearchIcon fontSize="large" />
            <span className="text-sm mt-1">Search</span>
          </a>
          <a href="#" className="flex flex-col items-center text-gray-700 hover:text-black text-xl">
            <PersonIcon fontSize="large" />
            <span className="text-sm mt-1">Account</span>
          </a>
          <a href="#" className="flex flex-col items-center text-gray-700 hover:text-black text-xl">
            <ShoppingBagIcon fontSize="large" />
            <span className="text-sm mt-1">Cart</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
