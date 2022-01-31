import Btn from '../layout/components/Btn';

import { colourState } from '../../utils/colourState';

export default function HomeServices() {
  return (
    <section
      className='home__services'
      onClick={() => (colourState.bgColour = 'blue')}
    >
      <div className='home__services__header'>
        <div className='text'>
          <h2>Website + Digital</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            nostrum exercitationem deleniti pariatur reiciendis molestias.
          </p>
        </div>
        <div className='button'>
          <Btn href='/about' text='What we do' />
        </div>
      </div>
    </section>
  );
}
