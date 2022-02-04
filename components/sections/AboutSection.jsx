import Btn from '../layout/components/Btn';
import AboutGrid from '../layout/components/team/AboutGrid';

export default function AboutSection({ teamData }) {
  return (
    <section className='about__section'>
      <div className='about__section__header'>
        <div className='text'>
          <h2>Creative bunch.</h2>
          <p>
            Revenue-driven, customer-centric, creating strategic solutions based
            in technology, we help brands.
          </p>
        </div>
        <div className='btns'>
          <Btn href='/' text='What we do' />
          <Btn href='/' text='Recent Work' />
        </div>
      </div>
      <AboutGrid teamData={teamData} />
    </section>
  );
}
