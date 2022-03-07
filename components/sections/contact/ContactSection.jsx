import Btn from '../../general/Btn';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section className='contact__section'>
      <ContactForm />
      {/* <div className='contact__details'>
        <h5>Aztec Media</h5>
        <address>
          <ul>
            <li>8 Buckland Road</li>
            <li>Pen Mill Trading Estate</li>
            <li>Yeovil</li>
            <li>Somerset</li>
            <li>BA20 5EA</li>
          </ul>
          <div className='map'>
            <Btn href='/' text='View Map' />
          </div>
        </address>
      </div> */}
    </section>
  );
}
