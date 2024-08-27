// import React from 'react';

// const Banner = () => {
//   return (
//     <div className="bg-[#14819d] text-white p-10">
//     <div className="container mx-auto">
//       <h1 className="text-4xl font-bold">Welcome to Tripnest!</h1>
//       <p className="mt-2">Find Flights, Hotels, Visa & Holidays</p>
//     </div>
//     </div>
//   );
// };


// export default Banner;


// import React, { useEffect } from 'react';
// import Glide from '@glidejs/glide';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import React Icons
// import '@glidejs/glide/dist/css/glide.core.min.css';
// import './Banner.css'; // Import the custom CSS

// const Banner = () => {
//   useEffect(() => {
//     const glide = new Glide('.glide', {
//       type: 'carousel',
//       perView: 3,
//       autoplay: 3000,
//       animationDuration: 800,
//       hoverpause: true,
//     });

//     glide.mount();
//   }, []);

//   return (
//     <div className="bg-[#14819d] text-white p-10">
//       <div className="container mx-auto">
//         <div className="glide">
//           <div className="glide__track" data-glide-el="track">
//             <ul className="glide__slides">
//               <li className="glide__slide glide__slide--active">
//                 <img src="https://images.unsplash.com/photo-1724175325490-4747a8b5e28f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDB8fHxlbnwwfHx8fHw%3D" alt="Slide 1" />
//               </li>
//               <li className="glide__slide">
//                 <img src="https://images.unsplash.com/photo-1720491468850-368cd24ce9d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4Nnx8fGVufDB8fHx8fA%3D%3D" alt="Slide 2" />
//               </li>
//               <li className="glide__slide">
//                 <img src="https://images.unsplash.com/photo-1724175325490-4747a8b5e28f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDB8fHxlbnwwfHx8fHw%3D" alt="Slide 3" />
//               </li>
//               <li className="glide__slide">
//                 <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=60" alt="Slide 4" />
//               </li>
//               <li className="glide__slide">
//                 <img src="https://images.unsplash.com/photo-1724268508231-451abbb9e4b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4M3x8fGVufDB8fHx8fA%3D%3D" alt="Slide 5" />
//               </li>
//               <li className="glide__slide">
//                 <img src="https://images.unsplash.com/photo-1724250266900-2fa0e82f5ad6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D" alt="Slide 6" />
//               </li>
//               <li className="glide__slide">
//                 <img src="https://images.unsplash.com/photo-1724268509055-d4053632de47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D" alt="Slide 7" />
//               </li>
//               <li className="glide__slide">
//                 <img src="https://images.unsplash.com/photo-1720048169707-a32d6dfca0b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D" alt="Slide 8" />
//               </li>
//             </ul>
//           </div>

//           <div className="glide__arrows" data-glide-el="controls">
//             <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
//               <FaArrowLeft />
//             </button>
//             <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
//               <FaArrowRight />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

/**************** Make One **********************/
 
// import React, { useEffect } from 'react';
// import Glide from '@glidejs/glide';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import '@glidejs/glide/dist/css/glide.core.min.css';
// import './Banner.css'; 

// const Banner = () => {
//   useEffect(() => {
//     const glide = new Glide('.glide', {
//       type: 'carousel',
//       perView: 4,
//       focusAt: 'center',
//       gap: 0, 
//       autoplay: 3000,
//       animationDuration: 800,
//       hoverpause: true,
//       breakpoints: {
//         800: {
//           perView: 2
//         },
//         480: {
//           perView: 1
//         }
//       }
//     });

//     glide.mount();
//   }, []);

//   return (
//     <div className="bg-[#14819d] text-white p-10">
//       <div className="container mx-auto">
//         <div className="glide">
//           <div className="glide__track" data-glide-el="track">
//           <ul className="glide__slides">
//               <li className="glide__slide glide__slide--active">
//                 <img src="https://images.unsplash.com/photo-1724175325490-4747a8b5e28f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDB8fHxlbnwwfHx8fHw%3D" alt="Slide 1" />
//               </li>
//               <li className="glide__slide">
//                 <img src="https://images.unsplash.com/photo-1720491468850-368cd24ce9d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4Nnx8fGVufDB8fHx8fA%3D%3D" alt="Slide 2" />
//               </li>
//               <li className="glide__slide">
//                 <img src="https://images.unsplash.com/photo-1724175325490-4747a8b5e28f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDB8fHxlbnwwfHx8fHw%3D" alt="Slide 3" />
//               </li>
//               <li className="glide__slide">
//                 <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=60" alt="Slide 4" />
//               </li>
//               <li className="glide__slide">
//                 <img src="https://images.unsplash.com/photo-1724268508231-451abbb9e4b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4M3x8fGVufDB8fHx8fA%3D%3D" alt="Slide 5" />
//               </li>
//               <li className="glide__slide">
//                 <img src="https://images.unsplash.com/photo-1724250266900-2fa0e82f5ad6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D" alt="Slide 6" />
//               </li>
//               <li className="glide__slide">
//                 <img src="https://images.unsplash.com/photo-1724268509055-d4053632de47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D" alt="Slide 7" />
//               </li>
//               <li className="glide__slide">
//                 <img src="https://images.unsplash.com/photo-1720048169707-a32d6dfca0b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D" alt="Slide 8" />
//               </li>
//             </ul>
//           </div>

//           <div className="glide__arrows" data-glide-el="controls">
            // <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
            //   <FaArrowLeft />
            // </button>
            // <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
            //   <FaArrowRight />
            // </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;


// import React, { useEffect, useRef } from 'react';
// import '@glidejs/glide/dist/css/glide.core.min.css';
// import '@glidejs/glide/dist/css/glide.theme.min.css';
// import './Banner.css'; 
// import Glide from '@glidejs/glide';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


// const Banner = () => {
//   // const glideRef = useRef(null);

//   useEffect(() => {
//     const glide = new Glide('.glide', {
//       type: 'carousel',
//       startAt: 0, // start at the middle slide
//       perView: 5,
//       focusAt: 'center',
//       gap: 10,
//       animationDuration: 800,
//       breakpoints: {
//         1024: {
//           perView: 3
//         },
//         768: {
//           perView: 2
//         },
//         480: {
//           perView: 1
//         }
//       }
//     });

//     glide.mount();

//     // Cleanup function to destroy the Glide instance
//     return () => glide.destroy();
//   }, []);

//   return (
//     <div className="glide">
//       <div className="glide__track" data-glide-el="track">
//         <ul className="glide__slides">
//           <li className="glide__slide">
//             <img src="https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D" alt="Slide 1" />
//           </li>
//           <li className="glide__slide">
//             <img src="https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D" alt="Slide 2" />
//           </li>
//           <li className="glide__slide">
//             <img src="https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D" alt="Slide 3" />
//           </li>
//           <li className="glide__slide">
//             <img src="https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D" alt="Slide 4" />
//           </li>
//           <li className="glide__slide">
//             <img src="https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D" alt="Slide 5" />
//           </li>
//         </ul>
//       </div>
//       <div className="glide__arrows" data-glide-el="controls">
//       <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
//               <FaArrowLeft />
//             </button>
//             <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
//               <FaArrowRight />
//             </button>
//       </div>
//     </div>
//   );
// };

// export default Banner;

// import React, { useState } from 'react';
// import '@glidejs/glide/dist/css/glide.core.min.css';
// import '@glidejs/glide/dist/css/glide.theme.min.css';
// import './Banner.css';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// const images = [
//   "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D",
//   "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D",
//   "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D",
//   "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D",
//   "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D"
// ];

// const Banner = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const next = () =>
//     activeSlide < images.length - 1 && setActiveSlide(activeSlide + 1);

//   const prev = () => activeSlide > 0 && setActiveSlide(activeSlide - 1);

//   const getStyles = (index) => {
//     if (activeSlide === index)
//       return {
//         opacity: 1,
//         transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
//         zIndex: 10
//       };
//     else if (activeSlide - 1 === index)
//       return {
//         opacity: 1,
//         transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
//         zIndex: 9
//       };
//     else if (activeSlide + 1 === index)
//       return {
//         opacity: 1,
//         transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
//         zIndex: 9
//       };
//     else if (activeSlide - 2 === index)
//       return {
//         opacity: 1,
//         transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
//         zIndex: 8
//       };
//     else if (activeSlide + 2 === index)
//       return {
//         opacity: 1,
//         transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
//         zIndex: 8
//       };
//     else if (index < activeSlide - 2)
//       return {
//         opacity: 0,
//         transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
//         zIndex: 7
//       };
//     else if (index > activeSlide + 2)
//       return {
//         opacity: 0,
//         transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
//         zIndex: 7
//       };
//   };

//   return (
//     <div className="glide">
//       <div className="glide__track">
//         <ul className="glide__slides">
//           {images.map((image, index) => (
//             <li
//               key={index}
//               className="glide__slide"
//               style={getStyles(index)}
//             >
//               <img src={image} alt={`Slide ${index + 1}`} />
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="glide__arrows">
//         <button className="glide__arrow glide__arrow--left" onClick={prev}>
//         <FaArrowLeft />
//         </button>
//         <button className="glide__arrow glide__arrow--right" onClick={next}>
//         <FaArrowRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Banner;

// import React, { useState } from 'react';
// import './Banner.css';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// const images = [
//   {
//     src: "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D",
//     title: "Slide 1",
//     description: "This is the first slide"
//   },
//   {
//     src: "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D",
//     title: "Slide 2",
//     description: "This is the second slide"
//   },
//   {
//     src: "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D",
//     title: "Slide 3",
//     description: "This is the third slide"
//   },
//   {
//     src: "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D",
//     title: "Slide 4",
//     description: "This is the fourth slide"
//   },
//   {
//     src: "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D",
//     title: "Slide 5",
//     description: "This is the fifth slide"
//   }
// ];

// const Banner = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const next = () => {
//     setActiveSlide((nextActiveSlide) =>
//       nextActiveSlide < 0 ?  images.length - 1 : nextActiveSlide - 1 
//     );
//   };
  
//   const prev = () => {
//     setActiveSlide((prevActiveSlide) =>
//       prevActiveSlide > 0 ? prevActiveSlide - 1 : images.length - 1
//   );
// };




//   const getStyles = (index) => {
//     const distance = index - activeSlide;

//     switch (distance) {
//       case 0:
//         return {
//           opacity: 1,
//           transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
//           zIndex: 10,
//           visibility: "visible"
//         };
//       case -1:
//         return {
//           opacity: 0.8,
//           transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
//           zIndex: 9,
//           visibility: "visible"
//         };
//       case 1:
//         return {
//           opacity: 0.8,
//           transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
//           zIndex: 9,
//           visibility: "visible"
//         };
//       case -2:
//         return {
//           opacity: 0.6,
//           transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
//           zIndex: 8,
//           visibility: "visible"
//         };
//       case 2:
//         return {
//           opacity: 0.6,
//           transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
//           zIndex: 8,
//           visibility: "visible"
//         };
//       default:
//         return {
//           opacity: 0,
//           transform: "translateX(0px) translateZ(-500px) rotateY(0deg)",
//           zIndex: 7,
//           visibility: "hidden"
//         };
//     }
//   };

//   return (
//     <div className="slideC">
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className="slide"
//           style={getStyles(index)}
//         >
//           <img src={image.src} alt={`Slide ${index + 1}`} />
//           <div className="sliderContent">
//             <h2>{image.title}</h2>
//             <p>{image.description}</p>
//           </div>
//           <div className="reflection" />
//         </div>
//       ))}
//       <div className="glide__arrows">
        // <button className="glide__arrow glide__arrow--left" onClick={prev}>
        // <FaArrowLeft />
        // </button>
        // <button className="glide__arrow glide__arrow--right" onClick={next}>
        // <FaArrowRight />
        // </button>
//       </div>
//     </div>
//   );
// };

// export default Banner;


// import React from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// import './Banner.css';

// // Import required modules
// import { EffectCoverflow, Pagination } from 'swiper/modules';

// export default function Banner() {
//   return (
//     <>
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={5} // Show 5 slides at once
//         spaceBetween={20} // Adjust space between slides if needed
//         coverflowEffect={{
//           rotate: 40, // Adjust the rotation for 3D effect
//           stretch: 0,
//           depth: 60, // Adjust depth to enhance 3D perspective
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={{ clickable: true }} // Make pagination clickable
//         modules={[EffectCoverflow, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Nature 3" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Nature 4" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="Nature 5" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="Nature 6" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="Nature 7" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="Nature 8" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="Nature 9" />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }


import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import React Icons

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Import navigation styles
import 'swiper/css/autoplay'; // Import autoplay styles if needed

import './Banner.css';

// Import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Banner() {
  return (
    <>
      <div className="swiper-container">
        <button className="swiper-button-prev">
          <FaArrowLeft size={24} />
        </button>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={5} // Show 5 slides at once
          spaceBetween={20} // Adjust space between slides if needed
          coverflowEffect={{
            rotate: 40, // Adjust the rotation for 3D effect
            stretch: 0,
            depth: 60, // Adjust depth to enhance 3D perspective
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000, // Delay between transitions (in ms)
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          pagination={{ clickable: true }} // Make pagination clickable
          navigation={true} // Enable navigation buttons
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Nature 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Nature 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="Nature 5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="Nature 6" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="Nature 7" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="Nature 8" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="Nature 9" />
          </SwiperSlide>
        </Swiper>

        <button className="swiper-button-next">
          <FaArrowRight size={24} />
        </button>
      </div>
    </>
  );
}


/*********************/

// import React, { useEffect } from 'react';
// import Glide from '@glidejs/glide';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import '@glidejs/glide/dist/css/glide.core.min.css';
// import '@glidejs/glide/dist/css/glide.theme.min.css';
// import './Banner.css'; 

// const Banner = () => {
//   useEffect(() => {
//     const glide = new Glide('.glide', {
//       type: 'carousel',
//       perView: 5,
//       focusAt: 'center',
//       gap: 0,
//       autoplay: 3000,
//       animationDuration: 800,
//       hoverpause: true,
//       breakpoints: {
//         800: {
//           perView: 3,
//         },
//         480: {
//           perView: 1,
//         },
//       },
//     });

//     glide.mount();
//   }, []);

//   return (
//     <div className="banner-container">
//       <div className="container mx-auto">
//         <div className="glide">
//           <div className="glide__track" data-glide-el="track">
//             <ul className="glide__slides">
//               <li className="glide__slide">
//                 <img src="https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D" alt="Slide 1" />
//               </li>
//               <li className="glide__slide">
//                 <img src="https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D" alt="Slide 2" />
//               </li>
//               <li className="glide__slide">
//                 <img src="https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D" alt="Slide 3" />
//               </li>
//               <li className="glide__slide">
//                 <img src="https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D" alt="Slide 4" />
//               </li>
//               <li className="glide__slide">
//                 <img src="https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D" alt="Slide 5" />
//               </li>
//             </ul>
//           </div>

          // <div className="glide__arrows" data-glide-el="controls">
          //   <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
          //     <FaArrowLeft />
          //   </button>
          //   <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
          //     <FaArrowRight />
          //   </button>
          // </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;



// import React, { useEffect } from 'react';
// import Glide from '@glidejs/glide';
// import '@glidejs/glide/dist/css/glide.core.min.css';
// import '@glidejs/glide/dist/css/glide.theme.min.css';

// const Banner = () => {
//   useEffect(() => {
//     const glide = new Glide('.glide', {
//       type: 'carousel',
//       perView: 5,
//       focusAt: 'center',
//       gap: 20,
//       animationDuration: 1000,
//       hoverpause: true,
//       autoplay: 3000,
//     });
//     glide.mount();
//   }, []);

  // const images = [
  //   "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D",
  //   "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D",
  //   "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D",
  //   "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D",
  //   "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D"
  // ];

//   return (
//     <div className="glide max-w-6xl mx-auto">
//       <div className="glide__track" data-glide-el="track">
//         <ul className="glide__slides">
//           {images.map((src, index) => (
//             <li key={index} className="glide__slide">
//               <img src={src} alt={`Slide ${index + 1}`} className="rounded-lg shadow-lg" />
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div data-glide-el="controls">
//         <button data-glide-dir="<" className="glide__arrow glide__arrow--left">
//           <svg
//             className="w-6 h-6 text-white"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//         </button>
//         <button data-glide-dir=">" className="glide__arrow glide__arrow--right">
//           <svg
//             className="w-6 h-6 text-white"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Banner;


// import React, { useEffect } from 'react';
// import Glide from '@glidejs/glide';
// import '@glidejs/glide/dist/css/glide.core.min.css';
// import '@glidejs/glide/dist/css/glide.theme.min.css';
// import './Banner.css'; 
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// const Banner = () => {
//   useEffect(() => {
//     const glide = new Glide('.glide', {
//       type: 'carousel',
//       perView: 5,
//       focusAt: 'center',
//       gap: 0,
//       animationDuration: 1000,
//       hoverpause: true,
//       autoplay: 3000,
//     });
//     glide.mount();
//   }, []);

//   const images = [
//     "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D",
//     "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D",
//     "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D",
//     "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D",
//     "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D"
//   ];

//   return (
//     <div className="glide max-w-6xl mx-auto">
//       <div className="glide__track" data-glide-el="track">
//         <ul className="glide__slides">
//           {images.map((src, index) => (
//             <li key={index} className="glide__slide slide-3d">
//               <img src={src} alt={`Slide ${index + 1}`} className="rounded-lg shadow-lg" />
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="glide__arrows" data-glide-el="controls">
//             <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
//               <FaArrowLeft />
//             </button>
//             <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
//               <FaArrowRight />
//             </button>
//     </div>
//     </div>
//   );
// };

// export default Banner;

// import React, { useEffect } from 'react';
// import Glide from '@glidejs/glide';
// import '@glidejs/glide/dist/css/glide.core.min.css';
// import '@glidejs/glide/dist/css/glide.theme.min.css';
// import './Banner.css'; // Custom CSS for 3D effect

// const Banner = () => {
//   useEffect(() => {
//     const glide = new Glide('.glide', {
//       type: 'carousel',
//       perView: 5,
//       focusAt: 'center',
//       gap: 20,
//       animationDuration: 1000,
//       hoverpause: true,
//       autoplay: 3000,
//     });

//     glide.on('mount.after', update3DEffect);
//     glide.on('run.after', update3DEffect);

//     glide.mount();
//   }, []);

//   const update3DEffect = () => {
//     const slides = document.querySelectorAll('.glide__slide');
//     slides.forEach((slide, index) => {
//       const offset = slide.getBoundingClientRect().left - window.innerWidth / 2;
//       const rotateY = offset / 10; // Adjust for a stronger or weaker 3D effect
//       slide.style.transform = `rotateY(${rotateY}deg) translateZ(${Math.abs(offset) / 5}px)`;
//     });
//   };

//   const images = [
//     "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D",
//     "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D",
//     "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D",
//     "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D",
//     "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D",
//   ];

//   return (
//     <div className="glide max-w-6xl mx-auto">
//       <div className="glide__track" data-glide-el="track">
//         <ul className="glide__slides">
//           {images.map((src, index) => (
//             <li key={index} className="glide__slide">
//               <img src={src} alt={`Slide ${index + 1}`} className="slide-image rounded-lg shadow-lg" />
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div data-glide-el="controls">
//         <button data-glide-dir="<" className="glide__arrow glide__arrow--left">
//           <svg
//             className="w-6 h-6 text-white"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//         </button>
//         <button data-glide-dir=">" className="glide__arrow glide__arrow--right">
//           <svg
//             className="w-6 h-6 text-white"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Banner;

