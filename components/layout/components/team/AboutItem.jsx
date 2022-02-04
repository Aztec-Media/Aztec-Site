import Image from 'next/image';

export default function AboutItem({ item }) {
  return (
    <div className='about__item'>
      <div className='about__item__img'>
        <figure>
          <div className='img__cover'></div>
          <Image
            src={item.attributes.Image.data.attributes.url}
            layout='fill'
            alt='#'
          />
        </figure>
      </div>
      <div className='about__item__text'>
        <h3>
          {item.attributes.Name} <span className='underline'></span>
        </h3>
        <p className='summary'>{item.attributes.Summary}</p>
        <div className='details'>
          <p className='skill'>
            <span> Skill:</span> {item.attributes.Title}
          </p>
          <p className='colour' style={{ borderColor: 'lightcoral' }}>
            <span>Favourite Colour:</span> {item.attributes.Colour}
          </p>
        </div>
        <p className='hobbies'>Hobbies</p>
        <p>{item.attributes.Hobbies}</p>
      </div>
    </div>
  );
}
