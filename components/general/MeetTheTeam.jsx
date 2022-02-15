import TeamSplide from '../sections/sliders/TeamSplide';
import teamData from '../../data/teamData.json';

export default function MeetTheTeam() {
  return (
    <section className='meet__the__team'>
      <TeamSplide direction='ltr' teamData={teamData} />
      <TeamSplide direction='rtl' teamData={teamData} />
    </section>
  );
}
