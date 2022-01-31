import Btn from '../layout/components/Btn';

import { colourState } from '../../utils/colourState';
import ServicesSplide from '../sliders/ServicesSplide';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';

export default function HomeServices() {
  useEffect(() => {
    if (typeof window !== undefined) {
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        trigger: '.home__services',
        start: 'top 80%',
        onEnter: () => {
          // document.querySelector('.wrapper').classList.add('blue');
        },
        onLeaveBack: () => {
          document.querySelector('.wrapper').classList.remove('blue');
        },
      });
    }
  }, []);

  return (
    <section className='home__services'>
      <div className='home__services__header'>
        <div className='text'>
          <h2>Website + Digital</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            nostrum exercitationem deleniti pariatur reiciendis molestias.
          </p>
        </div>
        <div className='button'>
          <Btn href='/about' text='What we do' />
        </div>
      </div>
      <div className='home__services__slider'>
        <ServicesSplide />
      </div>
    </section>
  );
}
