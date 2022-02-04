import Image from 'next/image';

export default function WorkCircle({ item, pageY, pageX, index }) {
  return (
    <article
      className='work__circle'
      style={{
        transform: `translate(-${pageX * (index + 1)}px, -${
          pageY * (index + 1)
        }px)`,
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
        <div className='hover__circle'>
          <p>{item.attributes.Title}</p>
          <p>Discover</p>
        </div>
      </div>
    </article>
  );
}
