import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products'); // Update with your backend URL
        setProducts(response.data);
      } catch (err) {
        setError('Failed to fetch products');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container py-12 mx-auto">
      <h1 className="mb-2 text-3xl font-bold text-center">Our Finest Selection</h1>
      <p className="mb-12 text-center">From all 300 dresses</p>
      <div className="flex flex-wrap justify-center gap-8">
        {products.map((product) => (
          <motion.div
            key={product._id}
            className="relative w-full max-w-xs overflow-hidden transition-transform bg-white border rounded-lg shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={product.imageUrl} alt={product.name} className="object-contain w-full mb-4 h-60" />
            <div className="p-4">
              <h2 className="mb-2 text-xl font-semibold">{product.name}</h2>
              <p className="mb-3 text-lg font-bold text-red-500">{product.price}</p>
              <motion.button
                className="flex items-center justify-center px-4 py-2 text-white transition-transform bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l1.4-7H6.4l-.4-2H3m1 8h12a1 1 0 001-1H5a1 1 0 00-1 1zm1 4a1 1 0 100 2 1 1 0 000-2zm9 0a1 1 0 100 2 1 1 0 000-2z"
                  />
                </svg>
                Add to cart
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
      <button className='flex px-4 py-4 mx-auto mt-10 text-white bg-black rounded-md'>Check All Dresses</button>
    </div>
  );
};

export default ProductList;
