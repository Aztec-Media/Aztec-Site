import Btn from "../../general/Btn";
import Image from 'next/image'

export default function WorkHeading({ portfolio }) {
  return (
    <section className='work__heading'>
      <div className='black'></div>
      <div className='title'>
        <p>{portfolio.attributes.topBarText}</p>
        <div>
          <h1>{portfolio.attributes.title}</h1>
          <Btn href='/project-planner' text='Plan your project' />
        </div>
      </div>
      <div className='main__img'>
        <figure>
          <Image
            src={`http://localhost:1337${portfolio.attributes.mainImage.data.attributes.url}`}
            layout='fill'
            alt={portfolio.attributes.mainImage.data.attributes.alternativeText}
            priority='true'
          />
        </figure>
      </div>
    </section>
  );
}
