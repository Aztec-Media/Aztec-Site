import Arrow from '../../vectors/Arrow';

export default function PlannerForm() {
  return (
    <section className='contact__form'>
      <form className='form' action='/api/forms/contact'>
        <div className='form__details'>
          <span className='text'>Hello, my name is &nbsp;</span>
          <input type='text' name='name' id='name' placeholder='Type here' />
          <span>,</span>
          <br />
          <span className='text'>and I&apos;m looking for &nbsp;</span>
          <input
            type='text'
            name='service'
            id='service'
            placeholder='Ecommerce website'
          />
          <span>.</span>
          <br />
          <span className='text'>You can contact me on &nbsp;</span>
          <input
            type='text'
            name='email'
            id='email'
            placeholder='hello@aztec.media'
          />
          <span>.</span>
        </div>
        <button type='submit' className='btn submit'>
          <span>Send Enquiry</span>
          <div className='arrow'>
            <Arrow />
            <div className='btn__hover'></div>
          </div>
        </button>
      </form>
    </section>
  );
}
