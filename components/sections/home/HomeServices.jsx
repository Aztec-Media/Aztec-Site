import Btn from '../../general/Btn';

import { colourState } from '../../../utils/colourState';
import ServicesSplide from '../sliders/ServicesSplide';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const services = [
  {
    number: '01',
    title: 'Website + Digital',
    link: '/',
    imgSrc: '/img.jpg',
    text: 'Revenue-driven, customer-centric, creating strategic solutions based in technology, we help brands.',
  },
  {
    number: '02',
    title: 'Website + Digital',
    link: '/',
    imgSrc: '/img.jpg',
    text: 'Revenue-driven, customer-centric, creating strategic solutions based in technology, we help brands.',
  },
  {
    number: '03',
    title: 'Website + Digital',
    link: '/',
    imgSrc: '/img.jpg',
    text: 'Revenue-driven, customer-centric, creating strategic solutions based in technology, we help brands.',
  },
  {
    number: '04',
    title: 'Website + Digital',
    link: '/',
    imgSrc: '/img.jpg',
    text: 'Revenue-driven, customer-centric, creating strategic solutions based in technology, we help brands.',
  },
];

export default function HomeServices() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: '.home__services',
      start: 'top 80%',
      onEnter: () => {
        // colourState.bgColour = 'blue';
      },
      onLeaveBack: () => {
        // colourState.bgColour = '';
      },
    });
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