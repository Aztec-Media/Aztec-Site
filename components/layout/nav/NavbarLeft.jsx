import Link from 'next/link';

import Logo from '../../vectors/Logo';
import Line from '../../vectors/Line';

export default function NavbarLeft() {
  return (
    <section className='navbar__left'>
      <div className='navbar__left__logo nav--anim'>
        <Link href='/'>
          <a>
            <Logo />
          </a>
        </Link>
      </div>
      <div className='navbar__left__content'>
        <ul className='navbar__left__menu'>
          <li className='navbar__left__menu__item nav--anim'>
            <Link href='/services/web-design'>
              <a>
                <span>01</span>
                Web design
              </a>
            </Link>
          </li>
          <li className='navbar__left__menu__item nav--anim'>
            <Link href='/services/branding'>
              <a>
                <span>02</span>
                Branding
              </a>
            </Link>
          </li>
          <li className='navbar__left__menu__item nav--anim'>
            <Link href='/services/print-design'>
              <a>
                <span>03</span>
                Print design
              </a>
            </Link>
          </li>
          <li className='navbar__left__menu__item nav--anim'>
            <Link href='/services/photography'>
              <a>
                <span>04</span>
                Photography
              </a>
            </Link>
          </li>
          <li className='navbar__left__menu__item nav--anim'>
            <Link href='/services/social-media'>
              <a>
                <span>05</span>
                Social media
              </a>
            </Link>
          </li>
        </ul>
        <div className='navbar__left__sectors'>
          <h4 className='nav--anim'>Sectors</h4>
          <ul>
            <li className='nav--anim'>
              <span>
                <Line />
              </span>
              Commercial
            </li>
            <li className='nav--anim'>
              <span>
                <Line />
              </span>
              Hospitality
            </li>
            <li className='nav--anim'>
              <span>
                <Line />
              </span>
              Education
            </li>
            <li className='nav--anim'>
              <span>
                <Line />
              </span>
              Charities
            </li>
            <li className='nav--anim'>
              <span>
                <Line />
              </span>
              Food &amp; Drink
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
