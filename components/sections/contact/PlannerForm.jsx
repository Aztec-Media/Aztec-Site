import { useRef, useState } from 'react';
import Arrow from '../../vectors/Arrow';
import PlannerFormRow from './PlannerFormRow';

export default function PlannerForm() {
  const [selectedPart, setSelectedPart] = useState(1);

  const formRef = useRef(null);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const companyRef = useRef(null);
  const serviceRef = useRef(null);
  const dateRef = useRef(null);
  const detailsRef = useRef(null);
  const moreRef = useRef(null);

  function handleFormSubmit(e) {
    e.preventDefault();

    console.log('form submitted');

    let details = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      company: companyRef.current.value,
      service: serviceRef.current.value,
      date: dateRef.current.value,
      details: detailsRef.current.value,
      more: moreRef.current.value,
    };

    async function sendData() {
      const res = await fetch('/api/forms/planner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(details),
      });

      const data = await res.json();

      console.log(data);
    }

    // sendData();
  }

  return (
    <section className='planner__form'>
      <form className='form' onSubmit={handleFormSubmit} ref={formRef}>
        <div className={`part part1 ${selectedPart === 1 ? 'selected' : ''}`}>
          <PlannerFormRow
            label='name'
            type='text'
            name='name'
            id='name'
            placeholder='Your Name'
            ref={nameRef}
          />
          <PlannerFormRow
            label='email'
            type='text'
            name='email'
            id='email'
            placeholder='Email Address'
            ref={emailRef}
          />
          <PlannerFormRow
            label='phone'
            type='text'
            name='phone'
            id='phone'
            placeholder='Telephone'
            ref={phoneRef}
          />
          <div className='btns'>
            <div className='next' onClick={() => setSelectedPart(2)}>
              <div className='btn'>
                <span>Next</span>
                <div className='arrow'>
                  <Arrow />
                  <div className='btn__hover'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`part part2 ${selectedPart === 2 ? 'selected' : ''}`}>
          <PlannerFormRow
            label='company'
            type='text'
            name='company'
            id='company'
            placeholder='Company'
            ref={companyRef}
          />
          <PlannerFormRow
            label='service'
            type='text'
            name='service'
            id='service'
            placeholder='Service'
            ref={serviceRef}
          />
          <PlannerFormRow
            label='date'
            type='text'
            name='date'
            id='date'
            placeholder='Date required'
            ref={dateRef}
          />
          <div className='btns'>
            <div className='prev' onClick={() => setSelectedPart(1)}>
              <div className='btn'>
                <div className='arrow'>
                  <Arrow />
                  <div className='btn__hover'></div>
                </div>
                <span>Previous</span>
              </div>
            </div>
            <div className='next' onClick={() => setSelectedPart(3)}>
              <div className='btn'>
                <span>Next</span>
                <div className='arrow'>
                  <Arrow />
                  <div className='btn__hover'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`part part3 ${selectedPart === 3 ? 'selected' : ''}`}>
          <PlannerFormRow
            label='details'
            type='text'
            name='details'
            id='details'
            placeholder='Details'
            ref={detailsRef}
          />
          <PlannerFormRow
            label='more'
            type='text'
            name='more'
            id='more'
            placeholder='More'
            ref={moreRef}
          />
          <div className='btns'>
            <div className='prev' onClick={() => setSelectedPart(2)}>
              <div className='btn'>
                <div className='arrow'>
                  <Arrow />
                  <div className='btn__hover'></div>
                </div>
                <span>Previous</span>
              </div>
            </div>
            <button type='submit' className='btn submit'>
              <span>Send Enquiry</span>
              <div className='arrow'>
                <Arrow />
                <div className='btn__hover'></div>
              </div>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
