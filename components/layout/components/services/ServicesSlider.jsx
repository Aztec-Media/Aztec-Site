import ServicesSplide from '../../../sliders/ServicesSplide';

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

export default function ServicesSlider() {
  return (
    <section className='services__slider'>
      <ServicesSplide services={services} />
    </section>
  );
}
