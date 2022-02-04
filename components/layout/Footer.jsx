import Btn from './components/Btn';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { yPercent: -30 },
      {
        yPercent: 0,
        duration: 1,
        ease: 'none',
        scrollTrigger: {
          scrub: true,
          trigger: 'main',
          start: 'bottom bottom',
          end: 'bottom top',
        },
      }
    );
  }, [footerRef]);

  return (
    <footer className='footer'>
      <div className='footer__wrapper' ref={footerRef}>
        <section className='footer__cta'>
          <h5 className='footer--anim'>
            Starting a <span>new project</span> or <br />
            want to collaborate with us?
          </h5>
          <Btn href='/' text={`Let's talk`} className='footer--anim' />
        </section>
        <section className='footer__details'>
          <address className='footer__contact'>
            <ul>
              <li className='footer--anim'>Aztec Media</li>
              <li className='footer--anim'>8 Buckland Road</li>
              <li className='footer--anim'>Pen Mill Trading Estate</li>
              <li className='footer--anim'>Yeovil</li>
              <li className='footer--anim'>Somerset</li>
              <li className='footer--anim'>BA21 5EA</li>
            </ul>
            <div>
              <a href='tel:01935477073' className='footer--anim'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z' />
                </svg>
                <span>01935 477073</span>
              </a>
              <a href='mailto:hello@aztec.media' className='footer--anim'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z' />
                </svg>
                <span>hello@aztec.media</span>
              </a>
              <div className='icons'>
                <div className='icon'></div>
                <div className='icon'></div>
              </div>
            </div>
          </address>
          <div className='footer__furniture'>
            <h6 className='footer--anim'>Expert Website Designers Somerset</h6>
            <h6 className='footer--anim'>
              Part of{' '}
              <a href='https://yeomedia.group' rel='noreferrer' target='_blank'>
                The Yeomedia Group
              </a>
            </h6>
            <p className='footer--anim'>
              Copyright &copy; 1993 - {new Date().getFullYear()} Aztec Media
            </p>
            <p>
              <span className='footer--anim'>All Rights Reserved</span>
              <span className='footer--anim'>/</span>
              <span className='footer--anim'>
                <a>Terms &amp; Conditions</a>
              </span>
              <span className='footer--anim'>/</span>
              <span className='footer--anim'>
                <a>Privacy Notice</a>
              </span>
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
}
