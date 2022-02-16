import WorkCircle from './WorkCircle';
import portfolioData from '../../../data/portfolioData.json';
import Btn from '../../general/Btn';

export default function WorkCircles() {
  return (
    <section className='work__circles'>
      <div className='work__plan__btn'>
        <Btn href='/contact' text='Start new project' />
      </div>
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
