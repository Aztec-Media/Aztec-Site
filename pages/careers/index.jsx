import Seo from '../../components/layout/Seo';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import CareersGrid from '../../components/sections/careers/CareersGrid';
import Btn from '../../components/general/Btn';

export default function Careers({ data }) {
  return (
    <Layout>
      <Seo title='Careers' />
      <main className='careers__section'>
        <div className='careers__section__header'>
          <div className='text'>
            <h1>Join Our Team!</h1>
            <p>
              Revenue-driven, customer-centric, creating strategic solutions
              based in technology, we help brands.
            </p>
          </div>
          <div className='btns'>
            <Btn href='/' text='What we do' />
            <Btn href='/' text='Recent Work' />
          </div>
        </div>
        <CareersGrid />
      </main>
      <Footer />
    </Layout>
  );
}
