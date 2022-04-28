import TeamSplide from '../sections/sliders/TeamSplide';
import teamData from '../../data/teamData.json';

export default function MeetTheTeam({ team }) {
  return (
    <section className='meet__the__team'>
      <TeamSplide direction='ltr' teamData={team} />
      <TeamSplide direction='rtl' teamData={team} />
    </section>
  );
}
