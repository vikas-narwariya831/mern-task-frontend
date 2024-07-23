import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// const offers = [
//   {
//     id: 1,
//     title: "Best set for man",
//     subtitle: "This month's",
//     imageUrl: 'https://d293e64rvqt2z5.cloudfront.net/ps17/img/cms/imgs/small4.jpg',
//   },
//   {
//     id: 2,
//     title: "Heading for man",
//     subtitle: "This month's",
//     imageUrl: 'https://d293e64rvqt2z5.cloudfront.net/ps17/img/cms/imgs/small.jpg',
//   },
//   {
//     id: 3,
//     title: "Woman dresses",
//     subtitle: "This month's",
//     imageUrl: 'https://d293e64rvqt2z5.cloudfront.net/ps17/img/cms/imgs/dsadsa.jpg',
//   },
// ];

const SpecialOffers = () => {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchOffers = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/categories'); // Update with your backend URL
          setOffers(response.data);
        } catch (err) {
          setError('Failed to fetch offers');
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchOffers();
    }, []);
  
    if (loading) return <p>Loading offers...</p>;
    if (error) return <p>{error}</p>;
  
    return (
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <motion.div
              key={offer.id}
              className="relative border rounded-lg overflow-hidden shadow-lg bg-white"
              whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={offer.imageUrl} alt={offer.title} className="w-full h-60 object-cover mb-4" />
              <div className="p-4 text-center">
                <p className="text-gray-500 mb-2">{offer.subtitle}</p>
                <h2 className="text-xl font-semibold mb-2">{offer.title}</h2>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };
  
  export default SpecialOffers;