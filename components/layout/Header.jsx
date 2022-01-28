import { useState } from 'react';
import gsap from 'gsap';

import Navbar from './Navbar';
import Logo from '../vectors/Logo';
import LogoText from '../vectors/LogoText';

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className='header'>
      <div className='header__logo'>
        <Logo />
        <LogoText />
      </div>
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
