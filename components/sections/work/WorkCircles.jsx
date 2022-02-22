import WorkCircle from './WorkCircle';
import portfolioData from '../../../data/portfolioData.json';

export default function WorkCircles() {
  return (
    <section className='work__circles'>
      {portfolioData.map((item, index) => (
        <WorkCircle
          key={index}
          item={item}
          index={portfolioData.length - index}
        />
      ))}
    </section>
  );
}
