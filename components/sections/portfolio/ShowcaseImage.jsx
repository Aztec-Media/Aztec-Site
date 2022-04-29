import Image from 'next/image';

export default function ShowcaseImage({ portfolio }) {
  return (
    <section className='showcase__img'>
      <figure>
        <Image
          src={`http://localhost:1337${portfolio.attributes.fullWidthImage1.data.attributes.url}`}
          layout='fill'
          alt={
            portfolio.attributes.fullWidthImage1.data.attributes.alternativeText
          }
        />
      </figure>
    </section>
  );
}
