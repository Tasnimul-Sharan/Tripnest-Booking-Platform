import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Brand_Logo from "../../src/images/Brand_Logo.png";


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-[#ffffff] sticky top-0 z-40 backdrop-blur-md backdrop-hue-rotate-30 w-full transition-all duration-300 ease-in-out">
      <nav aria-label="Global" className="container mx-auto p-6 flex items-center justify-between">
        <div className="flex lg:flex-1">
           <Link to="/" className="flex items-center text-2xl mt-4 text-white font-bold">
          <img alt="Logo" src={Brand_Logo} width="100" height="100" className="rounded-md mr-2" />
        </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center rounded-md p-2.5 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FaTimes aria-hidden="true" className="h-6 w-6" /> : <FaBars aria-hidden="true" className="h-6 w-6" />}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {['Flight', 'Hotel', 'Shop', 'Contact', 'About', 'services'].map((item) => (
            <Link key={item} to={`/${item.toLowerCase()}`} className="text-sm hover:bg-[#ee5a3e] hover:text-white p-2 rounded-md font-semibold leading-6">
              {item}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/login" className="text-sm bg-[#ee5a3e] text-white p-2 rounded-md font-semibold leading-6">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>

        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-10 bg-[#ffffff] opacity-75" onClick={toggleMobileMenu} />
          <div className="fixed inset-y-0 right-0 z-20 w-full max-w-sm bg-gray-950 p-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                {/* <span className="sr-only">Your Company</span>
                <img alt="Logo" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" /> */}
               <img alt="Logo" src={Brand_Logo} width="60" height="60" className="rounded-lg mr-2" />


              </Link>
               {/* <Link to="/" className="flex items-center text-2xl mt-4 text-white font-bold">
                <img alt="Logo" src={code} width="60" height="60" className="rounded-lg mr-2" />
              </Link> */}
              <button
                type="button"
                onClick={toggleMobileMenu}
                className=" rounded-md p-2.5 text-white"
                aria-label="Close menu"
              >
                <FaTimes aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6">
              {['Projects', 'Skills', 'Blogs', 'Contact', 'About', 'services'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-white bg-gray-950"
                  onClick={toggleMobileMenu}
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link
                to="/login"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-700"
                onClick={toggleMobileMenu}
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;