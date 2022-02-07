import { useEffect, useRef, useState } from 'react';
import WorkCircles from '../layout/components/work/WorkCircles';

import gsap from 'gsap';

export default function WorkSection({ portfolioData }) {
  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(0);

  return (
    <section
      className='work__section'
      onMouseMove={(e) => {
        const { offsetX, offsetY } = e.nativeEvent;
        const { clientWidth, clientHeight } = e.target;

        const xPos = offsetX / clientWidth - 0.5;
        const yPos = offsetY / clientHeight - 0.5;

        setPageX(xPos);
        setPageY(yPos);
      }}
    >
      <div className='work__header'>
        <h1>Our Work</h1>
        <p>
          Revenue-driven, customer-centric, creating strategic solutions based
          in technology, we help brands.
        </p>
      </div>
      <WorkCircles portfolioData={portfolioData} pageX={pageX} pageY={pageY} />
    </section>
  );
}
