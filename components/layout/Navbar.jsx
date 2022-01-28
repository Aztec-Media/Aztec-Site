import { useEffect } from 'react';

import NavbarLeft from './nav/NavbarLeft';
import NavbarRight from './nav/NavbarRight';

import gsap from 'gsap';

export default function Navbar({ navbarOpen }) {
  useEffect(() => {
    gsap.set(
      [
        '.navbar',
        '.navbar__right',
        '.navbar__left',
        '.navbar__right .nav--anim',
        '.navbar__left .nav--anim',
      ],
      { autoAlpha: 0 }
    );
  }, []);

  useEffect(() => {
    const outroTl = gsap.timeline({
      defaults: { duration: 0.6, ease: 'expo.inOut' },
    });
    const introTl = gsap.timeline({
      defaults: { duration: 0.6, ease: 'power1.inOut' },
    });

    if (navbarOpen) {
      introTl
        .to(
          [
            '.navbar',
            '.navbar__right',
            '.navbar__left',
            '.navbar__right .nav--anim',
            '.navbar__left .nav--anim',
          ],
          { autoAlpha: 1, duration: 0 }
        )
        .fromTo(['.navbar__right', '.navbar'], { scaleX: 0 }, { scaleX: 1 })
        .fromTo('.navbar__left', { scaleX: 0 }, { scaleX: 1 }, 0.1)
        .fromTo(
          ['.navbar__right .nav--anim', '.navbar__left .nav--anim'],
          { autoAlpha: 0, y: -25 },
          { autoAlpha: 1, y: 0, stagger: 0.025 },
          0.4
        );
    } else {
      outroTl
        .fromTo(
          ['.navbar__right .nav--anim', '.navbar__left .nav--anim'],
          { autoAlpha: 1, y: 0 },
          { autoAlpha: 0, y: 15, stagger: 0.01 }
        )
        .fromTo('.navbar__left', { scaleX: 1 }, { scaleX: 0 }, '-=0.4')
        .fromTo(
          ['.navbar__right', '.navbar'],
          { scaleX: 1 },
          { scaleX: 0 },
          '-=0.6'
        );
    }
  }, [navbarOpen]);

  return (
    <nav className='navbar'>
      <NavbarLeft />
      <NavbarRight />
    </nav>
  );
}
