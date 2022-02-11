import { useState } from 'react';
import Arrow from '../../vectors/Arrow';

export default function ContactForm() {
  const [selectedPart, setSelectedPart] = useState(1);
  return (
    <section className='contact__form'>
      <form className='form'>
        <div className={`part part1 ${selectedPart === 1 ? 'selected' : ''}`}>
          <div className='page'>01</div>
          <div className='row'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' placeholder='Your name' />
            <div className='slide'></div>
          </div>
          <div className='row'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Email Address'
            />
            <div className='slide'></div>
          </div>
          <div className='row'>
            <label htmlFor='phone'>Phone</label>
            <input
              type='text'
              name='phone'
              id='phone'
              placeholder='Telephone'
            />
            <div className='slide'></div>
          </div>
          <div className='next' onClick={() => setSelectedPart(2)}>
            Next
          </div>
        </div>
        <div
          className={`part part2 ${
            selectedPart === 2 ? 'selected' : 'removed'
          }`}
        >
          <div className='page'>02</div>
          <div className='row'>
            <label htmlFor='name'>Company</label>
            <input type='text' name='name' id='name' placeholder='Company' />
            <div className='slide'></div>
          </div>
          <div className='row'>
            <label htmlFor='email'>Service</label>
            <input type='email' name='email' id='email' placeholder='Service' />
            <div className='slide'></div>
          </div>
          <div className='row'>
            <label htmlFor='phone'>Phone</label>
            <input type='text' name='phone' id='phone' placeholder='Date' />
            <div className='slide'></div>
          </div>
          <div className='next' onClick={() => setSelectedPart(3)}>
            Next
          </div>
          <div className='prev' onClick={() => setSelectedPart(1)}>
            Prev
          </div>
        </div>
        <div
          className={`part part3 ${
            selectedPart === 3 ? 'selected' : 'removed'
          }`}
        >
          <div className='page'>02</div>
          <div className='row'>
            <label htmlFor='name'>Details</label>
            <input type='text' name='name' id='name' placeholder='Details' />
            <div className='slide'></div>
          </div>
          <div className='row'>
            <label htmlFor='email'>More</label>
            <input type='email' name='email' id='email' placeholder='More' />
            <div className='slide'></div>
          </div>
          <div className='row submit'>
            <button type='submit' className='btn'>
              <span>Send Enquiry</span>
              <div className='arrow'>
                <Arrow />
              </div>
            </button>
          </div>
          <div className='prev' onClick={() => setSelectedPart(2)}>
            Prev
          </div>
        </div>
      </form>
    </section>
  );
}
