import ServicesSplide from '../sliders/ServicesSplide';

export default function ServicesSlider({ services }) {
  return (
    <section className='general__services__slider'>
      <ServicesSplide services={services} />
    </section>
  );
}
