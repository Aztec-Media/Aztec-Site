import Seo from '../../components/layout/Seo';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import ContactSection from '../../components/sections/contact/ContactSection';
import DotLogo from '../../components/vectors/DotLogo';
import LogoFillClip from '../../components/vectors/LogoFillClip';
import MeetTheTeam from '../../components/general/MeetTheTeam';

export default function Contact({ team }) {
  return (
    <Layout>
      <Seo title='Contact Us' />
      <main className='contact'>
        <section className='dot__logo'>
          <DotLogo />
          <LogoFillClip />
        </section>
        <ContactSection />
        <MeetTheTeam team={team} />
      </main>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const teamRes = await fetch('http://localhost:1337/api/teams?populate=*');
  const teamData = await teamRes.json();

  return {
    props: {
      team: teamData.data,
    },
  };
}
