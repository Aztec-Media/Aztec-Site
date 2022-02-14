import Logo from '../vectors/Logo';
import LogoText from '../vectors/LogoText';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import imagesloaded from 'imagesloaded';

export default function Loader({ firstLoad, setFirstLoad }) {
  const loaderRef = useRef(null);

  useEffect(() => {
    if (firstLoad) {
      imagesloaded(document.body, () => {
        const tl = gsap.timeline({
          defaults: { duration: 1.2, ease: 'power2.inOut' },
        });
        tl.fromTo(
          loaderRef.current.querySelector('.loader__inner .logo'),
          { xPercent: -101 },
          { xPercent: 0 }
        )
          .fromTo(
            loaderRef.current.querySelector(
              '.loader__inner .logo .logo__wrapper'
            ),
            { autoAlpha: 0, xPercent: -100 },
            { autoAlpha: 1, xPercent: 0 },
            '-=0.8'
          )
          .fromTo(
            loaderRef.current.querySelector(
              '.loader__inner .logo .logo__wrapper'
            ),
            { autoAlpha: 1, xPercent: 0 },
            { autoAlpha: 0, xPercent: 100 }
          )
          .fromTo(
            loaderRef.current.querySelector('.loader__inner .logo'),
            {
              xPercent: 0,
            },
            { xPercent: 100 },
            '-=1.2'
          )
          .to(loaderRef.current, { xPercent: 101 }, '-=0.2')
          .to(loaderRef.current, { display: 'none', duration: 0 });

        setFirstLoad(false);
      });
    }
  }, []);

  return (
    <div id='loader' ref={loaderRef}>
      <div className='loader__inner'>
        <div className='logo'>
          <div className='logo__wrapper'>
            <Logo />
            <LogoText />
          </div>
        </div>
      </div>
    </div>
  );
}
