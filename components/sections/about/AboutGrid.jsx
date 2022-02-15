import AboutItem from './AboutItem';
import teamData from '../../../data/teamData.json';

export default function AboutGrid() {
  return (
    <section className='about__grid'>
      {teamData.map((item, index) => (
        <AboutItem key={index} item={item} />
      ))}
    </section>
  );
}
