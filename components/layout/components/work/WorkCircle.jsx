import Image from 'next/image';
import { useState } from 'react';

export default function WorkCircle({ item, pageY, pageX, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className='work__circle'
      // style={{
      //   transform: `translate(-${pageX * (index + 1)}px, -${
      //     pageY * (index + 1)
      //   }px)`,
      // }}
      onMouseOver={({ target }) => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <div className='wrapper'>
        <div className='img'>
          <figure>
            <Image
              src={`http://localhost:1337${item.attributes.MainImage.data.attributes.url}`}
              layout='fill'
              alt={`Aztec Media Our Work ${item.attributes.Title}`}
            />
          </figure>
        </div>
        <h4 className='title'>{item.attributes.Title}</h4>
        <div className={`hover__circle ${isHovered ? 'show' : ''}`} style={{}}>
          <p>Discover</p>
        </div>
      </div>
    </article>
  );
}
