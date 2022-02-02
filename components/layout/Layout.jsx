// import { useEffect, useState } from 'react';

import { useEffect } from 'react';
import { useSnapshot } from 'valtio';
import { colourState } from '../../utils/colourState';
import { navState } from '../../utils/navState';

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

  useEffect(() => {
    navState.open = false;
  }, [children]);

  return (
    <>
      {/* <div id='cursor' style={{ left: x, top: y }}></div> */}
      <div className={`wrapper ${colourStateSnapshot.bgColour}`}>
        {children}
      </div>
    </>
  );
}
