import { useState } from 'react';
import gsap from 'gsap';
import { useSnapshot } from 'valtio';
import { navState } from '../../utils/navState';
import Navbar from './Navbar';
import Logo from '../vectors/Logo';
import LogoText from '../vectors/LogoText';
import Link from 'next/link';

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navStateSnapshot = useSnapshot(navState);

  return (
    <header className='header'>
      <Link href='/'>
        <a className='header__logo' title='Back to the Aztec Media homepage'>
          <Logo />
          <LogoText />
        </a>
      </Link>
      <button
        type='button'
        className={`burger ${navStateSnapshot.open ? 'nav--open' : ''}`}
        title='Toggle Navigation Menu'
        aria-label='Toggle Navigation Menu'
        onClick={() => {
          if (
            !gsap.isTweening([
              '.navbar__left',
              '.navbar__right',
              '.navbar__right .nav--anim',
              '.navbar__left .nav--anim',
            ])
          ) {
            navState.open = !navState.open;
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
