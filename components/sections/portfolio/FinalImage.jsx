import Image from 'next/image';

export default function FinalImage({ portfolio }) {
  return (
    <section className='final__img'>
      <div className='img'>
        <figure>
          <Image
            src={`http://localhost:1337${portfolio.attributes.fullWidthImage3.data.attributes.url}`}
            alt={
              portfolio.attributes.fullWidthImage3.data.attributes
                .alternativeText
            }
            layout='fill'
          />
        </figure>
      </div>
    </section>
  );
}
