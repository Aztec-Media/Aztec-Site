import Arrow from '../../vectors/Arrow';

export default function PlannerForm() {
  return (
    <div className='contact__form'>
      <form className='form' action='/api/forms/contact'>
        <div className='row name'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' />
        </div>
        <div className='row email'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' />
        </div>
        <div className='row service'>
          <label htmlFor='service'>Service</label>
          <input type='text' name='services' id='service' />
        </div>
        <div className='row message'>
          <label htmlFor='message'>Message</label>
          <textarea name='message' id='message'></textarea>
        </div>
        <div className='row submit'>
          <button type='submit' className='btn'>
            <span>Send Enquiry</span>
            <div className='arrow'>
              <Arrow />
              <div className='btn__hover'></div>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}
