import  { useState, useEffect } from 'react';
import axios from 'axios';
// const banners = [
//   {
//     image: 'https://iqit-commerce.com/ps17/img/cms/prlx/grvl.jpg',
//     heading: 'NO. 1 IN E-COMMERCE',
//     subtext: 'BEST PRODUCTS\nBEST SHIPPING\nBEST CUSTOMER CARE',
//     button: 'THANKS',
//     link: '#'
//   },
//   {
//     image: 'https://iqit-commerce.com/ps17/img/cms/people/stre1.jpg',
//     heading: 'KEEP WALKING INTO RIGHT DIRECTION',
//     subtext: 'YOUR LIFESTYLE PULLS THE TRIGGER\nNow free workout session',
//     button: 'GET GOING NOW',
//     link: '#'
//   },
//   {
//     image: 'https://iqit-commerce.com/ps17/img/cms/demo16/img_3.jpg',
//     heading: 'THE GREATEST SUMMER MIX',
//     subtext: 'LOREM IPSUM\n24H DELIVERY WORLDWIDE\nGREAT STUFF\nAWESOME LOOK ON STREET',
//     button: 'BUY NOW',
//     link: '#'
//   }
// ];

const BannerSection = () => {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const fetchBanners = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/banners'); 
          setBanners(response.data);
        } catch (err) {
          setError('Failed to fetch banners');
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchBanners();
    }, []);
  
    if (loading) return <p>Loading banners...</p>;
    if (error) return <p>{error}</p>;
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
    };
  
    return (
      <div className="relative w-full h-screen overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${currentIndex === index ? 'opacity-100 animate-slide-up' : 'opacity-0'} w-full h-full flex items-center justify-center bg-cover bg-center`}
            style={{ backgroundImage: `url(${banner.image})` }}
          >
            <div className={`text-center text-white p-4 transition-transform duration-1000 ease-in-out ${currentIndex === index ? 'animate-fade-up' : ''}`}>
              <h3 className="text-5xl font-bold tracking-wide uppercase text-shadow-custom">{banner.heading}</h3>
              <p className="mt-4 text-xl whitespace-pre-line text-shadow-custom">{banner.subtext}</p>
              <a
                href={banner.link}
                className="inline-block px-6 py-2 mt-6 font-bold text-white rounded bg-pink-light hover:bg-pink-dark"
              >
                {banner.button}
              </a>
            </div>
          </div>
        ))}
        <button onClick={prevSlide} className="absolute p-2 text-white transform -translate-y-1/2 bg-gray-700 rounded-full left-4 top-1/2">
          &#10094;
        </button>
        <button onClick={nextSlide} className="absolute p-2 text-white transform -translate-y-1/2 bg-gray-700 rounded-full right-4 top-1/2">
          &#10095;
        </button>
      </div>
    );
  }
  
  export default BannerSection;