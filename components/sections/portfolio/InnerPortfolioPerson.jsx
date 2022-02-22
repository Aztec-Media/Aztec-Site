import Btn from '../../general/Btn';
import LogoFill from '../../vectors/LogoFill';
import LogoFillClip from '../../vectors/LogoFillClip';
import Image from 'next/image';

export default function InnerPortfolioPerson({ bgColour, colour }) {
  return (
    <section
      className='inner__portfolio__person'
      style={{
        backgroundColor: bgColour ? bgColour : '',
        color: colour ? colour : 'var(--blue)',
      }}
    >
      <div className='person__img'>
        <div className='img'>
          <figure>
            <Image
              src='/img.jpg'
              layout='fill'
              alt={`Aztec Media Our Work `}
              className='work__circle__img'
            />
          </figure>
          <LogoFillClip />
        </div>
      </div>
      <div className='text'>
        <h6>James</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero totam
          quo non eveniet eos sint?
        </p>
        <Btn href='/contact' text='Plan your project' />
      </div>
    </section>
  );
}
