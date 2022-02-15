import Btn from '../../general/Btn';

import { colourState } from '../../../utils/colourState';
import ServicesSplide from '../sliders/ServicesSplide';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import services from '../../../data/servicesData.json';

export default function HomeServices() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
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
        <ServicesSplide services={services} />
      </div>
    </section>
  );
}
