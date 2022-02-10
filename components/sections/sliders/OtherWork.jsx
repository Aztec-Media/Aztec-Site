import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import Link from 'next/link';

export default function OtherWork({ data }) {
  return (
    <Splide
      className='other__work__splide'
      options={{
        arrows: false,
        type: 'fade',
        interval: 5000,
        rewind: true,
        autoplay: true,
        perPage: 1,
        speed: 1000,
        updateOnMove: true,
        drag: false,
      }}
    >
      {data.portfolios.map((item) => (
        <SplideSlide key={item.id}>
          <div className='content'>
            <div className='img'>
              <figure>
                <Image
                  src={`http://localhost:1337${item.attributes.MainImage.data.attributes.url}`}
                  layout='fill'
                  alt={item.attributes.Title}
                />
              </figure>
            </div>
            <div className='text'>
              <Link href={`/work/${item.id}`}>
                <a>{item.attributes.Title}</a>
              </Link>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
