import WorkCircle from './WorkCircle';

export default function WorkCircles({ portfolioData }) {
  return (
    <section className='work__circles'>
      <div className='.work__navigation'></div>
      {portfolioData.map((item, index) =>
        index > 7 ? (
          ''
        ) : (
          <WorkCircle
            key={item.id}
            item={item}
            index={portfolioData.length - index}
          />
        )
      )}
    </section>
  );
}
