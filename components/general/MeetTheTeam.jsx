import TeamSplide from '../sections/sliders/TeamSplide';

export default function MeetTheTeam({ teamData }) {
  return (
    <section className='meet__the__team'>
      <TeamSplide direction='ltr' teamData={teamData} />
      <TeamSplide direction='rtl' teamData={teamData} />
    </section>
  );
}
