import React from 'react'

function Blogs() {

    const blog = [
        {
          name: 'In ac fermentum massa amet',
          imageUrl: 'https://iqit-commerce.com/ps17/modules/ph_simpleblog/covers/9-thumb.jpeg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie elit mi, a semper odio scelerisque et. In ac fermentum massa.'
        },
        {
          name: 'New in store',
          imageUrl: 'https://iqit-commerce.com/ps17/modules/ph_simpleblog/covers/11-thumb.jpeg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie elit mi, a semper odio scelerisque et. In ac fermentum massa.'
        },
        {
          name: 'In ac fermentum massa amet',
          imageUrl: 'https://iqit-commerce.com/ps17/modules/ph_simpleblog/covers/13-thumb.jpeg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie elit mi, a semper odio scelerisque et. In ac fermentum massa.'
        }
      ];
    
    
  return (
    <div className='mt-10 mb-10'>
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl font-extrabold'>Blogs Page</h1>
            <hr className='w-24 mt-5 mb-6 border-4 border-black'/>
            
        </div>
        <div className='flex flex-wrap justify-center'>
            {blog.map((blog,index)=>(
                <div key={index} className='w-full p-4 cursor-pointer md:w-1/2 lg:w-1/3'>
                    <div className='overflow-auto transition-transform bg-white shadow-lg'>
            <img src={blog.imageUrl} alt={blog.name} className='object-cover w-full h-48'/>
            <div className='p-5'> 
            <p className='text-xl font-bold'>{blog.name}</p>
            <p>{blog.text}</p>
            </div>
            </div>
                    
                </div>
            ))}
        
        </div>
    </div>
  )
}

export default Blogs