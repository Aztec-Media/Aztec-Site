import { useEffect, useState } from 'react';
import { useSnapshot } from 'valtio';
import { colourState } from '../../utils/colourState';
import { navState } from '../../utils/navState';
import gsap from 'gsap';
import imagesloaded from 'imagesloaded';

export default function Layout({ children }) {
  const colourStateSnapshot = useSnapshot(colourState);

  useEffect(() => {
    navState.open = false;
  }, [children]);

  return (
    <>
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
