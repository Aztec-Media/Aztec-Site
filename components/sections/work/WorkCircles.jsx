import WorkCircle from './WorkCircle';
import portfolioData from '../../../data/portfolioData.json';

export default function WorkCircles() {
  return (
    <section className='work__circles'>
      <div className='.work__navigation'></div>
      {portfolioData.map((item, index) =>
        index > 7 ? (
          ''
        ) : (
          <WorkCircle
            key={index}
            item={item}
            index={portfolioData.length - index}
          />
        )
      )}
    </section>
  );
}
