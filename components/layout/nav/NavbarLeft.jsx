import Link from 'next/link';

import Logo from '../../vectors/Logo';
import Line from '../../vectors/Line';

export default function NavbarLeft() {
  return (
    <section className='navbar__left'>
      <div className='navbar__left__logo'>
        <Logo />
      </div>
      <div className='navbar__left__content'>
        <ul className='navbar__left__menu'>
          <li className='navbar__left__menu__item'>
            <Link href='/'>
              <a>
                <span>01</span>
                Web design
              </a>
            </Link>
          </li>
          <li className='navbar__left__menu__item'>
            <Link href='/'>
              <a>
                <span>02</span>
                Branding
              </a>
            </Link>
          </li>
          <li className='navbar__left__menu__item'>
            <Link href='/'>
              <a>
                <span>03</span>
                Print design
              </a>
            </Link>
          </li>
          <li className='navbar__left__menu__item'>
            <Link href='/'>
              <a>
                <span>04</span>
                Photography
              </a>
            </Link>
          </li>
          <li className='navbar__left__menu__item'>
            <Link href='/'>
              <a>
                <span>05</span>
                Social media
              </a>
            </Link>
          </li>
        </ul>
        <div className='navbar__left__sectors'>
          <h4>Sectors</h4>
          <ul>
            <li>
              <span>
                <Line />
              </span>
              Commercial
            </li>
            <li>
              <span>
                <Line />
              </span>
              Hospitality
            </li>
            <li>
              <span>
                <Line />
              </span>
              Education
            </li>
            <li>
              <span>
                <Line />
              </span>
              Charities
            </li>
            <li>
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
