import Seo from '../components/layout/Seo';
import LogoFill from '../components/vectors/LogoFill';
import Btn from '../components/layout/components/Btn';

export default function Custom404() {
  return (
    <main className='home'>
      <Seo title='404 - Page Not Found' />
      <section className='section__404'>
        <h1>
          <span>4</span>
          <LogoFill />
          <span>4</span>
        </h1>
        <p>That page is not found ...</p>
        <Btn href='/' text='Back home' />
      </section>
    </main>
  );
}
