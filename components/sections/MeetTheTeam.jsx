import TeamSplide from '../sliders/TeamSplide';

export default function MeetTheTeam() {
  return (
    <section className='meet__the__team'>
      <TeamSplide direction='ltr' />
      <TeamSplide direction='rtl' />
    </section>
  );
}
