import Seo from '../../components/layout/Seo';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import ContactSection from '../../components/sections/contact/ContactSection';
import DotLogo from '../../components/vectors/DotLogo';
import LogoFillClip from '../../components/vectors/LogoFillClip';

export default function Contact() {
  return (
    <Layout>
      <Seo title='Contact Us' />
      <main className='contact'>
        <section className='dot__logo'>
          <DotLogo />
          <LogoFillClip />
        </section>
        <section className='contact__header'>
          <h1>Get In Touch</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            inventore vitae ex porro aspernatur quo numquam, a animi earum quis!
          </p>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </Layout>
  );
}
