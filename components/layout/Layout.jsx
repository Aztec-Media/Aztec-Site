import { useEffect, useState } from 'react';
import { useSnapshot } from 'valtio';
import { colourState } from '../../utils/colourState';
import { navState } from '../../utils/navState';
import gsap from 'gsap';
import imagesloaded from 'imagesloaded';

export default function Layout({ children }) {
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);

  // useEffect(() => {
  //   document.onmousemove = (e) => {
  //     setX(e.clientX);
  //     setY(e.clientY);
  //   };
  // });

  const colourStateSnapshot = useSnapshot(colourState);
  const navStateSnapshot = useSnapshot(navState);

  // const [childrenToDisplay, setChildrenToDisplay] = useState(children);
  // const [transitionStage, setTransitionStage] = useState('leaving');

  // useEffect(() => {
  //   const imgLoad = imagesloaded(document.body, () => {
  //     setTransitionStage('entering');

  //     const introTl = gsap.timeline({
  //       defaults: {
  //         duration: 2,
  //         ease: 'expo.inOut',
  //       },
  //     });
  //     introTl.fromTo('.bg', { xPercent: 0 }, { xPercent: 110 });
  //   });
  // }, []);

  // useEffect(() => {
  //   if (transitionStage === 'entering') {
  //     navState.open = false;

  //     const introTl = gsap.timeline({
  //       defaults: {
  //         duration: 1.5,
  //         ease: 'expo.inOut',
  //       },
  //     });
  //     introTl.fromTo('.bg', { xPercent: 0 }, { xPercent: 110 });
  //   }
  // }, [transitionStage]);

  // useEffect(() => {
  //   if (children !== childrenToDisplay) {
  //     setTransitionStage('leaving');

  //     const outroTl = gsap.timeline({
  //       defaults: {
  //         duration: 1.5,
  //         ease: 'expo.inOut',
  //       },
  //     });

  //     outroTl.fromTo(
  //       '.bg',
  //       { xPercent: -110 },
  //       {
  //         xPercent: 0,
  //         onComplete: () => {
  //           setChildrenToDisplay(children);
  //           setTransitionStage('entering');
  //         },
  //       }
  //     );
  //   }
  // }, [children, setChildrenToDisplay, childrenToDisplay]);

  return (
    <>
      {/* <div id='cursor' style={{ left: x, top: y }}></div> */}

      {/* <div
        className='bg'
        style={{
          backgroundColor: '#000',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '102%',
          height: '102%',
          zIndex: 100,
        }}
      ></div> */}
      <div
        className={`wrapper ${colourStateSnapshot.bgColour} ${
          navState.open ? 'nav--open' : ''
        }`}
      >
        {children}
      </div>
    </>
  );
}
