import Link from 'next/link';

export default function NavbarRight() {
  return (
    <section className='navbar__right'>
      <div className='navbar__right__contact'>
        <a href='mailto:hello@aztec.media' className='email nav--anim'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              viewBox='0 0 16 16'
            >
              <path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z' />
            </svg>
          </span>
          hello@aztec.media
        </a>
        <a href='tel:01935477073' className='phone nav--anim'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              viewBox='0 0 16 16'
            >
              <path d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z' />
            </svg>
          </span>
          01935 477073
        </a>
      </div>
      <ul className='navbar__right__menu'>
        <li className='navbar__right__menu__item nav--anim'>
          <Link href='/about'>
            <a>
              <span>06</span>
              Who we are
            </a>
          </Link>
        </li>
        <li className='navbar__right__menu__item nav--anim'>
          <Link href='/work'>
            <a>
              <span>07</span>
              Our work
            </a>
          </Link>
        </li>
        <li className='navbar__right__menu__item nav--anim'>
          <Link href='/insights'>
            <a>
              <span>08</span>
              Insights
            </a>
          </Link>
        </li>
        <li className='navbar__right__menu__item nav--anim'>
          <Link href='/contact'>
            <a>
              <span>09</span>
              Get in touch
            </a>
          </Link>
        </li>
        <li className='navbar__right__menu__item nav--anim'>
          <Link href='/careers'>
            <a>
              <span>10</span>
              Careers
            </a>
          </Link>
        </li>
      </ul>
      <div className='navbar__right__details'>
        <h5 className='nav--anim'>
          Part of the{' '}
          <a href='https://yeomedia.group' target='_blank' rel='noreferrer'>
            YeoMedia Group
          </a>
        </h5>
        <address>
          <p className='nav--anim'>8 Buckland Road,</p>
          <p className='nav--anim'>Pen Mill Trading Estate, Yeovil</p>
          <p className='nav--anim'>Somerset, BA21 5EA</p>
        </address>
        <p className='directions nav--anim'>Get Directions</p>
      </div>
    </section>
  );
}
