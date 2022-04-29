import Image from 'next/image';

export default function WorkImageGrid({ portfolio }) {
  return (
    <section className='work__image__grid'>
      <div className='text__header'>
        <p>{portfolio.attributes.infoText}</p>
      </div>
      <div className='grid'>
        <div className='img'>
          <figure>
            <Image
              src={`http:localhost:1337${portfolio.attributes.fullWidthImage2.data.attributes.url}`}
              alt={
                portfolio.attributes.fullWidthImage2.data.attributes
                  .alternativeText
              }
              layout='responsive'
              width={portfolio.attributes.fullWidthImage2.data.attributes.width}
              height={
                portfolio.attributes.fullWidthImage2.data.attributes.height
              }
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
