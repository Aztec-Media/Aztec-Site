import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { Fragment } from 'react';
import DualArrow from '../../vectors/DualArrow';

export default function TeamSplide({ direction, teamData }) {
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const randomed = shuffle(teamData);

  return (
    <Splide
      className={`team__splide ${direction}`}
      options={{
        arrows: false,
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 5,
        gap: '2rem',
        pauseOnHover: false,
        autoScroll: {
          speed: 2,
        },
        direction,
        breakpoints: {
          1800: {
            perPage: 4,
          },
          1100: {
            perPage: 3,
          },
          750: {
            perPage: 2,
          },
          400: {
            perPage: 1,
            gap: '6rem',
          },
        },
      }}
      extensions={{ AutoScroll }}
    >
      {randomed.map((item, index) => (
        <Fragment key={index}>
          <SplideSlide>
            <div className='slide__content'>
              <div className='overlay'></div>
              <div className='img'>
                <figure>
                  <Image
                    src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                    layout='fill'
                    alt={item.attributes.image.data.attributes.alternativeText}
                  />
                </figure>
                <figure className='hover__img'>
                  <Image
                    src={`http://localhost:1337${item.attributes.gif.data.attributes.url}`}
                    layout='fill'
                    alt={item.attributes.image.data.attributes.alternativeText}
                  />
                </figure>
              </div>
              <div className='text'>
                <h4>{item.attributes.name}</h4>
                <p>{item.attributes.title}</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className='slide__spacer'>
              <p>Our Team</p>
              <div className='arrows'>
                <DualArrow />
              </div>
            </div>
          </SplideSlide>
        </Fragment>
      ))}
    </Splide>
  );
}
