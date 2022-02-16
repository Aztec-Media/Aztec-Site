import Btn from '../../general/Btn';

export default function ContactSection() {
  return (
    <section className='contact__section'>
      <div className='contact__details'>
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
      </div>
      <div className='contact__form'>
        <form className='form'>
          <div className='row'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' placeholder='Name' />
          </div>
          <div className='row'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' placeholder='Email' />
          </div>
          <div className='row'>
            <label htmlFor='phone'>Phone</label>
            <input type='text' name='phone' id='phone' placeholder='Phone' />
          </div>
          <div className='row'>
            <label htmlFor='message'>Message</label>
            <textarea
              name='message'
              id='message'
              placeholder='Message'
            ></textarea>
          </div>
        </form>
      </div>
    </section>
  );
}
