import WorkCircle from './WorkCircle';
// import portfolioData from '../../../data/portfolioData.json';

export default function WorkCircles({ portfolio }) {
  return (
    <section className='work__circles'>
      {portfolio.map((item, index) => (
        <WorkCircle key={index} item={item} index={portfolio.length - index} />
      ))}
    </section>
  );
}
