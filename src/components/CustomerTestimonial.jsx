
const testimonials = [
  {
    text: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    imageUrl: "https://iqit-commerce.com/ps17/img/cms/people/people1.jpg",
    name:'Jhone Doe',
    role: "Designer"
  },
  {
    text: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    imageUrl: "https://iqit-commerce.com/ps17/img/cms/people/people2.jpg",
    name:'Jhone Doe',
    role: "Designer"
  },
  {
    text: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    imageUrl: "https://iqit-commerce.com/ps17/img/cms/people/people3.jpg",
    name:'Jhone Doe',
    role: "Designer"
  }
];

function CustomerTestimonial() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">Customers testimonials</h2>
        <hr className="w-24 mx-auto my-4 border-t-4 border-black" />
        <p className="text-center text-gray-600">From all 300 dresses</p>
        <div className="grid gap-8 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="max-w-md p-6 ">
              <p className="mb-4 text-sm text-gray-600 md:text-base">{testimonial.text}</p>
              <div className="flex items-center space-x-4">
                <img className="w-16 h-16 rounded-full" src={testimonial.imageUrl} alt={testimonial.name} />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerTestimonial;
