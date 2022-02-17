import { useState } from 'react';
import Btn from '../../general/Btn';

export default function CareersItem() {
  const [itemOpen, setItemOpen] = useState(false);

  return (
    <article className='careers__item'>
      <div className='title'>Web Developer</div>
      <div className='more' onClick={() => setItemOpen(!itemOpen)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className={`plus ${itemOpen ? 'open' : ''}`}
          viewBox='0 0 16 16'
        >
          <path
            fillRule='evenodd'
            d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z'
          />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='minus'
          viewBox='0 0 16 16'
        >
          <path
            fillRule='evenodd'
            d='M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z'
          />
        </svg>
      </div>
      <div className={`content ${itemOpen ? 'open' : ''}`}>
        <div className='summary'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          quisquam. Maiores accusamus nihil harum, ducimus tenetur optio
          voluptas quas eveniet! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odio, quisquam. Maiores accusamus nihil harum,
          ducimus tenetur optio voluptas quas eveniet! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Odio, quisquam. Maiores accusamus
          nihil harum, ducimus tenetur optio voluptas quas eveniet!
        </div>
        <Btn href='mailto:hello@aztec.media' text='Apply here' />
      </div>
    </article>
  );
}
