import { useState } from 'react';
import gsap from 'gsap';

import Navbar from './Navbar';

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className='header'>
      <div className='logo'>aztecmedia</div>
      <button
        type='button'
        className={`burger ${navbarOpen ? 'nav--open' : ''}`}
        onClick={() => {
          if (
            !gsap.isTweening([
              '.navbar__left',
              '.navbar__right',
              '.navbar__right .nav--anim',
              '.navbar__left .nav--anim',
            ])
          ) {
            setNavbarOpen(!navbarOpen);
          }
        }}
      >
        <div className='line line1'></div>
        <div className='line line2'></div>
        <div className='line line3'></div>
      </button>
      <Navbar navbarOpen={navbarOpen} />
    </header>
  );
}
