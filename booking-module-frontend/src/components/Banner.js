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
//       gap: 20, 
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
    // <div className="bg-[#14819d] text-white p-10">
    //   <div className="container mx-auto">
//         <div className="glide">
//           <div className="glide__track" data-glide-el="track">
          // <ul className="glide__slides">
          //     <li className="glide__slide glide__slide--active">
          //       <img src="https://images.unsplash.com/photo-1724175325490-4747a8b5e28f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDB8fHxlbnwwfHx8fHw%3D" alt="Slide 1" />
          //     </li>
          //     <li className="glide__slide">
          //       <img src="https://images.unsplash.com/photo-1720491468850-368cd24ce9d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4Nnx8fGVufDB8fHx8fA%3D%3D" alt="Slide 2" />
          //     </li>
          //     <li className="glide__slide">
          //       <img src="https://images.unsplash.com/photo-1724175325490-4747a8b5e28f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDB8fHxlbnwwfHx8fHw%3D" alt="Slide 3" />
          //     </li>
          //     <li className="glide__slide">
          //       <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=60" alt="Slide 4" />
          //     </li>
          //     <li className="glide__slide">
          //       <img src="https://images.unsplash.com/photo-1724268508231-451abbb9e4b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4M3x8fGVufDB8fHx8fA%3D%3D" alt="Slide 5" />
          //     </li>
          //     <li className="glide__slide">
          //       <img src="https://images.unsplash.com/photo-1724250266900-2fa0e82f5ad6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D" alt="Slide 6" />
          //     </li>
          //     <li className="glide__slide">
          //       <img src="https://images.unsplash.com/photo-1724268509055-d4053632de47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D" alt="Slide 7" />
          //     </li>
          //     <li className="glide__slide">
          //       <img src="https://images.unsplash.com/photo-1720048169707-a32d6dfca0b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D" alt="Slide 8" />
          //     </li>
          //   </ul>
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

/*********************/

import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import './Banner.css'; 

const Banner = () => {
  useEffect(() => {
    const glide = new Glide('.glide', {
      type: 'carousel',
      perView: 5,
      focusAt: 'center',
      gap: 0,
      autoplay: 3000,
      animationDuration: 800,
      hoverpause: true,
      breakpoints: {
        800: {
          perView: 3,
        },
        480: {
          perView: 1,
        },
      },
    });

    glide.mount();
  }, []);

  return (
    <div className="banner-container">
      <div className="container mx-auto">
        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <li className="glide__slide">
                <img src="https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D" alt="Slide 1" />
              </li>
              <li className="glide__slide">
                <img src="https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D" alt="Slide 2" />
              </li>
              <li className="glide__slide">
                <img src="https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D" alt="Slide 3" />
              </li>
              <li className="glide__slide">
                <img src="https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D" alt="Slide 4" />
              </li>
              <li className="glide__slide">
                <img src="https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjF8fHxlbnwwfHx8fHw%3D" alt="Slide 5" />
              </li>
            </ul>
          </div>

          <div className="glide__arrows" data-glide-el="controls">
            <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
              <FaArrowLeft />
            </button>
            <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;



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

