import { useEffect } from 'react';
import { colourState } from '../utils/colourState';
import Seo from '../components/layout/Seo';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import ContactForm from '../components/sections/contact/ContactForm';

export default function Contact() {
  useEffect(() => {
    colourState.bgColour = 'blue';
  }, []);

  return (
    <Layout>
      <Seo title='Contact Us' />
      <main className='contact'>
        <section className='contact__header'>
          <h1>Get In Touch</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            inventore vitae ex porro aspernatur quo numquam, a animi earum quis!
          </p>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </Layout>
  );
}
