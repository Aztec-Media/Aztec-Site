import Image from 'next/image';
import WorkCircle from './WorkCircle';

export default function WorkCircles({ portfolioData, pageY, pageX }) {
  return (
    <section className='work__circles'>
      <div className='.work__navigation'>
        <ul>
          <li>Recent Work</li>
          <li>Design</li>
          <li>Ecommerce</li>
        </ul>
      </div>
      {portfolioData.map((item, index) =>
        index > 7 ? (
          ''
        ) : (
          <WorkCircle
            key={item.id}
            item={item}
            pageY={pageY}
            pageX={pageX}
            index={index}
          />
        )
      )}
    </section>
  );
}
