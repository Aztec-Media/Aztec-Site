import { useEffect, useRef, useState } from 'react';
import WorkCircles from '../work/WorkCircles';

import gsap from 'gsap';

export default function WorkSection({ portfolioData }) {
  return (
    <section className='work__section'>
      <div className='work__header'>
        <h1>Our Work</h1>
        <p>
          Revenue-driven, customer-centric, creating strategic solutions based
          in technology, we help brands.
        </p>
      </div>
      <WorkCircles portfolioData={portfolioData} />
    </section>
  );
}
