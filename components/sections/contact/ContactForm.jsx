import { useRef, useState } from 'react';
import Arrow from '../../vectors/Arrow';

export default function PlannerForm() {
  const formRef = useRef(null);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);

  function handleFormSubmit(e) {
    e.preventDefault();

    console.log('form submitted');

    let details = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value,
    };

    async function sendData() {
      const res = await fetch('/api/forms/contact', {
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
    <section className='contact__form'>
      <form className='form' onSubmit={handleFormSubmit}>
        <div className='row'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            ref={nameRef}
          />
        </div>
        <div className='row'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            ref={emailRef}
          />
        </div>
        <div className='row'>
          <label htmlFor='phone'>Phone</label>
          <input
            type='text'
            name='phone'
            id='phone'
            placeholder='Phone'
            ref={phoneRef}
          />
        </div>
        <div className='row'>
          <label htmlFor='message'>Message</label>
          <textarea
            name='message'
            id='message'
            placeholder='Message'
            ref={messageRef}
          ></textarea>
        </div>
        <div className='row submit'>
          <button type='submit' className='btn submit'>
            <span>Send Enquiry</span>
            <div className='arrow'>
              <Arrow />
              <div className='btn__hover'></div>
            </div>
          </button>
        </div>
      </form>
    </section>
  );
}
