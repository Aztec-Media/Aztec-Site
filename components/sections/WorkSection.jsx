import { useState } from 'react';
import WorkCircles from '../layout/components/work/WorkCircles';

export default function WorkSection({ portfolioData }) {
  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(0);

  return (
    <section
      className='work__section'
      onMouseMove={(e) => {
        setPageX(e.pageX / 100);
        setPageY(e.pageY / 100);
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
