import AboutItem from './AboutItem';

export default function AboutGrid({ teamData }) {
  return (
    <section className='about__grid'>
      {teamData.map((item) => (
        <AboutItem key={item.id} item={item} />
      ))}
    </section>
  );
}
