import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const testimonials = [
  { name: "John Doe", text: "Amazing service!", image: "../../../public/file.png" },
  { name: "Jane Smith", text: "Incredible experience.", image: "../../../public/mr1.png" },
  { name: "Sam Wilson", text: "Top-notch support!", image: "../../../public/mr1.png" },
  { name: "Alice Johnson", text: "Loved the quality.", image: "../../../public/mr1.png" },
  { name: "Robert Brown", text: "Exceptional results.", image: "../../../public/mr1.png"},
  { name: "Emily Davis", text: "Would recommend.", image: "../../../public/mr1.png" },
];

const Testimonial = () => {
  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>
      <div className="max-w-8xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={100}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
          
          
              <span className="   inset-0  w-500 h-700 object-cover w-[450px] h-[200px] items-end -skew-x-12 bg-transparent border-2 border-customTomato p-4 shadow-md flex flex-col  text-center"/>
        {testimonial.color}
            <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-32 h-32   -left-14 top-5  rounded-full mb-4 absolute inset-0  object-cover"
                />
                <div className='flex justify-between'>
                
                 <p className="text-lg font-semibold mb-2 left-32 top-14  absolute inset-0   object-cover ">{testimonial.name}<br/><p className="text-gray-600">{testimonial.text}</p></p>
                 
          
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 left-96 top-5   rounded-full mb-4 absolute inset-0  object-cover"
                />
               </div>
                

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
