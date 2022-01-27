import NavbarLeft from './nav/NavbarLeft';
import NavbarRight from './nav/NavbarRight';

export default function Navbar({ navbarOpen, setNavbarOpen }) {
  return (
    <nav className='navbar'>
      <button
        type='button'
        className='navbar__burger'
        onClick={() => setNavbarOpen(false)}
      >
        <div className='line'></div>
        <div className='line'></div>
      </button>
      <NavbarLeft />
      <NavbarRight />
    </nav>
  );
}
