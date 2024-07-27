import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const testimonials = [
  { name: "John Doe", text: "Amazing service!", image: "/file.png" },
  { name: "Jane Smith", text: "Incredible experience.", image: "/mr1.png" },
  { name: "Sam Wilson", text: "Top-notch support!", image: "/mr1.png" },
  { name: "Alice Johnson", text: "Loved the quality.", image: "/mr1.png" },
  { name: "Robert Brown", text: "Exceptional results.", image: "/mr1.png" },
  { name: "Emily Davis", text: "Would recommend.", image: "/mr1.png" },
];

const Testimonial = () => {
  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
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
            <SwiperSlide key={index} className="relative -skew-x-12 p-6 border border-green-600 shadow-lg rounded-lg">
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-32 h-32 rounded-full mb-4 object-cover"
                />
                <p className="text-lg font-semibold mb-2">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
