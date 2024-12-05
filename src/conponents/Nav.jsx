import React, { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants/index';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>

        <a href="/">
          <img src={headerLogo} alt='Logo' width={130} height={29} />
        </a>



        <button
          onClick={toggleMenu}
          className='lg:hidden z-20 relative focus:outline-none'
        >
          {isMenuOpen ? (
            <span
              className='text-2xl font-bold text-slate-gray hover:text-black 
                         transition-colors duration-300'
            >
              X
            </span>
          ) : (
            <img src={hamburger} alt='Hamburger' width={25} height={25} />
          )}
        </button>

        <ul
          className={`lg:flex flex-1 justify-center items-center gap-16 
                      absolute lg:relative top-0 left-0 w-full h-screen 
                      lg:w-auto lg:h-auto bg-white lg:bg-transparent 
                      transform transition-transform duration-300 ease-in-out ${
                        isMenuOpen
                          ? 'translate-x-0'
                          : '-translate-x-full lg:translate-x-0'
                      }`}
        >
          {navLinks.map((item) => (
            <li
              key={item.label}
              className='lg:py-0 py-4 text-center lg:hover:scale-125 
                         hover:bg-gray-100 lg:hover:bg-transparent
                         transition-transform duration-300 max-lg:w-full'
            >
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray 
                           hover:text-black transform transition-colors 
                           duration-300 ease-in-out'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
