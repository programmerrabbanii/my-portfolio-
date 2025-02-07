// import React from "react";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css'; 
// import 'swiper/css/pagination';

// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: "Rina Sarker",
//       title: "Frontend Developer",
//       feedback:
//         "Rakib is an exceptional developer with a great understanding of frontend technologies. His ability to solve problems and deliver results on time is impressive. Highly recommend working with him!",
//       img: "https://www.w3schools.com/w3images/avatar2.png",
//     },
//     {
//       name: "Amit Rahman",
//       title: "Project Manager",
//       feedback:
//         "It has been a pleasure working with Rakib. He is always very proactive and brings fresh ideas to the table. His communication skills are excellent and he works very efficiently under pressure.",
//       img: "https://www.w3schools.com/w3images/avatar6.png",
//     },
//     {
//       name: "Sara Ahmed",
//       title: "UI/UX Designer",
//       feedback:
//         "Rakib's passion for web development is inspiring. He consistently strives to improve his skills and is always eager to learn new technologies. His work ethic and attitude are commendable.",
//       img: "https://www.w3schools.com/w3images/avatar5.png",
//     },
//   ];

//   return (
//     <div id="testimonials" className="py-16 bg-gray-800">
//       <div className="text-center text-white mb-16">
//         <motion.h2
//           className="text-4xl font-extrabold py-3"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           What My Clients Say
//         </motion.h2>
//         <motion.p
//           className="text-lg text-gray-300"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//         >
//           Here's some feedback from the amazing people I've worked with.
//         </motion.p>
//       </div>

//       {/* Swiper for testimonials */}
//       <Swiper
//         spaceBetween={30}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         centeredSlides={true} // সেন্টারে স্লাইড করা হবে
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
//           },
//           768: {
//             slidesPerView: 2,
//           },
//           1024: {
//             slidesPerView: 3,
//           },
//         }}
//         className="mySwiper"
//       >
//         {testimonials.map((testimonial, index) => (
//           <SwiperSlide key={index}>
//             <motion.div
//               className="bg-gradient-to-tl from-purple-600 to-blue-500 p-8 rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3 * index, duration: 0.8 }}
//             >
//               <div className="flex items-center gap-4">
//                 <img
//                   src={testimonial.img}
//                   alt={testimonial.name}
//                   className="w-16 h-16 rounded-full border-4 border-white"
//                 />
//                 <div>
//                   <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
//                   <p className="text-sm text-gray-200">{testimonial.title}</p>
//                 </div>
//               </div>
//               <p className="mt-6 text-gray-100 italic">{testimonial.feedback}</p>
//             </motion.div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Testimonials;
